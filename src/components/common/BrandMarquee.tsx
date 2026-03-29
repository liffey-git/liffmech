import React, { useEffect, useState } from 'react';
import { Box, SxProps, Theme, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const LOGO_SLOT_WIDTH = 180; 
const LOGO_GAP = 80; 
const REPEAT_COUNT = 5; 
const ANIMATION_DURATION = 120; 

interface BrandMarqueeProps {
  logos: string[];
  height?: number;
  speed?: number;
  sx?: SxProps<Theme>;
}

const BrandMarquee: React.FC<BrandMarqueeProps> = ({ 
  logos, 
  height = 80,
  sx = {}
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileIndex, setMobileIndex] = useState(0);
  const [mobileTransitionEnabled, setMobileTransitionEnabled] = useState(true);

  const mobileSlides = logos.length > 0 ? [...logos, logos[0]] : [];

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
  const setStride = logos.length * (LOGO_SLOT_WIDTH + LOGO_GAP);
  const translateDistance = REPEAT_COUNT * setStride;
  const totalSets = REPEAT_COUNT + 1;

  return (
    <Box
      sx={{
        overflow: 'hidden',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        py: 4,
        backgroundColor: '#fff',
        ...sx
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: `${LOGO_GAP}px`,
          width: 'fit-content',
          animation: `marqueeScroll ${ANIMATION_DURATION}s linear infinite`,
          '@keyframes marqueeScroll': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: `translateX(-${translateDistance}px)` }
          }
        }}
      >
        {Array.from({ length: totalSets }, (_, setIndex) => (
          <Box
            key={`set-${setIndex}`}
            sx={{
              display: 'flex',
              gap: `${LOGO_GAP}px`,
              flexShrink: 0
            }}
          >
            {logos.map((logo, logoIndex) => (
              <Box
                key={`${setIndex}-${logoIndex}`}
                sx={{
                  width: `${LOGO_SLOT_WIDTH}px`,
                  height: `${height}px`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt={`Client logo ${logoIndex + 1}`}
                  sx={{
                    maxHeight: `${height}px`,
                    maxWidth: `${LOGO_SLOT_WIDTH}px`,
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BrandMarquee;
