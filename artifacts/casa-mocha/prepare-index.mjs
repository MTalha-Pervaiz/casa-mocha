import { readFile, writeFile } from 'node:fs/promises';

const sourcePath = new URL('./index.bytes.json', import.meta.url);
const outputPath = new URL('./index.html', import.meta.url);
const bytes = JSON.parse(await readFile(sourcePath, 'utf8'));

await writeFile(outputPath, Buffer.from(bytes));