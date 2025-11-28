@tailwind base;
@tailwind components;
@tailwind utilities;

/* ────────────────────── Base ────────────────────── */
html, body {
  height: 100%;
  margin: 0;
  background: #000;
  color: white;
  font-family: 'JetBrains Mono', monospace;
  overflow-x: hidden;
}

main {
  min-height: 100vh;
  position: relative;
  z-index: 10;
}

/* ────────────────────── Buttons ────────────────────── */
button {
  cursor: pointer !important;
  transition: all 0.3s ease;
  user-select: none;
}
button:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 40px rgba(34, 211, 238, 0.5);
}
button:active {
  transform: translateY(-2px);
}
button[class*="bg-cyan"] {
  background: rgba(6, 182, 212, 0.25) !important;
  box-shadow: 0 0 30px rgba(34, 211, 238, 0.7);
}

/* ────────────────────── Typing Display ────────────────────── */
.typing-line {
  white-space: pre-wrap;         /* wraps lines vertically */
  word-break: break-word;         /* ← breaks "chemical" cleanly */
  overflow-wrap: break-word;      /* ← extra insurance */
  overflow: hidden;
  line-height: 1.3;
  text-align: center;
}

/* Individual characters */
.char {
  display: inline-block;
}

/* Cursor – thick, soft blink */
.cursor {
  position: relative;
}
.cursor::after {
  content: '';
  position: absolute;
  left: 0;
  top: 5%;
  height: 90%;
  width: 6px;
  background: white;
  animation: blink 1s step-end infinite;
}

/* Colors – soft MonkeyType style */
.untyped   { color: #666; }
.correct   { color: #94ef94; }
.incorrect { 
  color: #ff6666; 
  background: rgba(255, 102, 102, 0.18);
}

/* Blink animation */
@keyframes blink {
  50% { opacity: 0; }
}

/* Hide any accidental scrollbars */
.typing-line::-webkit-scrollbar {
  display: none;
}
.typing-line {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
