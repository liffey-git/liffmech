import React from 'react';
import { Box } from '@mui/material';

interface HeroSectionProps {
  imageUrl: string;
  height?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  imageUrl, 
  height = '50vh' 
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
        // Handle mobile navigation bar height
        '@media (max-width: 599px)': {
          height: `calc(${height} + 56px)`,
          marginTop: '-56px',
          paddingTop: '56px',
        }
      }}
    />
  );
};

export default HeroSection;