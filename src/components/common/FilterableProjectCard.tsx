import React from 'react';
import { Box, Typography, Chip, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import { Project } from '../../types';

interface FilterableProjectCardProps {
  project: Project;
  onClick: () => void;
}

const FilterableProjectCard: React.FC<FilterableProjectCardProps> = ({ project, onClick }) => {
  return (
    <Card 
      sx={{ 
        maxWidth: 345,
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
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
          
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ 
              mb: 2,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {project.description}
          </Typography>
          
          {/* Service Tags */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
            {project.services.map((service, index) => (
              <Chip
                key={index}
                label={service}
                size="small"
                variant="outlined"
                sx={{
                  fontSize: '0.7rem',
                  height: '24px',
                  color: 'primary.main',
                  borderColor: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                    color: 'white'
                  }
                }}
              />
            ))}
          </Box>
          
          {/* Industry Tag */}
          <Typography 
            variant="caption" 
            sx={{ 
              color: 'text.secondary',
              fontStyle: 'italic'
            }}
          >
            {project.industry}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default FilterableProjectCard;
