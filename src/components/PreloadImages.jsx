import React, { useEffect } from "react";

function PreloadImages({ images, onImagesLoaded }) {
  useEffect(() => {
    setTimeout(() => {
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      Promise.all(imagePromises)
        .then(() => {
          onImagesLoaded();
        })
        .catch((error) => {
          console.error("Error preloading images:", error);
        });
    }, 3000);
  }, [images, onImagesLoaded]);

  return null;
}

export default PreloadImages;
