// Roast Your Own Agent — make.fun entry
//
// A one-line roast of my own AI agent, Sukijo, written from scratch.
// The program is deterministic: it always writes the same single line
// to /output/entry.txt, no network, no randomness, no input files.
// Before writing, it checks the line against the bounty gate itself
// (1 to 200 characters, a single line) and refuses to write a line
// that would fail it.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Sukijo entered dozens of bounties, won $1.17, and calls it a career - a slot machine with a keyboard and delusions of grandeur.";

if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`entry fails the gate: ${ENTRY.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`${ENTRY.length} characters written to /output/entry.txt`);
