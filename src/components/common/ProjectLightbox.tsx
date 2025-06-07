import React from 'react';
import { Box, Modal, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ProjectLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    imageUrl: string;
  } | null;
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
          maxWidth: '90vw',
          maxHeight: '90vh',
          backgroundColor: 'white',
          borderRadius: 3,
          boxShadow: '0 24px 48px rgba(0,0,0,0.3)',
          overflow: 'hidden',
          outline: 'none'
        }}
      >
        {/* Close Button */}
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
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            minHeight: { xs: 'auto', md: '500px' },
            maxHeight: '90vh'
          }}
        >
          {/* Image Section */}
          <Box
            sx={{
              width: { xs: '100%', md: '60%' },
              minHeight: { xs: '300px', md: '500px' },
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

          {/* Content Section */}
          <Box
            sx={{
              width: { xs: '100%', md: '40%' },
              p: { xs: 3, md: 4 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              backgroundColor: '#fafafa',
              borderLeft: { md: '1px solid #e0e0e0' }
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                color: '#1e4388',
                fontWeight: 600,
                mb: 3
              }}
            >
              {project.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#333',
                lineHeight: 1.7,
                fontSize: '1.1rem'
              }}
            >
              {project.description}
            </Typography>

            {/* Optional: Add project details */}
            <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid #e0e0e0' }}>
              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  fontStyle: 'italic'
                }}
              >
                Click outside or press the close button to return to projects.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ProjectLightbox;