import React from 'react';
import { Box, Container, Typography, Paper, Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ContactForm from '../components/forms/ContactForm';
import HeroSection from '../components/common/HeroSection';

const ContactPage: React.FC = () => {
  return (
    <Box>      {/* Hero Section */}
      <HeroSection 
        imageUrl="/images/IMG_4001.JPG"
        height="50vh"
      />
      
      <Box sx={{ pt: 14, pb: 14 }}>
        <Container maxWidth="lg">
          {/* Page Header */}          <Box sx={{ mb: 6 }}>
            <Typography variant="h1" component="h1" align="center" gutterBottom color="primary" fontWeight={600}>
              Contact Us
            </Typography>
            <Typography 
              variant="subtitle1" 
              align="center" 
              color="text.secondary" 
              sx={{ maxWidth: 700, mx: 'auto' }}
            >
              We&apos;re ready when you are. Contact us for more information, to enquire about our services, or to discuss your next project. 
            </Typography>
          </Box>
          
          {/* Contact Form and Info Section */}
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 4,
            mb: 6
          }}>
            {/* Contact Information Card */}
            <Box sx={{ 
              width: { 
                xs: '100%', 
                md: 'calc(41.667% - 16px)' // equivalent to md={5}
              } 
            }}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: { xs: 3, md: 4 }, 
                  height: '100%',
                  backgroundColor: 'primary.main',
                  color: 'white',
                  borderRadius: 2
                }}
              >                <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 4, color: 'white' }} fontWeight={600}>
                  Contact Information
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <LocationOnIcon fontSize="large" />
                    <Box>
                      <Typography variant="h6" gutterBottom>Our Location</Typography>
                      <Typography variant="body2">
                        <strong>Ontario Office:</strong><br />
                        7528-7550 Bath Road<br />
                        Mississauga, Ontario<br />
                        L4T 1L2
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <PhoneIcon fontSize="large" />
                    <Box>
                      <Typography variant="h6" gutterBottom>Phone</Typography>
                      <Typography variant="body2" component="a" href="tel:+16478523539" sx={{ color: 'inherit', textDecoration: 'none' }}>
                        (647) 852-3539
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <EmailIcon fontSize="large" />
                    <Box>
                      <Typography variant="h6" gutterBottom>Email</Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        For general enquiries:
                        <Link href="mailto:info@liffeymechanical.ca" sx={{ color: 'white', display: 'block', mt: 0.5 }}>
                          info@liffeymechanical.ca
                        </Link>
                      </Typography>
                      <Typography variant="body2">
                        For estimating for projects:
                        <Link href="mailto:estimating@liffeymechanical.ca" sx={{ color: 'white', display: 'block', mt: 0.5 }}>
                          estimating@liffeymechanical.ca
                        </Link>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Box>
            
            {/* Contact Form */}
            <Box sx={{ 
              width: { 
                xs: '100%', 
                md: 'calc(58.333% - 16px)' // equivalent to md={7}
              } 
            }}>
              <ContactForm />
            </Box>
          </Box>
          
          {/* Careers Information */}
          <Box sx={{ 
            mt: 4, 
            p: 4, 
            backgroundColor: '#f5f5f5', 
            borderRadius: 2,
            maxWidth: 800,
            mx: 'auto'
          }}>            <Typography 
              variant="h3" 
              component="h2"
              align="center"
              gutterBottom
              color="primary" 
              fontWeight={600}
            >
              Want to Join Our Team?
            </Typography>
            <Typography 
              variant="body1" 
              align="center" 
              sx={{ mb: 2 }}
            >
              We&apos;re always looking for talented people who would like to join our team. Get in touch with your CV here:
            </Typography>
            <Typography 
              variant="body1" 
              align="center" 
              sx={{ fontWeight: 'bold' }}
            >
              <Link href="mailto:careers@liffeymechanical.ca">
                careers@liffeymechanical.ca 
              </Link>
              (placeholder)
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactPage;