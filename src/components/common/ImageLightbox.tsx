import React from 'react';
import { Box, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  alt: string;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({ isOpen, onClose, imageUrl, alt }) => {
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
          outline: 'none',
          mx: 'auto'
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

        {/* Image Section */}
        <Box
          component="img"
          src={imageUrl}
          alt={alt}
          sx={{
            display: 'block',
            maxWidth: '90vw',
            maxHeight: '90vh',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain'
          }}
        />
      </Box>
    </Modal>
  );
};

export default ImageLightbox;
