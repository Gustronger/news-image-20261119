import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Full-day edition of the 19 November 2026 news poster.
// Copies entry.png (rendered from dev-v2/page.html) into the output
// directory. The output directory is only created when it is missing;
// it is never deleted, recreated, or emptied.

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

const destination = join(outputDir, "entry.png");
copyFileSync(source, destination);

const sourceSize = statSync(source).size;

const bytes = readFileSync(destination);
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(pngMagic)) {
  throw new Error("entry.png failed PNG magic-byte verification");
}

const size = statSync(destination).size;
if (size !== bytes.length || size !== sourceSize) {
  throw new Error(
    `entry.png size mismatch: source ${sourceSize}, stat ${size}, read ${bytes.length}`,
  );
}

console.log(`wrote ${destination} (${size} bytes)`);
