import { useEffect, useState, useRef } from 'react';
import { Term } from '../data/terms';

type CharState = 'untyped' | 'correct' | 'incorrect';

export function useTypingTest(terms: Term[]) {
  const [termIndex, setTermIndex] = useState(0);
  const [cursor, setCursor] = useState(0);
  const [states, setStates] = useState<CharState[]>([]);
  const [extra, setExtra] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);

  const intervalRef = useRef<NodeJS.Timer | null>(null);
  const current = terms[termIndex];
  const chars = current?.definition.split('') || [];

  // Reset when term changes
  useEffect(() => {
    setCursor(0);
    setStates(chars.map(() => 'untyped'));
    setExtra('');
    setStartTime(null);
    setElapsed(0);
  }, [termIndex, current]);

  // Timer updates
  useEffect(() => {
    if (startTime === null) return;
    intervalRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [startTime]);

  // Key handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      if (!current) return;

      // Start timer immediately
      if (!startTime) {
        setStartTime(Date.now());
        setElapsed(0);
      }

      if (e.key === 'Backspace') {
        if (extra) setExtra(extra.slice(0, -1));
        else if (cursor > 0) {
          setStates(prev => {
            const next = [...prev];
            next[cursor - 1] = 'untyped';
            return next;
          });
          setCursor(c => c - 1);
        }
        return;
      }

      if (e.key === 'Enter') {
        if (cursor === chars.length && states.every(s => s === 'correct') && extra === '') {
          setTermIndex(i => i + 1);
        }
        return;
      }

      if (e.key.length === 1) {
        if (cursor < chars.length) {
          const correct = e.key === chars[cursor];
          setStates(prev => {
            const next = [...prev];
            next[cursor] = correct ? 'correct' : 'incorrect';
            return next;
          });
          setCursor(c => c + 1);
        } else {
          setExtra(prev => prev + e.key);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cursor, states, extra, current, startTime]);

  // Stats
  const isPerfect = cursor === chars.length && states.every(s => s === 'correct') && extra === '';
  const correctChars = states.filter(s => s === 'correct').length;
  const totalCharsTyped = cursor + extra.length;
  const accuracy = totalCharsTyped ? Math.round((correctChars / totalCharsTyped) * 100) : 100;
  const wpm = elapsed ? Math.round((correctChars / 5) / (elapsed / 60)) : 0;

  return { term: current, chars, states, cursor, extra, termIndex, totalTerms: terms.length, isPerfect, wpm, accuracy, elapsed };
}
