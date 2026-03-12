import React from 'react';
import { Box, Modal, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Project } from '../../types';

interface ProjectLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectLightbox: React.FC<ProjectLightboxProps> = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: '1200px', // Match page content width
          backgroundColor: 'white',
          borderRadius: 3,
          boxShadow: '0 24px 48px rgba(0,0,0,0.3)',
          overflow: 'hidden',
          outline: 'none',
          mx: 'auto'
        }}
      >
        
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: 'rgba(255,255,255,0.9)',
            color: '#1e4388',
            zIndex: 1,
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,1)',
              transform: 'scale(1.1)'
            },
            transition: 'all 0.2s ease'
          }}
        >
          <CloseIcon />
        </IconButton>

        
        <Box
          sx={{
            width: '100%',
            height: { xs: '300px', sm: '400px', md: '500px' },
            position: 'relative'
          }}
        >
          <Box
            component="img"
            src={project.imageUrl}
            alt={project.title}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </Box>

        
        <Box
          sx={{
            p: { xs: 3, md: 4 },
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2
          }}
        >
          
          <Typography
            variant="h4"
            component="h2"
            sx={{
              color: '#1e4388',
              fontWeight: 600,
              flex: 1
            }}
          >
            {project.title}
          </Typography>

          
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontWeight: 500,
              textAlign: { xs: 'left', sm: 'right' }
            }}
          >
            {project.location}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default ProjectLightbox;