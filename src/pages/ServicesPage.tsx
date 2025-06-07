import React, { useState } from 'react';
import { Box, Container, Typography, Tabs, Tab, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import HeroSection from '../components/common/HeroSection';
import { SERVICE_CATEGORIES } from '../utils/constants';
import { ServiceCategory } from '../types';

const ServicesPage: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const tabParam = params.get('tab');
  const initialTab = tabParam ? parseInt(tabParam, 10) : 0;
  
  const [selectedTab, setSelectedTab] = useState(initialTab);
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };
  return (
    <Box>      {/* Hero Section */}
      <HeroSection 
        imageUrl="/images/IMG_Draft.jpg"
        height="40vh"
      />      {/* Services Title and Introduction */}
      <Box sx={{ pt: 20, pb: 20, backgroundColor: '#fff' }}>        <Container maxWidth="lg">
          <Typography variant="h1" component="h1" align="center" gutterBottom sx={{ mb: 6 }} color="primary" fontWeight={600}>
            Services
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 4,
            justifyContent: 'center' // Center the content
          }}>
            <Box sx={{ 
              width: { 
                xs: '100%', 
                md: 'calc(60% - 16px)' 
              }            }}>              
              <Typography variant="h3" component="h3" gutterBottom align="left" color="primary" fontWeight={600}>
                Expertise Across the Full Mechanical Spectrum
              </Typography>
              <Typography variant="body1" paragraph>
                Liffey Mechanical provides a complete range of mechanical services for commercial, institutional, and industrial projects across Ontario. Our team of skilled professionals brings decades of combined experience to deliver solutions that meet the highest standards of quality and efficiency.
              </Typography>
              <Typography variant="body1">
                From initial design through installation and ongoing maintenance, we work closely with clients to ensure every project is completed on time, on budget, and to specification. Our comprehensive approach means you can rely on a single contractor for all your mechanical needs.
              </Typography>
            </Box>
            <Box sx={{ 
              width: { 
                xs: '100%', 
                md: 'calc(40% - 16px)' 
              },
              display: 'flex',
              justifyContent: 'center' // Center the image
            }}>              <Box 
                component="img"
                src="/images/IMG_Pipes.jpg"
                alt="Liffey Mechanical Services"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>      {/* Service Categories - Desktop Tabs View */}
      <Box sx={{ display: { xs: 'none', md: 'block' }, pt: 20, pb: 14, backgroundColor: '#fafafa' }}>        <Container maxWidth="lg">          
          <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 4, mt: 4 }} color="primary" fontWeight={600}>
            Our Service Categories
          </Typography>

          <Box sx={{ width: '100%', mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="service categories tabs"
                centered
                sx={{
                  '& .MuiTab-root': {
                    fontWeight: 500,
                    fontSize: '1rem',
                    textTransform: 'none',
                    minWidth: 'auto',
                    px: 3
                  }
                }}
              >
                {SERVICE_CATEGORIES.map((category: ServiceCategory, index: number) => (
                  <Tab label={category.title} key={category.id} id={`service-tab-${index}`} />
                ))}
              </Tabs>
            </Box>            
            {/* Fixed layout container with proper spacing */}
            <Box sx={{ 
              position: 'relative',
              minHeight: '600px'
            }}>
              {SERVICE_CATEGORIES.map((category: ServiceCategory, index: number) => (
                <Box
                  key={category.id}
                  role="tabpanel"
                  id={`service-tabpanel-${index}`}
                  aria-labelledby={`service-tab-${index}`}
                  sx={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '600px',
                    opacity: selectedTab === index ? 1 : 0,
                    visibility: selectedTab === index ? 'visible' : 'hidden',
                    transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'
                  }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: 6,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    height: '100%'
                  }}>
                    <Box sx={{ 
                      width: 'calc(50% - 24px)',
                      pr: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>                      
                    <Typography variant="h5" component="h3" gutterBottom color="primary" fontWeight={600} align="left">
                        {category.title}
                      </Typography>
                      <Typography variant="body1" paragraph sx={{ mb: 3, flex: '0 0 auto' }}>
                        {category.description}
                      </Typography>
                      <Box component="ul" sx={{ pl: 3, '& li': { mb: 1.5 }, flex: '1 1 auto' }}>
                        {category.items.map((item, itemIndex) => (
                          <Box component="li" key={itemIndex}>
                            <Typography variant="body1">
                              {item}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    <Box sx={{ 
                      width: 'calc(50% - 24px)',
                      pl: 2,
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-start'
                    }}>
                      <Box 
                        component="img"
                        src={category.imageUrl}
                        alt={category.title}                        
                        sx={{
                          width: '100%',
                          maxWidth: '600px',
                          height: '500px',
                          objectFit: 'cover',
                          borderRadius: 3,
                          boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>        
      {/* Service Categories - Mobile Accordion View */}
      <Box sx={{ display: { xs: 'block', md: 'none' }, pt: 14, pb: 14, backgroundColor: '#fafafa' }}>        
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }} color="primary" fontWeight={600}>
            Our Service Categories
          </Typography>
            <Box sx={{ px: 2 }}>
            {SERVICE_CATEGORIES.map((category: ServiceCategory) => (
              <Accordion 
                key={category.id} 
                sx={{ 
                  mb: 3,
                  borderRadius: 2,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  '&:before': {
                    display: 'none',
                  },
                  '&.Mui-expanded': {
                    margin: '0 0 24px 0',
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${category.id}-content`}
                  id={`panel${category.id}-header`}
                  sx={{
                    py: 2,
                    '& .MuiAccordionSummary-content': {
                      margin: '12px 0',
                    }
                  }}
                >                  
                <Typography variant="h6" fontWeight={500} align="left" sx={{ width: '100%' }}>
                    {category.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0, pb: 3 }}>
                  <Box 
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 3
                    }}
                  >
                    <Box 
                      component="img"
                      src={category.imageUrl}
                      alt={category.title}
                      sx={{
                        width: '100%',
                        maxWidth: '350px',
                        height: 'auto',
                        borderRadius: 2,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                      }}
                    />
                  </Box>
                  <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                    {category.description}
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, '& li': { mb: 1.5 } }}>
                    {category.items.map((item, itemIndex) => (
                      <Box component="li" key={itemIndex}>
                        <Typography variant="body1">
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>        
      {/* Call to Action */}
      <Box sx={{ pt: 20, pb: 20, backgroundColor: '#fff', color: '#333' }}>
        <Container maxWidth="lg">          
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" gutterBottom color="primary" fontWeight={600}>
              Ready to Discuss Your Project?
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', mb: 4 }}>
              Our team of mechanical experts is ready to help with your next project. Contact us today for a consultation and quote.
            </Typography>
            <Box 
              component={RouterLink} 
              to="/contact" 
              sx={{
                display: 'inline-block',
                px: 4,
                py: 1.5,
                bgcolor: '#1e4388',
                color: 'white',
                borderRadius: 1,
                fontWeight: 500,
                textDecoration: 'none',
                '&:hover': {
                  bgcolor: '#2c5aa0'
                }
              }}
            >
              Contact Us
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesPage;