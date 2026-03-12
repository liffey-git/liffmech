import React from 'react';
import { Box } from '@mui/material';

interface HeroSectionProps {
  imageUrl?: string;
  videoUrl?: string;
  height?: string;
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  imageUrl,
  videoUrl,
  height = '50vh',
  children
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundImage: videoUrl ? 'none' : `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        marginTop: '-64px',
        paddingTop: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        ...(videoUrl ? {} : {
          height: `calc(${height} + 64px)`,
        }),
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          zIndex: 1,
        },
        '& > *': {
          position: 'relative',
          zIndex: 2,
        },
        '@media (max-width: 599px)': {
          marginTop: '-56px',
          paddingTop: '56px',
          ...(videoUrl ? {} : {
            height: `calc(${height} + 56px)`,
          }),
        }
      }}
    >
      {videoUrl && (
        <Box
          component="video"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          sx={{
            display: 'block',
            width: '100%',
            height: 'auto',
            pointerEvents: 'none',
          }}
        >
          <source src={videoUrl} type="video/mp4" />
        </Box>
      )}
      {children}
    </Box>
  );
};

export default HeroSection;