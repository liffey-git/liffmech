import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { CONTACT_INFO } from '../../utils/constants';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1e4388', // Blue background color matching the image
        color: 'white',
        py: 10,
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
          {/* Left Column - Logo/Image */}
          <Box sx={{ 
            width: { xs: '100%', md: '40%' },
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start' },
            alignItems: 'center'
          }}>
            <Box
              component="img"
              src="/logos/liffey-logo.png"
              alt="Liffey Mechanical"
              sx={{
                maxWidth: '300px',
                width: '100%',
                height: 'auto',
                filter: 'brightness(0) invert(1)', // Make logo white
              }}
            />
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
                  {CONTACT_INFO.offices.ontario.title}
                </Typography>                <Typography variant="body1" sx={{ mb: 0.5, fontSize: { xs: '1rem', md: '1rem' } }}>
                  {CONTACT_INFO.offices.ontario.street}
                </Typography>                <Typography variant="body1" sx={{ mb: 0.5, fontSize: { xs: '1rem', md: '1rem' } }}>
                  {CONTACT_INFO.offices.ontario.city}
                </Typography>                <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1rem' } }}>
                  {CONTACT_INFO.offices.ontario.postalCode}
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
                  {CONTACT_INFO.offices.second.title}
                </Typography>                <Typography variant="body1" sx={{ mb: 0.5, fontSize: { xs: '1rem', md: '1rem' } }}>
                  {CONTACT_INFO.offices.second.street}
                </Typography>                <Typography variant="body1" sx={{ mb: 0.5, fontSize: { xs: '1rem', md: '1rem' } }}>
                  {CONTACT_INFO.offices.second.city}
                </Typography>                <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1rem' } }}>
                  {CONTACT_INFO.offices.second.postalCode}
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