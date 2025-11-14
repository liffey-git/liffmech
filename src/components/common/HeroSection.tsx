import React from 'react';
import { Box } from '@mui/material';

interface HeroSectionProps {
  imageUrl: string;
  height?: string;
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  imageUrl, 
  height = '50vh',
  children
}) => {
  return (
    <Box
      sx={{
        // Increase height to account for the navigation bar space
        height: `calc(${height} + 64px)`,
        width: '100%',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        // Move up to start from behind the navigation bar
        marginTop: '-64px',
        // Add padding to push content down below the navigation bar
        paddingTop: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // Add dark tint overlay for better text readability
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        },
        // Ensure children are above the overlay
        '& > *': {
          position: 'relative',
          zIndex: 2,
        },
        // Handle mobile navigation bar height
        '@media (max-width: 599px)': {
          height: `calc(${height} + 56px)`,
          marginTop: '-56px',
          paddingTop: '56px',
        }
      }}
    >
      {children}
    </Box>
  );
};

export default HeroSection;