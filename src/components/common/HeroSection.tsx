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
        height,
        width: '100%',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    />
  );
};

export default HeroSection;