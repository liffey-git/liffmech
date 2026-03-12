import React from 'react';
import { Box, Typography } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Link as RouterLink } from 'react-router-dom';

interface LearnMoreButtonProps {
  path: string;
  variant?: 'dark' | 'light'; // dark = white text (for dark backgrounds), light = blue text (for light backgrounds)
  showPlayIcon?: boolean;
  fontSize?: object | string;
  serviceShadow?: boolean;
}

const LearnMoreButton: React.FC<LearnMoreButtonProps> = React.memo(({ 
  path,
  variant = 'light',
  showPlayIcon = true,
  fontSize = { xs: '1rem', md: '1rem' }
  ,
  serviceShadow = false
}) => {
  const textColor = variant === 'dark' ? 'white' : 'primary.main';
  const iconColor = variant === 'dark' ? 'white' : 'primary.main';
  const iconSize = { xs: 36, md: 42 };

  return (
    <Box 
      component={RouterLink} 
      to={path}
      sx={{ 
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        minHeight: iconSize,
        textDecoration: 'none',
        color: textColor,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          opacity: 0.8,
          transform: 'translateX(2px)'
        }
      }}
    >
      <Typography 
        variant="body2" 
        sx={{ 
          fontSize,
          color: textColor,
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          lineHeight: 1,
          height: '100%',
          boxSizing: 'border-box',
          ...(serviceShadow ? { textShadow: '2px 2px 4px rgba(0,0,0,0.5)' } : {})
        }}
      >
        Learn More
      </Typography>
      {showPlayIcon && (
        <PlayCircleOutlineIcon 
          sx={{ 
            fontSize: iconSize,
            color: iconColor,
            transition: 'transform 0.3s ease-in-out',
            alignSelf: 'center',
            ...(serviceShadow ? { filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))' } : {})
          }} 
        />
      )}
    </Box>
  );
});

export default LearnMoreButton;