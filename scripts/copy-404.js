import { copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const srcPath = join(rootDir, 'dist/public/index.html');
const destPath = join(rootDir, 'dist/public/404.html');

try {
  if (!existsSync(srcPath)) {
    console.error(`Error: Source file not found: ${srcPath}`);
    process.exit(1);
  }
  
  copyFileSync(srcPath, destPath);
  console.log('Created 404.html from index.html');
} catch (error) {
  console.error(`Error copying file: ${error.message}`);
  process.exit(1);
}
