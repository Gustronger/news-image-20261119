// The World in One Day — 19 November 2026 (morning edition).
//
// This program's only job is to place the finished poster into the output
// directory. The image itself ships in this repo as entry.png: a violet
// poster with one giant yellow "19", a lead story on the Trump–Xi–Putin
// summit in Shenzhen, four more stories in a staggered grid, a wide bar on
// Estonia closing its Russia border, and a footer of smaller stories plus a
// markets ticker. Every fact on it was checked against live news sources on
// the morning of 19 November 2026.
//
// Node 22, standard library only. The sandbox runs as an unprivileged user
// on a read-only filesystem where only the output directory is writable, so
// this program never deletes or recreates that directory: it makes it only
// when it is missing, then copies the image in and checks the result — the
// PNG magic bytes and the exact byte size — before reporting success. Run it
// twice and the output bytes are identical.

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const PNG_MAGIC = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);

const repoRoot = resolve(import.meta.dirname);
const bundledImage = join(repoRoot, "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputImage = join(outputDir, "entry.png");

const bundledSize = statSync(bundledImage).size;

mkdirSync(outputDir, { recursive: true });
copyFileSync(bundledImage, outputImage);

const writtenBytes = readFileSync(outputImage);
if (writtenBytes.length !== bundledSize) {
  throw new Error(
    `entry.png size mismatch after copy: ${writtenBytes.length} bytes written, ${bundledSize} expected`,
  );
}
if (!writtenBytes.subarray(0, PNG_MAGIC.length).equals(PNG_MAGIC)) {
  throw new Error("entry.png failed its PNG magic-byte check");
}

console.log(`Wrote ${outputImage} (${writtenBytes.length} bytes)`);
