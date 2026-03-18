import React, { useRef, useEffect, useState } from 'react';
import { Box, SxProps, Theme, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [animationDuration, setAnimationDuration] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [mobileTransitionEnabled, setMobileTransitionEnabled] = useState(true);
  const firstSetRef = useRef<HTMLDivElement>(null);

  const mobileSlides = logos.length > 0 ? [...logos, logos[0]] : [];

  useEffect(() => {
    if (isMobile) {
      return;
    }

    const measureWidth = () => {
      if (firstSetRef.current) {
        const width = firstSetRef.current.offsetWidth;

        const duration = width / speed;
        setAnimationDuration(duration);
      }
    };

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

      setTimeout(measureWidth, 100);
    }

    window.addEventListener('resize', measureWidth);
    
    return () => {
      window.removeEventListener('resize', measureWidth);
    };
  }, [isMobile, logos, speed]);

  useEffect(() => {
    if (!isMobile || logos.length <= 1) {
      setMobileIndex(0);
      setMobileTransitionEnabled(true);
      return;
    }

    const intervalId = window.setInterval(() => {
      setMobileTransitionEnabled(true);
      setMobileIndex((currentIndex) => currentIndex + 1);
    }, 2200);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isMobile, logos]);

  const handleMobileTransitionEnd = () => {
    if (mobileIndex !== logos.length) {
      return;
    }

    setMobileTransitionEnabled(false);
    setMobileIndex(0);
  };

  useEffect(() => {
    if (mobileTransitionEnabled) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      setMobileTransitionEnabled(true);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [mobileTransitionEnabled]);

  if (isMobile) {
    return (
      <Box
        sx={{
          overflow: 'hidden',
          width: '100%',
          py: 3,
          backgroundColor: '#fff',
          ...sx
        }}
      >
        <Box
          sx={{
            overflow: 'hidden',
            width: '100%'
          }}
        >
          <Box
            onTransitionEnd={handleMobileTransitionEnd}
            sx={{
              display: 'flex',
              width: `${mobileSlides.length * 100}%`,
              transform: `translateX(-${mobileIndex * (100 / mobileSlides.length)}%)`,
              transition: mobileTransitionEnabled ? 'transform 0.7s ease-in-out' : 'none'
            }}
          >
            {mobileSlides.map((logo, index) => (
              <Box
                key={`mobile-${logo}-${index}`}
                sx={{
                  width: `${100 / mobileSlides.length}%`,
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  px: 3
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  sx={{
                    height: `${height}px`,
                    maxWidth: '100%',
                    width: 'auto',
                    objectFit: 'contain',
                    flexShrink: 0
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    );
  }

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
