import sharp from 'sharp';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';

const inputDir = 'src/assets/images/NeedsOptimizations';
const outputDir = 'src/assets/images/production';

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

readdirSync(inputDir).forEach(file => {
  const inputFilePath = join(inputDir, file);
  const outputFilePath = join(outputDir, file.replace(/\.\w+$/, '.webp'));

  sharp(inputFilePath)
    .resize({ width: 1800 }) // Resize to a maximum width of 1200px (adjust as needed)
    .toFormat('webp') // Convert to WebP format
    .webp({ quality: 70 }) // Set WebP quality
    .toFile(outputFilePath, (err, info) => {
      if (err) throw err;
      console.log(info);
    });
});
