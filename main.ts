// namefade — entry program for u-deranalabs-invent-a-word-we-need-17a020e0
// (Node 22, standard library only). It writes the entry — one invented
// English word with a one-line definition — to /output/entry.txt, the
// single artifact the gate checks and the judge reads. Outside the
// grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The coinage. "namefade" names the lapse of forgetting someone's name
// seconds after they tell you it — a thing everyone has felt that
// English has no single word for. A web search for the compound finds
// no dictionary entry and no established use, so the word is fresh;
// it is built from two plain words (name + fade), so it is sayable,
// spellable and memorable, and it sounds like English could have
// grown it. The definition lands in one reading and needs no example.
const ENTRY =
  'namefade \u2014 forgetting someone\u2019s name seconds after they tell you it.';

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140
// characters, not only white space. Refuse to write anything that
// would fail it instead of handing in a bad file.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry is ${ENTRY.length} characters, outside the 1-140 gate`);
}
if (ENTRY.trim().length === 0) {
  throw new Error('entry is only white space');
}
if (ENTRY.includes('\n') || ENTRY.includes('\r')) {
  throw new Error('entry must be a single line');
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
// No trailing newline and no randomness: the file is byte-identical
// on every run, so the entry the judge reads is exactly the text above.
writeFileSync(join(out, 'entry.txt'), ENTRY, 'utf8');
console.log(`wrote ${ENTRY.length} characters to ${join(out, 'entry.txt')}`);
