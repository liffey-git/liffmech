import React, { useRef, useEffect, useState } from 'react';
import { Box, SxProps, Theme } from '@mui/material';

interface BrandMarqueeProps {
  logos: string[];
  height?: number;
  speed?: number; // pixels per second
  sx?: SxProps<Theme>;
}

const BrandMarquee: React.FC<BrandMarqueeProps> = ({ 
  logos, 
  height = 80,
  speed = 50,
  sx = {}
}) => {
  const [animationDuration, setAnimationDuration] = useState(0);
  const firstSetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measureWidth = () => {
      if (firstSetRef.current) {
        const width = firstSetRef.current.offsetWidth;
        // Calculate duration based on speed (pixels per second)
        const duration = width / speed;
        setAnimationDuration(duration);
      }
    };

    // Wait for images to load
    const images = firstSetRef.current?.querySelectorAll('img');
    if (images && images.length > 0) {
      let loadedCount = 0;
      const checkAllLoaded = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          measureWidth();
        }
      };

      images.forEach(img => {
        if (img.complete) {
          checkAllLoaded();
        } else {
          img.addEventListener('load', checkAllLoaded);
        }
      });
    } else {
      // Fallback if no images
      setTimeout(measureWidth, 100);
    }

    // Add resize listener to recalculate on viewport changes
    window.addEventListener('resize', measureWidth);
    
    return () => {
      window.removeEventListener('resize', measureWidth);
    };
  }, [logos, speed]);

  return (
    <Box
      sx={{
        overflow: 'hidden',
        width: '100%',
        py: 4,
        backgroundColor: '#fff',
        ...sx
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 10,
          animation: animationDuration ? `scroll ${animationDuration}s linear infinite` : 'none',
          '@keyframes scroll': {
            '0%': {
              transform: 'translateX(0)'
            },
            '100%': {
              transform: 'translateX(-50%)'
            }
          }
        }}
      >
        {/* First set - used for measurement */}
        <Box
          ref={firstSetRef}
          sx={{
            display: 'flex',
            gap: 10,
            flexShrink: 0
          }}
        >
          {logos.map((logo, index) => (
            <Box
              key={`first-${logo}-${index}`}
              component="img"
              src={logo}
              alt={`Client logo ${index + 1}`}
              sx={{
                height: `${height}px`,
                width: 'auto',
                objectFit: 'contain',
                flexShrink: 0
              }}
            />
          ))}
        </Box>
        
        {/* Second set - duplicate for seamless loop */}
        <Box
          sx={{
            display: 'flex',
            gap: 10,
            flexShrink: 0
          }}
        >
          {logos.map((logo, index) => (
            <Box
              key={`second-${logo}-${index}`}
              component="img"
              src={logo}
              alt={`Client logo ${index + 1}`}
              sx={{
                height: `${height}px`,
                width: 'auto',
                objectFit: 'contain',
                flexShrink: 0
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BrandMarquee;
