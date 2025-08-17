import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HeroSection from '../components/common/HeroSection';
import LearnMoreButton from '../components/common/LearnMoreButton';
import { SERVICES } from '../utils/constants';
import { Project } from '../types';

const HomePage: React.FC = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle scroll to change background image based on visible service
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = (e: Event) => {
      const container = e.target as HTMLElement;
      const containerHeight = container.clientHeight;
      const scrollTop = container.scrollTop;
      const serviceHeight = containerHeight; // Each service takes full height

      // Calculate which service is most visible
      const newIndex = Math.round(scrollTop / serviceHeight);
      const clampedIndex = Math.max(0, Math.min(newIndex, SERVICES.length - 1));

      if (clampedIndex !== currentServiceIndex) {
        setCurrentServiceIndex(clampedIndex);
      }
    };

    // Handle wheel events for scroll pass-through
    const handleWheel = (e: WheelEvent) => {
      const container = e.currentTarget as HTMLElement;
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtTop = scrollTop <= 1; // Small tolerance for floating point precision
      const isAtBottom = scrollTop >= scrollHeight - clientHeight - 1; // Small tolerance

      // If we're at boundaries and trying to scroll past them
      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        e.preventDefault();
        e.stopPropagation();

        // For downward scrolling at bottom, scroll to next section
        if (isAtBottom && e.deltaY > 0) {
          const servicesSection = container.closest('div[data-section="services"]');
          if (servicesSection) {
            const nextSection = servicesSection.nextElementSibling as HTMLElement;
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              return;
            }
          }
        }

        // Fallback: manual page scroll
        window.scrollBy({
          top: e.deltaY * 0.5, // Reduce scroll speed for better control
          behavior: 'auto'
        });
      }
      // If not at boundaries, allow normal container scrolling with snap
    };

    // Handle touch events for mobile scroll pass-through
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const container = e.currentTarget as HTMLElement;
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtTop = scrollTop === 0;
      const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) <= 1;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      // If we're at boundaries and trying to scroll past them
      if ((isAtTop && deltaY < 0) || (isAtBottom && deltaY > 0)) {
        e.preventDefault();
        e.stopPropagation();
        // Allow page scroll by not preventing the touch event
        window.scrollBy({
          top: deltaY,
          behavior: 'auto'
        });
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    scrollContainer.addEventListener('touchstart', handleTouchStart, { passive: false });
    scrollContainer.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      scrollContainer.removeEventListener('wheel', handleWheel);
      scrollContainer.removeEventListener('touchstart', handleTouchStart);
      scrollContainer.removeEventListener('touchmove', handleTouchMove);
    };
  }, [currentServiceIndex]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Example projects for the projects section
  const featuredProject: Project = {
    id: 1,
    title: 'Jack Nathan Health Centres',
    imageUrl: '/images/IMG_8967.jpg',
    description: 'Comprehensive mechanical systems for healthcare facilities',
    location: 'Toronto, Ontario',
    industry: 'Healthcare',
    services: ['HVAC & Refrigeration'],
    clientType: 'Healthcare'
  };

  const projectThumbnails: Project[] = [
    {
      id: 2,
      title: 'Commercial HVAC Installation',
      imageUrl: '/images/IMG_4160.JPG',
      description: 'Professional HVAC system installation for commercial facility',
      location: 'Downtown Toronto, Ontario',
      industry: 'Commercial',
      services: ['HVAC & Refrigeration'],
      clientType: 'Commercial'
    },
    {
      id: 3,
      title: 'Healthcare Mechanical Systems',
      imageUrl: '/images/IMG_9072.jpg',
      description: 'Specialized mechanical systems for healthcare environment',
      location: 'Mississauga, Ontario',
      industry: 'Healthcare',
      services: ['Plumbing'],
      clientType: 'Healthcare'
    },
    {
      id: 4,
      title: 'Industrial Sheet Metal Work',
      imageUrl: '/images/IMG_4142.JPG',
      description: 'Custom sheet metal fabrication and installation',
      location: 'Vaughan, Ontario',
      industry: 'Industrial',
      services: ['Sheet Metal'],
      clientType: 'Industrial'
    }
  ];

  return (
    <Box>
      {/* Hero Section - Fullwidth image */}
      <HeroSection
        imageUrl="/images/Hero1.jpg"
        height="70vh"
      />        {/* About Section */}
      <Box sx={{ pt: 20, pb: 20, backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 4
          }}>
            {/* Title */}
            <Typography
              variant="h2"
              component="h2"
              sx={{
                color: '#999',
                textTransform: 'uppercase',
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.125rem' },
                letterSpacing: '0.1em',
                lineHeight: 1.2
              }}
            >
              About Us
            </Typography>

            {/* Content */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                  lineHeight: 1.8,
                  color: '#333',
                  mb: 4
                }}
              >
                <span style={{ color: '#1e4388', fontWeight: 600 }}>Liffey Mechanical</span> was founded in 2017 with a clear goal: to provide outstanding mechanical services to the local construction industry. We do so with pride, professionalism, and an unwavering dedication to partnership.
              </Typography>                
              <LearnMoreButton
                path="/about"
                variant="light"
                showPlayIcon
                fontSize={{ xs: '1rem', md: '1.125rem' }}
              />
            </Box>
          </Box>
        </Container>
      </Box>      {/* Services Section with Dynamic Background */}
      <Box
        data-section="services"
        sx={{
          position: 'relative',
          height: {
            xs: '45vh',
            md: '70vh'
          },
          overflow: 'hidden',
          backgroundColor: '#000' // Fallback background to prevent white flash
        }}
      >
        {/* Base background image - always visible */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${SERVICES[0]?.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />

        {/* Multiple background images with fade transitions */}
        {SERVICES.map((service, index) => (
          <Box
            key={service.id}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${service.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: currentServiceIndex === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: 1,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                zIndex: 1
              }
            }}
          />
        ))}

        {/* Services Content - Clean Two Column Layout */}
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
          }}>
            {/* Left Column - ONLY SERVICES Title */}
            <Box sx={{
              width: { xs: '100%', md: '35%' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: { xs: 'center', md: 'flex-start' },
              height: { xs: '30%', md: '100%' },
              pl: { md: 0 }, // Ensure no left padding on desktop
              position: 'relative'
            }}>
              {/* Semi-transparent blue background container spanning full height */}
              <Box sx={{
                backgroundColor: 'rgba(30, 67, 136, 0.5)', // Semi-transparent blue background
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: { xs: '50%', md: '50%' },
                transform: { xs: 'translateX(-64.5%)', md: 'translateX(-64.5%)' },
                width: { xs: '120%', md: '120%' }, // Wider than the text
                zIndex: 0,
                borderRadius: 1
              }} />
              {/* SERVICES Title positioned at edge */}
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontSize: { xs: '2.25rem', md: '3.5rem' },
                  letterSpacing: '0.05em',
                  position: 'relative',
                  zIndex: 1,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                SERVICES
              </Typography>
            </Box>

            {/* Right Column - Vertical Scrolling Service Containers */}
            <Box sx={{
              width: '100%', // Changed to span full width
              height: { xs: '70%', md: '100%' },
              position: 'absolute', // Position absolutely to span full width
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-end' }, // Align to right on desktop
              pr: { md: 0 }, // Ensure no right padding on desktop
              pointerEvents: 'none' // Prevent blocking clicks on left column
            }}>
              <Box
                ref={scrollContainerRef}
                sx={{
                  height: '100%',
                  width: '100%',
                  overflowY: 'auto',
                  scrollSnapType: 'y mandatory', // Re-enable scroll snap for proper centering
                  scrollbarWidth: 'none', // Hide scrollbar for Firefox
                  msOverflowStyle: 'none', // Hide scrollbar for IE/Edge
                  '&::-webkit-scrollbar': {
                    display: 'none' // Hide scrollbar for Chrome/Safari/Opera
                  },
                  pointerEvents: 'auto', // Re-enable pointer events for scrollable content
                  // Improve scroll performance
                  willChange: 'scroll-position',
                  // Ensure smooth scrolling on touch devices
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {SERVICES.map((service) => (
                  <Box
                    key={service.id}
                    sx={{
                      width: '100%',
                      height: { xs: '100%', md: '100%' },
                      scrollSnapAlign: 'center', // Center each service in the viewport
                      scrollSnapStop: 'always',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end', // Changed from 'flex-start' to 'flex-end' to align service containers to the right
                      mb: { xs: 1, md: 1.5 },
                      color: 'white',
                      '&:last-child': {
                        mb: 0
                      }
                    }}
                  >
                    {/* Service Container */}
                    <Box sx={{
                      borderRadius: 2,
                      overflow: 'hidden',
                      position: 'relative',
                      p: { xs: 3, md: 4 },
                      width: '75%',
                      height: { xs: 'calc(100% - 12px)', md: 'calc(100% - 18px)' },
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end', // Changed from 'flex-start' to 'flex-end' to align content to the right
                      justifyContent: 'center',
                    }}>
                      {/* Background watermark logo */}
                      <Box
                        component="img"
                        src={service.logoUrl}
                        alt=""
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '70%',
                          transform: 'translate(-50%, -50%)',
                          width: '17.5%',
                          height: 'auto',
                          opacity: 1,
                          pointerEvents: 'none'
                        }}
                      />
                      
                      {/* Water Drop Title */}
                      <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end', // Changed from 'flex-start' to 'flex-end' for right alignment
                        alignItems: 'flex-start',
                        width: '100%'
                      }}>
                        <Typography
                          variant="h3"
                          component="h3"
                          sx={{
                            fontWeight: 600,
                            zIndex: 2,
                            position: 'relative',
                            fontSize: { xs: '1.5rem', md: '1.875rem' },
                            textAlign: 'right' // Add right text alignment
                          }}
                        >
                          {service.title}
                        </Typography>
                      </Box>
                      
                      {/* Bottom section with Learn More and Play button */}
                      <Box sx={{
                        display: 'flex',
                        marginTop: '0.8rem',
                        justifyContent: 'flex-end', // Right alignment
                        alignItems: 'center',
                        zIndex: 2,
                        position: 'relative',
                        width: '100%'
                      }}>
                        <Box
                          component={RouterLink}
                          to={service.path}
                          sx={{
                            textDecoration: 'none',
                            color: 'inherit'
                          }}
                        >
                          <LearnMoreButton
                            path="/services"
                            variant="dark"
                            showPlayIcon
                            fontSize={{ xs: '1rem', md: '1rem' }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>      {/* Projects Section - Responsive Grid with FilterableProjectCard Styling */}
      <Box sx={{ 
        pt: 14,
        pb: 14,
        backgroundColor: 'rgba(30, 67, 136, 0.08)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(30, 67, 136, 0.12)',
        borderBottom: '1px solid rgba(30, 67, 136, 0.12)'
      }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              mb: 4,
              textTransform: 'uppercase',
              color: '#1e4388',
              fontSize: { xs: '2.25rem', md: '3.5rem' },
              letterSpacing: '0.05em'
            }}
          >
            PROJECTS
          </Typography>

          {/* Featured Project on Top + 3 Below Layout */}
          <Box sx={{ mb: 4 }}>
            {/* Featured Project - Full Width on Top */}
            <Box
              component={RouterLink}
              to="/projects"
              sx={{ 
                textDecoration: 'none',
                display: 'block',
                mb: 4
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  backgroundColor: 'white',
                  borderRadius: 1,
                  overflow: 'hidden',
                  width: '100%', // Full width to match 3 cards below
                  height: { md: '400px' }, // Fixed height on desktop
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                {/* Featured Project Image - Full Height */}
                <Box
                  component="img"
                  src={featuredProject.imageUrl}
                  alt={featuredProject.title}
                  sx={{
                    height: { xs: '300px', md: '100%' }, // Full height on desktop
                    width: { xs: '100%', md: '50%' }, // Half width on desktop
                    objectFit: 'cover',
                    display: 'block',
                    flexShrink: 0
                  }}
                />
                
                {/* Featured Card Content */}
                <Box sx={{ 
                  p: 4, // Increased padding for larger card
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center' // Center content vertically
                }}>
                  <Typography 
                    variant="h3" // Even larger title
                    component="h3" 
                    sx={{ 
                      fontWeight: 600,
                      color: '#1e4388',
                      mb: 2,
                      fontSize: { xs: '1.75rem', md: '2.25rem' }
                    }}
                  >
                    {featuredProject.title}
                  </Typography>
                  
                  <Typography 
                    variant="h6"
                    color="text.secondary" 
                    sx={{ 
                      mb: 3,
                      fontWeight: 500,
                      fontSize: '1.25rem'
                    }}
                  >
                    {featuredProject.location}
                  </Typography>

                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 3,
                      lineHeight: 1.6,
                      color: 'text.primary',
                      fontSize: '1.125rem'
                    }}
                  >
                    {featuredProject.description}
                  </Typography>
                  
                  {/* Service Tags */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {featuredProject.services.map((service: string, index: number) => (
                      <Box
                        key={index}
                        sx={{
                          px: 3,
                          py: 1,
                          fontSize: '1rem',
                          height: '40px',
                          color: '#1e4388',
                          borderColor: '#1e4388',
                          border: '2px solid #1e4388',
                          borderRadius: '20px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          fontWeight: 600,
                          '&:hover': {
                            backgroundColor: '#1e4388',
                            color: 'white'
                          }
                        }}
                      >
                        {service}
                      </Box>
                    ))}
                  </Box>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'text.secondary',
                      fontStyle: 'italic',
                      fontSize: '1rem'
                    }}
                  >
                    {featuredProject.industry}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* 3 Project Cards in a Row Below */}
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { 
                xs: '1fr', 
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)'
              },
              gap: 3
            }}>
              {projectThumbnails.map((project: Project) => (
                <Box
                  key={project.id}
                  component={RouterLink}
                  to="/projects"
                  sx={{ textDecoration: 'none' }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease',
                      backgroundColor: 'white',
                      borderRadius: 1,
                      overflow: 'hidden',
                      height: '100%', // Make all cards same height
                      '&:hover': {
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                        transform: 'translateY(-4px)'
                      }
                    }}
                  >
                    {/* Project Image - Same as FilterableProjectCard */}
                    <Box
                      component="img"
                      src={project.imageUrl}
                      alt={project.title}
                      sx={{
                        height: '200px',
                        width: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                    
                    {/* Card Content - Same as FilterableProjectCard */}
                    <Box sx={{ p: 2, flexGrow: 1 }}>
                      <Typography 
                        variant="h6" 
                        component="h3" 
                        gutterBottom 
                        sx={{ 
                          fontWeight: 600,
                          color: '#1e4388',
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
                          fontWeight: 500
                        }}
                      >
                        {project.location}
                      </Typography>
                      
                      {/* Service Tags - Same as FilterableProjectCard */}
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
                        {project.services.map((service: string, index: number) => (
                          <Box
                            key={index}
                            sx={{
                              px: 1.5,
                              py: 0.25,
                              fontSize: '0.7rem',
                              height: '24px',
                              color: '#1e4388',
                              borderColor: '#1e4388',
                              border: '1px solid #1e4388',
                              borderRadius: '12px',
                              display: 'inline-flex',
                              alignItems: 'center',
                              fontWeight: 500,
                              '&:hover': {
                                backgroundColor: '#1e4388',
                                color: 'white'
                              }
                            }}
                          >
                            {service}
                          </Box>
                        ))}
                      </Box>
                      
                      {/* Industry Tag - Same as FilterableProjectCard */}
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: 'text.secondary',
                          fontStyle: 'italic'
                        }}
                      >
                        {project.industry}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* View All Projects Button */}
          <Box sx={{ textAlign: 'center' }}>
            <LearnMoreButton
              path="/projects"
              variant="light"
              showPlayIcon
              fontSize={{ xs: '1rem', md: '1.125rem' }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;