import React from 'react';
import { Typography, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import { Project } from '../../types';

interface FilterableProjectCardProps {
  project: Project;
  onClick: () => void;
}

const FilterableProjectCard: React.FC<FilterableProjectCardProps> = ({ project, onClick }) => {
  return (
    <Card 
      data-project-id={project.id}
      sx={{ 
        maxWidth: 345,
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        animation: 'fadeIn 0.4s ease-in',
        '@keyframes fadeIn': {
          from: {
            opacity: 0,
            transform: 'scale(0.9)'
          },
          to: {
            opacity: 1,
            transform: 'scale(1)'
          }
        },
        '&:hover': {
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          transform: 'translateY(-4px)'
        }
      }}
    >
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          height="200"
          image={project.imageUrl}
          alt={project.title}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography 
            variant="h6" 
            component="h3" 
            gutterBottom 
            sx={{ 
              fontWeight: 600,
              color: 'primary.main',
              mb: 1
            }}
          >
            {project.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default FilterableProjectCard;
