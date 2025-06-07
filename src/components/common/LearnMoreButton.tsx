import React from 'react';
import { Box, Typography } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Link as RouterLink } from 'react-router-dom';

interface LearnMoreButtonProps {
  path: string;
  variant?: 'dark' | 'light'; // dark = white text (for dark backgrounds), light = blue text (for light backgrounds)
  showPlayIcon?: boolean;
  fontSize?: object | string;
}

const LearnMoreButton: React.FC<LearnMoreButtonProps> = React.memo(({ 
  path,
  variant = 'light',
  showPlayIcon = true,
  fontSize = { xs: '1rem', md: '1rem' }
}) => {
  const textColor = variant === 'dark' ? 'white' : 'primary.main';
  const iconColor = variant === 'dark' ? 'white' : 'primary.main';

  return (
    <Box 
      component={RouterLink} 
      to={path}
      sx={{ 
        display: 'flex',
        alignItems: 'center',
        gap: 2,
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
          fontWeight: 500
        }}
      >
        Learn More
      </Typography>
      {showPlayIcon && (
        <PlayCircleOutlineIcon 
          sx={{ 
            fontSize: { xs: 36, md: 42 },
            color: iconColor,
            transition: 'transform 0.3s ease-in-out'
          }} 
        />
      )}
    </Box>
  );
});

export default LearnMoreButton;