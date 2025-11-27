const fs = require('fs');
const path = require('path');

const pathsToCheck = [
  { desc: 'allTerms', path: 'app/data/terms.ts' },
  { desc: 'TypingEngine', path: 'app/components/TypingEngine.tsx' },
];

pathsToCheck.forEach(({ desc, path: p }) => {
  const fullPath = path.join(__dirname, p);
  if (fs.existsSync(fullPath)) {
    console.log(`✅ ${desc} exists at ${fullPath}`);
  } else {
    console.log(`❌ ${desc} NOT found at ${fullPath}`);
  }
});
