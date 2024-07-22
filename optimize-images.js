import sharp from 'sharp';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { join, resolve } from 'path';
const inputDir = resolve('src/assets/NeedsOptimizations');
const outputDir = resolve('src/assets/images/optimized/');

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

readdirSync(inputDir).forEach(file => {
  const inputFilePath = join(inputDir, file);
  const outputFilePath = join(outputDir, file.replace(/\.\w+$/, '.webp'));

  sharp(inputFilePath)
    .resize({ width: 1200 }) // Resize to a maximum width of 1200px (adjust as needed)
    .toFormat('webp') // Convert to WebP format
    .webp({ quality: 75 }) // Set WebP quality
    .toFile(outputFilePath, (err, info) => {
      if (err) throw err;
      console.log(info);
    });
});
