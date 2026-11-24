// news-image-20261123 entry (Node 22, standard library only).
//
// The repository holds the finished front page, entry.png: a 1024x1024
// newspaper page summing up Monday 23 November 2026, drawn programmatically
// with PIL + DejaVu fonts from that day's reported news. This program copies
// it to /output/entry.png, after checking it is a real PNG within the
// competition's limits, so both grading runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SRC = new URL('./entry.png', import.meta.url);
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const DEST = join(OUT_DIR, 'entry.png');

// The gate: a whole PNG, at most 1 MiB and 1024 by 1024 pixels.
const MAX_BYTES = 1024 * 1024;
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const bytes = readFileSync(SRC);
if (bytes.length > MAX_BYTES) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB cap`);
}
if (!bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error('entry.png is not a PNG');
}
// The first chunk of a whole PNG is always IHDR; a truncated or
// mislabelled file fails here instead of reaching the judge.
if (bytes.subarray(12, 16).toString('ascii') !== 'IHDR') {
  throw new Error('entry.png has no IHDR chunk');
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 cap`);
}

mkdirSync(OUT_DIR, { recursive: true });
copyFileSync(SRC, DEST);

// Confirm the copy landed whole before finishing.
if (statSync(DEST).size !== bytes.length) {
  throw new Error('entry.png did not copy whole');
}
if (!readFileSync(DEST).equals(bytes)) {
  throw new Error('entry.png copy differs from the source');
}
