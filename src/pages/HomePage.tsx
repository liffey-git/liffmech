import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HeroSection from '../components/common/HeroSection';
import LearnMoreButton from '../components/common/LearnMoreButton';
import { SERVICES } from '../utils/constants';
import { FEATURED_PROJECT, PROJECTS_BY_CATEGORY } from '../utils/projectsData';
import { Project } from '../types';

const HomePage: React.FC = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const servicesSectionRef = useRef<HTMLDivElement>(null);

  // Handle scroll capture in services section
  useEffect(() => {
    let wheelDelta = 0;
    const SCROLL_THRESHOLD = 300; // Amount to scroll before changing service (increased for slower feel)

    const handleWheel = (e: WheelEvent) => {
      const servicesSection = servicesSectionRef.current;
      if (!servicesSection) return;

      const rect = servicesSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isMobile = window.innerWidth < 900;
      
      // For mobile: Check if SERVICES title is at navbar position (64px from top)
      // For desktop: Check if section center is roughly centered in viewport
      let shouldCapture = false;
      
      if (isMobile) {
        // Mobile: Start capturing when section is entering viewport, but allow scrolling back up when at top
        const isScrollingDown = e.deltaY > 0;
        if (isScrollingDown) {
          shouldCapture = rect.top <= 400 && rect.bottom > windowHeight * 0.3;
        } else {
          // When scrolling up, only capture if section is already positioned (top near navbar)
          shouldCapture = rect.top <= 100 && rect.top >= 0;
        }
      } else {
        // Desktop: Check if section center is roughly centered in viewport
        const sectionCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const centerThreshold = windowHeight * 0.25;
        shouldCapture = Math.abs(sectionCenter - viewportCenter) <= centerThreshold;
      }

      if (shouldCapture) {
        const direction = e.deltaY > 0 ? 1 : -1;
        const newIndex = currentServiceIndex + direction;

        // If trying to scroll beyond boundaries, allow normal page scroll
        if (newIndex < 0 || newIndex >= SERVICES.length) {
          // At boundaries, don't prevent scroll - let page scroll naturally
          wheelDelta = 0;
          return;
        }

        // Within bounds, capture the scroll
        e.preventDefault();
        e.stopPropagation();

        wheelDelta += e.deltaY;

        // Check if we should change service
        if (Math.abs(wheelDelta) >= SCROLL_THRESHOLD) {
          setCurrentServiceIndex(newIndex);
          wheelDelta = 0;
        }
      } else {
        // Reset when not in capture zone
        wheelDelta = 0;
      }
    };

    // Handle touch for mobile
    let touchStartY = 0;
    let touchDelta = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const servicesSection = servicesSectionRef.current;
      if (!servicesSection) return;

      const rect = servicesSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isMobile = window.innerWidth < 900;
      
      // For mobile: Check if SERVICES title is at navbar position (64px from top)
      // For desktop: Check if section is in viewport
      let inSection = false;
      
      if (isMobile) {
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY - touchY;
        
        // Mobile: Start capturing when section is entering viewport, but allow scrolling back up when at top
        const isScrollingDown = deltaY > 0;
        if (isScrollingDown) {
          inSection = rect.top <= 400 && rect.bottom > windowHeight * 0.3;
        } else {
          // When scrolling up, only capture if section is already positioned (top near navbar)
          inSection = rect.top <= 100 && rect.top >= 0;
        }
      } else {
        // Desktop: Check if section is in viewport (at least 50% visible)
        const sectionMiddle = rect.top + rect.height / 2;
        inSection = sectionMiddle >= 0 && sectionMiddle <= windowHeight;
      }

      if (inSection) {
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY - touchY;
        const direction = deltaY > 0 ? 1 : -1;
        const newIndex = currentServiceIndex + direction;

        // If trying to scroll beyond boundaries, allow normal page scroll
        if (newIndex < 0 || newIndex >= SERVICES.length) {
          // At boundaries, don't prevent scroll - let page scroll naturally
          touchDelta = 0;
          return;
        }

        // Within bounds, capture the scroll
        e.preventDefault();

        touchDelta += deltaY;
        touchStartY = touchY;

        if (Math.abs(touchDelta) >= SCROLL_THRESHOLD) {
          setCurrentServiceIndex(newIndex);
          touchDelta = 0;
        }
      } else {
        // Reset when not in section
        touchDelta = 0;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [currentServiceIndex]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get featured project and first 3 projects from the data source
  const featuredProject = FEATURED_PROJECT;
  
  // Get first 3 projects from all categories combined
  const projectThumbnails: Project[] = Object.values(PROJECTS_BY_CATEGORY)
    .flat()
    .slice(0, 3);

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
      </Box>      {/* Services Section with TRUE Parallax - Original height */}
      <Box
        ref={servicesSectionRef}
        data-section="services"
        sx={{
          position: 'relative',
          height: {
            xs: '70vh',
            md: '70vh'
          },
          backgroundColor: '#000'
        }}
      >
        {/* Sticky container that stays in viewport while scrolling */}
        <Box sx={{
          position: 'relative',
          height: '100%',
          overflow: 'hidden'
        }}>
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
                transition: 'opacity 0.8s ease-in-out',
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

          {/* Services Content Container */}
          <Container
            maxWidth="lg"
            sx={{
              position: 'relative',
              zIndex: 2,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              pointerEvents: 'none',
              overflow: 'hidden'
            }}
          >
            {/* SERVICES Title - Fixed at top of section on mobile */}
            <Box sx={{
              display: { xs: 'flex', md: 'none' },
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 10,
              pointerEvents: 'none',
              justifyContent: 'center',
              alignItems: 'center',
              height: '80px'
            }}>
              {/* Blue background bar spanning full width */}
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '100%',
                backgroundColor: 'rgba(30, 67, 136, 0.6)',
                zIndex: 0
              }} />
              
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontSize: '2rem',
                  letterSpacing: '0.05em',
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                SERVICES
              </Typography>
            </Box>

            <Box sx={{
              display: 'flex',
              width: '100%',
              height: '100%',
              alignItems: 'center',
              gap: { xs: 2, md: 4 },
              pt: { xs: '80px', md: 0 }
            }}>
              {/* Left Column - SERVICES Title - Desktop only */}
              <Box sx={{
                display: { xs: 'none', md: 'flex' },
                width: '35%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                height: '100%',
                pl: 0,
                position: 'relative'
              }}>
                {/* Semi-transparent blue background - Desktop */}
                <Box sx={{
                  backgroundColor: 'rgba(30, 67, 136, 0.6)',
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120%',
                  height: '100%',
                  zIndex: 0,
                  borderRadius: 1
                }} />
                
                {/* SERVICES Title - Desktop */}
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    color: 'white',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    fontSize: '3.5rem',
                    letterSpacing: '0.05em',
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center',
                    px: 0,
                    width: '100%'
                  }}
                >
                  SERVICES
                </Typography>
              </Box>

              {/* Right Column - All Service Containers (Scroll Animation) */}
              <Box sx={{
                flex: 1,
                width: { xs: '100%', md: 'auto' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: { xs: 'center', md: 'flex-end' },
                position: 'relative',
                overflow: 'visible',
                pointerEvents: 'auto',
                clipPath: {
                  xs: 'inset(0 0 0 0)',
                  md: 'none'
                }
              }}>
                {/* All Services - Animated based on scroll progress */}
                {SERVICES.map((service, index) => {
                  // Calculate smooth position based on current service index
                  // When index < currentServiceIndex: service has passed (should be above, negative translateY)
                  // When index === currentServiceIndex: service is centered (translateY = 0)
                  // When index > currentServiceIndex: service is upcoming (should be below, positive translateY)
                  const position = index - currentServiceIndex;
                  const translateY = position * 255; // 250% spacing so items are fully hidden off screen
                  const distance = Math.abs(position);
                  
                  // Smooth opacity fade based on distance from center
                  let opacity = 1;
                  if (distance === 0) {
                    opacity = 1; // Current service fully visible
                  } else if (distance === 1) {
                    opacity = 0.5; // Adjacent services more visible for smoother transition
                  } else if (distance === 2) {
                    opacity = 0.25; // Next adjacent visible
                  } else if (distance === 3) {
                    opacity = 0.1; // Far adjacent slightly visible
                  } else {
                    opacity = 0; // Far services invisible
                  }
                  
                  const isVisible = distance <= 4; // Render current + 4 adjacent on each side for smooth entry/exit
                  const scale = Math.max(0.85, 1 - (distance * 0.08)); // Subtle scale effect
                  
                  return (
                    <Box
                      key={service.id}
                      sx={{
                        position: 'absolute',
                        display: isVisible ? 'flex' : 'none',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: { xs: 3, md: 4 },
                        color: 'white',
                        pr: { xs: 0, md: 4 },
                        ml: { xs: '25px', md: 0 },
                        top: '50%',
                        left: { xs: '50%', md: 'auto' },
                        right: { xs: 'auto', md: 0 },
                        width: '300px',
                        height: '225px',
                        transform: {
                          xs: `translate(-50%, calc(-50% + ${translateY}%)) scale(${scale})`,
                          md: `translate(0, calc(-50% + ${translateY}%)) scale(${scale})`
                        },
                        opacity,
                        transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease-in-out',
                        pointerEvents: distance === 0 ? 'auto' : 'none',
                        transformOrigin: 'center center',
                        willChange: 'transform, opacity'
                      }}
                    >
                      {/* Service Logo */}
                      <Box
                        component="img"
                        src={service.logoUrl}
                        alt={service.title}
                        sx={{
                          height: '225px',
                          width: 'auto',
                          position: 'absolute',
                          zIndex: -1,
                          top: 0,
                          left: 0,
                          opacity: 0.65,
                          flexShrink: 0
                        }}
                      />
                      
                      {/* Title and Button Column */}
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          gap: { xs: 1.5, md: 2 }
                        }}
                      >
                        {/* Service Title */}
                        <Typography
                          variant="h3"
                          component="h3"
                          sx={{
                            position: 'absolute',
                            top: '15%',
                            left: '20%',
                            fontWeight: 600,
                            width: '250px',
                            height: '125px',
                            fontSize: '2.5rem',
                            textAlign: 'left',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                            lineHeight: 1.2,
                            display: 'flex',
                            alignItems: 'center'
                          }}
                        >
                          {service.title}
                        </Typography>
                        
                        {/* Learn More Button */}
                        <Box
                          component={RouterLink}
                          to={service.path}
                          sx={{
                            textDecoration: 'none',
                            color: 'inherit',
                            position: 'absolute',
                            bottom: '15%',
                            right: '10%',
                          }}
                        >
                          <LearnMoreButton
                            path={service.path}
                            variant="dark"
                            showPlayIcon
                            fontSize='1.25rem'
                          />
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>      {/* Projects Section - Responsive Grid with FilterableProjectCard Styling */}
      <Box sx={{ 
        pt: 14,
        pb: 14,
        backgroundColor: '#fff'
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
              to={`/projects?project=${featuredProject.id}`}
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
                  to={`/projects?project=${project.id}`}
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