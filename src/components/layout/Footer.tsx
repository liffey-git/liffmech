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
      <Container maxWidth="xl">
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 8 },
          alignItems: { xs: 'center', md: 'flex-start' }
        }}>
          {/* Left Column - Logo */}
          <Box sx={{
            width: { xs: '100%', md: '40%' },
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

          {/* Right Column - Contact Information */}
          <Box sx={{
            width: { xs: '100%', md: '60%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' }
          }}>
            {/* Contact Information Title */}
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

            {/* Two Office Columns */}
            <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 3, sm: 6 },
              width: '100%'
            }}>
              {/* Ontario Office */}
              <Box sx={{
                width: { xs: '100%', sm: '50%' },
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
                  Ontario Office
                </Typography>
                <Typography variant="body1" sx={{ mb: 0.5, fontSize: { xs: '1rem', md: '1rem' } }}>
                  2488 Tree Valley Blvd West
                </Typography>
                <Typography variant="body1" sx={{ mb: 0.5, fontSize: { xs: '1rem', md: '1rem' } }}>
                  City, Ontario
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1rem' } }}>
                  Postal Code
                </Typography>
              </Box>

              {/* Second Office */}
              <Box sx={{
                width: { xs: '100%', sm: '50%' },
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
                  Second Office
                </Typography>
                <Typography variant="body1" sx={{ mb: 0.5, fontSize: { xs: '1rem', md: '1rem' } }}>
                  2412 Happy Pond Street
                </Typography>
                <Typography variant="body1" sx={{ mb: 0.5, fontSize: { xs: '1rem', md: '1rem' } }}>
                  City, Ontario
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1rem' } }}>
                  Postal Code
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