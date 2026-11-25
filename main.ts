import { mkdirSync, writeFileSync } from "node:fs";

// miswave — a word English needed: the wave you give a stranger who was
// waving at the person behind you. One invented word, one clear line.
const entry =
  "miswave — the wave you give a stranger who was waving at the person behind you.";

// The sealed gate accepts 1 to 140 characters; refuse to write anything else.
if (entry.length < 1 || entry.length > 140) {
  throw new Error(`entry must be 1-140 chars, got ${entry.length}`);
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(out.slice(0, out.lastIndexOf("/")) || ".", { recursive: true });
writeFileSync(out, entry);
