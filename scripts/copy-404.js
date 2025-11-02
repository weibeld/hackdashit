import { copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const srcPath = join(rootDir, 'dist/public/index.html');
const destPath = join(rootDir, 'dist/public/404.html');

copyFileSync(srcPath, destPath);
console.log('Created 404.html from index.html');
