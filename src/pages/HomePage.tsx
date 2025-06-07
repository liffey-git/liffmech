import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HeroSection from '../components/common/HeroSection';
import LearnMoreButton from '../components/common/LearnMoreButton';
import { SERVICES } from '../utils/constants';
import { Project } from '../types';

const HomePage: React.FC = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);  // Handle scroll to change background image based on visible service
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
    };    // Handle wheel events for scroll pass-through
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

  // Example projects for the projects section
  const featuredProject: Project = {
    id: 1,
    title: 'Jack Nathan Health Centres',
    imageUrl: '/images/Hero1.jpg'
  };
  const projectThumbnails: Project[] = [
    { id: 1, title: 'Project 1', imageUrl: '/images/Hero1.jpg' },
    { id: 2, title: 'Project 2', imageUrl: '/images/Hero1.jpg' }
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
              </Typography>                <LearnMoreButton
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
        >          <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
        }}>            {/* Left Column - ONLY SERVICES Title */}
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
            </Box>            {/* Right Column - Vertical Scrolling Service Containers */}
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
            }}>              <Box                ref={scrollContainerRef}
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
                }}              >{SERVICES.map((service) => (
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
      </Box>      {/* Projects Section */}
      <Box sx={{ pt: 20, pb: 20, backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              mb: 6,
              fontWeight: 600,
              textTransform: 'uppercase',
              color: '#1e4388',
              fontSize: { xs: '2.25rem', md: '3.5rem' },
              letterSpacing: '0.05em'
            }}          >
            PROJECTS
          </Typography>          <Box sx={{
            display: 'flex',
            gap: 4, // Increased spacing between columns
            alignItems: 'stretch' // Make both columns equal height
          }}>            {/* Featured Project - Left Side (60% width) */}            <Box sx={{
              width: {
                xs: '100%',
                md: 'calc(60% - 16px)' // 60% width minus half the gap
              },
              display: 'flex',
              flexDirection: 'column'
            }}>{/* Square image for featured project with title overlay */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1', // Square image
                  borderRadius: 1,
                  overflow: 'hidden',
                  mb: 4 // Increased spacing between image and text
                }}
              >
                <Box
                  component="img"
                  src={featuredProject.imageUrl}
                  alt={featuredProject.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                {/* Title overlay with transparent white background */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 75,
                    left: 0,
                    right: 0,
                    p: 3,
                    background: 'rgba(255, 255, 255, 0.75)', // Transparent white background
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      fontWeight: 700,
                      color: '#1e4388' // Blue text color
                    }}
                  >
                    {featuredProject.title}                  
                    </Typography>
                </Box>
              </Box>              
              {/* Text content fills remaining space */}
              <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="body1" sx={{ flexGrow: 1, fontSize: { xs: '1rem', md: '1.125rem' }, lineHeight: 1.7, mb: 3 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
                {/* Learn More Button */}
                  <LearnMoreButton
                    path="/projects"
                    variant="light"
                    showPlayIcon
                    fontSize={{ xs: '1rem', md: '1rem' }}
                  />
              </Box>
            </Box>            {/* Project Thumbnails - Right Side (40% width) */}            
            <Box sx={{
              width: {
                xs: '100%',
                md: 'calc(40% - 16px)' // 40% width minus half the gap
              },
              display: 'flex',
              flexDirection: 'column',
              gap: 4, // Same gap as between columns
              height: '100%' // Take full height to match left column
            }}>
              {projectThumbnails.map((project) => (
                <Box
                  key={project.id}
                  sx={{
                    position: 'relative',
                    borderRadius: 1,
                    overflow: 'hidden',
                    aspectRatio: '1', // Keep both projects square
                    width: '100%',
                    flex: '0 0 auto' // Don't allow flexing of the aspect ratio
                  }}
                >
                  <Box
                    component="img"
                    src={project.imageUrl}
                    alt={project.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 35,
                      left: 0,
                      right: 0,
                      p: 2,
                      background: 'rgba(255, 255, 255, 0.75)', // Transparent white background
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: '1rem', md: '1.125rem' },
                        fontWeight: 600,
                        color: '#1e4388' // Blue text color
                      }}
                    >
                      {project.title}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;