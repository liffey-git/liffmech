import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1e4388', // Blue background color matching the image
        color: 'white',
        py: 8, // Reduced from py: 10 to make it less tall
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 8 },
          alignItems: { xs: 'center', md: 'flex-start' },
          justifyContent: { xs: 'center', md: 'flex-start' },
          width: { xs: '100%', md: 'fit-content', lg: '100%' },
          mx: { xs: 0, md: 'auto', lg: 0 }
        }}>
          
          <Box sx={{
            width: { xs: '100%', md: 'auto' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: { md: '200px' } // Ensure enough height for centering
          }}>
            <Box
              component="img"
              src="/images/icons/liffey-drop-white.svg"
              alt="Liffey Mechanical Logo"
              sx={{
                width: '120px',
                height: '120px',
                flexShrink: 0,
                mb: 2
              }}
            />
            <Typography
              variant="h3"
              component="div"
              sx={{
                fontWeight: 700,
                textTransform: 'uppercase'
              }}
            >
              LIFFEY MECHANICAL
            </Typography>
          </Box>

          
          <Box sx={{
            width: { xs: '100%', md: 'auto' },
            flex: { md: '0 0 auto', lg: 1 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'center' },
            justifyContent: { md: 'center' }
          }}>
            <Box sx={{
              width: { xs: '100%', md: 'fit-content' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' }
            }}>
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  fontWeight: 600,
                  mb: 4,
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Contact Information
              </Typography>

              <Box sx={{
                width: '100%',
                textAlign: { xs: 'center', md: 'left' }
              }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    fontSize: { xs: '1rem', md: '1.1rem' }
                  }}
                >
                  Head Office
                </Typography>
                <Typography variant="body1" sx={{ mb: 0.5, fontSize: { xs: '1rem', md: '1rem' } }}>
                  7528-7550 Bath Road
                </Typography>
                <Typography variant="body1" sx={{ mb: 0.5, fontSize: { xs: '1rem', md: '1rem' } }}>
                  Mississauga, Ontario
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1rem' } }}>
                  L4T 1L2
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;