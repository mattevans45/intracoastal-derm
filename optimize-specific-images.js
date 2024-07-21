// import sharp from 'sharp';
// import { existsSync, mkdirSync, readdirSync } from 'fs';
// import { join } from 'path';

// const inputDir = 'src/assets/images/NeedsOptimizations/';
// const outputDir = 'src/assets/images/optimized';

// // List of specific image files to process (modify as needed)
// const specificImages = ['alexander-krivitskiy-zle2_jp-AUw-unsplash.webp'];

// if (!existsSync(outputDir)) {
//   mkdirSync(outputDir, { recursive: true });
// }

// specificImages.forEach(file => {
//   const inputFilePath = join(inputDir, file);
//   const outputFilePath = join(outputDir, file.replace(/\.\w+$/, '.webp'));

//   sharp(inputFilePath)
//     .resize({ width: 600 }) // Resize to a maximum width of 1200px (adjust as needed)
//     .toFormat('webp') // Convert to WebP format
//     .webp({ quality: 70 }) // Set WebP quality
//     .toFile(outputFilePath, (err, info) => {
//       if (err) throw err;
//       console.log(info);
//     });
// });


import sharp from 'sharp';
import { existsSync, mkdirSync } from 'fs';
import { join, resolve } from 'path';
const inputDir = resolve('src/assets/NeedsOptimizations');
const outputDir = resolve('src/assets/images/optimized/');

// List of specific image files to process (modify as needed)
const specificImages = [
  'nick-jio-Pj2TaFMH0pE-unsplash.jpg',
  'matt-hardy-6ArTTluciuA-unsplash.jpg',
  'mourad-saadi-GyDktTa0Nmw-unsplash.jpg',
  'alex-CWwdzVtaGKs-unsplash.jpg'
];

// Define sizes and quality levels
const sizes = [
  { width: 3840, height: 2160 }, // 4K
  { width: 2560, height: 1440 }, // 1440p
  { width: 1920, height: 1080 }, // 1080p
  { width: 1280, height: 720 },  // 720p
  { width: 640, height: 360 }    // 360p
];

const qualities = [80, 60, 50];

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

specificImages.forEach(file => {
  const inputFilePath = join(inputDir, file);
  console.log(`Processing file: ${inputFilePath}`);

  if (!existsSync(inputFilePath)) {
    console.error(`Input file does not exist: ${inputFilePath}`);
    return;
  }

  const filename = file.replace(/\.\w+$/, '');

  sizes.forEach(size => {
    qualities.forEach(quality => {
      const outputFilePath = join(outputDir, `${filename}-${size.width}w-q${quality}.webp`);
      console.log(`Generating file: ${outputFilePath}`);

      sharp(inputFilePath)
        .resize({
          width: size.width,
          height: size.height,
          fit: 'cover',
          position: 'center'
        })
        .toFormat('webp')
        .webp({ quality: quality })
        .toFile(outputFilePath, (err, info) => {
          if (err) {
            console.error(`Error generating file: ${outputFilePath}`, err);
          } else {
            console.log(`Generated: ${outputFilePath}`);
            console.log(info);
          }
        });
    });
  });
});
