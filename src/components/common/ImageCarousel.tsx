import React, { useState, useEffect } from 'react';
import { Box, SxProps, Theme } from '@mui/material';

interface ImageCarouselProps {
  images: string[];
  alt: string;
  sx?: SxProps<Theme>;
  interval?: number; // milliseconds
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  alt, 
  sx = {}, 
  interval = 10000 // Default to 10 seconds
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return; // Don't cycle if only one image

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        ...sx
      }}
    >
      {images.map((image, index) => (
        <Box
          key={index}
          component="img"
          src={image}
          alt={`${alt} - Image ${index + 1}`}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: currentImageIndex === index ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: currentImageIndex === index ? 1 : 0
          }}
        />
      ))}
      
      {/* Optional: Carousel dots indicator */}
      {images.length > 1 && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1,
            zIndex: 2
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 16,
                height: 16,
                borderRadius: '50%',
                backgroundColor: currentImageIndex === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'backgroundColor 0.3s ease',
                '&:hover': {
                  backgroundColor: 'white'
                }
              }}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ImageCarousel;
