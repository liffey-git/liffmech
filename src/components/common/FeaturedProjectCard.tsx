import React from 'react';
import { Box, Typography, Chip, Card, CardMedia, CardContent } from '@mui/material';
import { Project } from '../../types';
import { componentStyles, colors, responsive, spacing } from '../../theme/designFramework';

interface FeaturedProjectCardProps {
  project: Project;
  onClick: () => void;
}

const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({ project, onClick }) => {
  return (
    <Card 
      data-project-id={project.id}
      sx={{ 
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        height: { xs: 'auto', lg: 'auto' },
        ...componentStyles.featuredCard
      }}
    >
      <Box 
        onClick={onClick}
        sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'stretch',
          height: '100%',
          cursor: 'default'
        }}
      >
        
        <Box
          sx={{
            width: responsive.featuredWidth,
            minHeight: { xs: '300px', lg: 'auto' },
            position: 'relative',
            display: 'flex',
            alignSelf: 'stretch'
          }}
        >
          <CardMedia
            component="img"
            image={project.imageUrl}
            alt={project.title}
            sx={{
              width: '100%',
              height: 'auto',
              flexGrow: 1,
              objectFit: 'cover'
            }}
          />
        </Box>

        
        <CardContent 
          sx={{ 
            width: responsive.featuredSideWidth,
            p: { xs: spacing.lg, lg: spacing.xl },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flexGrow: 1
          }}
        >
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            sx={{ 
              fontWeight: 600,
              color: colors.primary,
              mb: spacing.sm,
              fontSize: { xs: '1.75rem', lg: '2rem' }
            }}
          >
            Featured Project
          </Typography>

          
          <Typography 
            variant="h6" 
            component="h3" 
            gutterBottom 
            sx={{ 
              fontWeight: 600,
              color: colors.primary,
              mb: spacing.md
            }}
          >
            {project.title}
          </Typography>
          
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: spacing.lg,
              fontSize: { xs: '1rem', lg: '1.125rem' },
              lineHeight: 1.6,
              color: colors.darkGray
            }}
          >
            {project.description}
          </Typography>
          
          
          <Box sx={{ mb: spacing.md }}>
            <Typography 
              variant="subtitle2" 
              gutterBottom 
              sx={{ 
                fontWeight: 600, 
                color: colors.primary,
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: spacing.xs }}>
              {project.services.map((service, index) => (
                <Chip
                  key={index}
                  label={service}
                  size="small"
                  variant="outlined"
                  sx={{
                    ...componentStyles.chip,
                    fontSize: '0.75rem',
                    height: '28px'
                  }}
                />
              ))}
            </Box>
          </Box>
          
          
          <Box sx={{ display: 'flex', gap: spacing.xl }}>
            <Box>
              <Typography 
                variant="caption" 
                sx={{ 
                  fontWeight: 600,
                  color: colors.textSecondary,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  display: 'block',
                  mb: spacing.xs
                }}
              >
                Industry
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: colors.darkGray,
                  fontWeight: 500
                }}
              >
                {project.industry}
              </Typography>
            </Box>
            
            <Box>
              <Typography 
                variant="caption" 
                sx={{ 
                  fontWeight: 600,
                  color: colors.textSecondary,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  display: 'block',
                  mb: spacing.xs
                }}
              >
                Client Type
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: colors.darkGray,
                  fontWeight: 500
                }}
              >
                {project.clientType}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default FeaturedProjectCard;
