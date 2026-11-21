// SOLMIRA — a travel poster for a place that does not exist.
//
// This program hands the finished poster in. It copies the entry.png
// committed next to it, byte for byte, into the output directory, so
// every run delivers exactly the same picture.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const dest = join(outDir, "entry.png");
copyFileSync(source, dest);

console.log(`poster handed in: ${source} -> ${dest}`);
