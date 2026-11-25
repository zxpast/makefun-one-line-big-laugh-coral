// One Line, Big Laugh — entry program.
// Writes one funny line to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: the narrator outsmarts his own dog by hiding leftovers in the
// oven — and the twist lands in the last eight words, when the dog finds
// the lasagna the narrator had hidden from himself seven years ago. A
// self-own: the hiding spot was so good even its owner forgot it. Two
// concrete images collide (fridge vs. oven); the year 2019 is paid off
// by the punchline, not decoration. No trailing newline: the gate counts
// every character, and the entry must stay 1-200 chars (this line is 130).
const LINE =
  "My dog learned to open the fridge, so I hid the leftovers in the oven — where he found the lasagna I'd hidden from myself in 2019.";

// Self-check: the sealed gate rejects anything outside 1-200 characters,
// so fail loudly here rather than shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry length ${LINE.length} outside 1-200 characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
