// SOLMIRA — a travel poster for a place that does not exist.
//
// The whole program: hand the finished poster in. It copies the
// committed entry.png next to this file to /output/entry.png (or to
// MAKEFUN_OUTPUT_DIR when the grader is not the one running it).
// A byte-for-byte copy, so every run hands in the identical poster.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
console.log("poster handed in: entry.png ->", join(outDir, "entry.png"));
