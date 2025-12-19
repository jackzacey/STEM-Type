// components/useTypingTest.ts
import { useEffect, useState, useRef } from 'react';
import { Term } from '@/data/terms';

type CharState = 'untyped' | 'correct' | 'incorrect';

export function useTypingTest(terms: Term[]) {
  // ... all your existing state/code stays the same ...

  // Add this ref to prevent double-increments
  const hasIncrementedRef = useRef(false);

  // Detect perfect completion and increment global counter
  useEffect(() => {
    if (isPerfect && cursor === chars.length && extra === '' && !hasIncrementedRef.current) {
      hasIncrementedRef.current = true;

      // Fire and forget — we don't block the user if it fails
      fetch('/api/counter', { method: 'POST' }).catch(console.error);
    }

    // Reset the flag when moving to next term
    if (termIndex !== previousTermIndexRef.current) {
      hasIncrementedRef.current = false;
      previousTermIndexRef.current = termIndex;
    }
  }, [isPerfect, cursor, chars.length, extra, termIndex]);

  // Add this ref to track previous term index
  const previousTermIndexRef = useRef(0);

  // Make sure to initialize it
  previousTermIndexRef.current = termIndex;

  // ... rest of your code unchanged ...

  return { term: current, chars, states, cursor, extra, termIndex, totalTerms: terms.length, isPerfect, wpm, accuracy, elapsed };
}
