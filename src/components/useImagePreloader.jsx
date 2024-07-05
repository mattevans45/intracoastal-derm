import { useState, useEffect } from 'react';

const useImagePreloader = (images) => {
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const preloadImages = () => {
      const promises = images.map((imageObj) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            resolve({ src: imageObj.src, loaded: true });
          };
          img.onerror = (error) => {
            reject(error);
          };
          img.src = imageObj.src;
          img.loading = 'lazy'; // Optional: Set loading attribute for modern browsers
        });
      });

      Promise.all(promises)
        .then((results) => {
          const updatedImages = results.reduce((acc, result) => {
            acc[result.src] = result;
            return acc;
          }, {});
          setLoadedImages(updatedImages);
        })
        .catch((error) => {
          console.error('Failed to preload images:', error);
        });
    };

    preloadImages();
  }, [images]);

  return loadedImages;
};

export default useImagePreloader;
