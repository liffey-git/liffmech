// src/components/common/ProjectCard.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

interface ProjectCardProps {
  title: string;
  description?: string;
  imageUrl: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ 
  title, 
  description: _description, 
  imageUrl,
  fullWidth: _fullWidth = false,
  onClick
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: 'relative',
        borderRadius: 2,
        overflow: 'hidden',
        aspectRatio: '1', // Square images
        width: '100%',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
        }
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt={title}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 35,
          left: 0,
          right: 0,
          p: 2,
          background: 'rgba(255, 255, 255, 0.75)', // Transparent white background
        }}
      >        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: '1rem', md: '1.125rem' },
            fontWeight: 600,
            color: '#1e4388' // Blue text color
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;