// SPDX-License-Identifier: MIT
// One Letter: Coffee or Tea — writes the single letter A (coffee) to /output/entry.txt.
// A stands for coffee: the stronger, truer morning answer —
// bold, bitter, and the one that actually wakes you up.
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = "/output";
try {
  mkdirSync(outDir, { recursive: true });
} catch {
  // /output may already exist or be unwritable; fall back below
}
const target = join(outDir, "entry.txt");
writeFileSync(target, "A", "utf8");
console.log("wrote A to", target);
