import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HeroSection from '../components/common/HeroSection';
import LearnMoreButton from '../components/common/LearnMoreButton';
import FeaturedProjectCard from '../components/common/FeaturedProjectCard';
import { SERVICES } from '../utils/constants';
import { PROJECTS_BY_CATEGORY, FEATURED_PROJECT } from '../utils/projectsData';
import { Project } from '../types';

const HomePage: React.FC = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const servicesSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let wheelDelta = 0;
    const SCROLL_THRESHOLD = 60; // Lower threshold to better register touchpad gestures

    const handleWheel = (e: WheelEvent) => {
      const servicesSection = servicesSectionRef.current;
      if (!servicesSection) return;

      const rect = servicesSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isMobile = window.innerWidth < 900;


      let shouldCapture = false;
      
      if (isMobile) {

        const isScrollingDown = e.deltaY > 0;
        if (isScrollingDown) {
          shouldCapture = rect.top <= 400 && rect.bottom > windowHeight * 0.3;
        } else {

          shouldCapture = rect.top <= 100 && rect.top >= 0;
        }
      } else {

        const sectionCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const centerThreshold = windowHeight * 0.25;
        shouldCapture = Math.abs(sectionCenter - viewportCenter) <= centerThreshold;
      }

      if (shouldCapture) {
        // normalize deltaMode: 0 = pixels, 1 = lines, 2 = pages
        const rawDelta = e.deltaY;
        let pixelDelta = rawDelta;
        if (e.deltaMode === 1) pixelDelta = rawDelta * 16;
        else if (e.deltaMode === 2) pixelDelta = rawDelta * window.innerHeight;

        const direction = pixelDelta > 0 ? 1 : -1;
        const newIndex = currentServiceIndex + direction;

        if (newIndex < 0 || newIndex >= SERVICES.length) {
          wheelDelta = 0;
          return;
        }

        try {
          e.preventDefault();
          e.stopPropagation();
        } catch (err) {
          void err;
        }

        const normalizedDelta = Math.sign(pixelDelta) * Math.min(Math.abs(pixelDelta), 50);
        wheelDelta += normalizedDelta;

        if (Math.abs(wheelDelta) >= SCROLL_THRESHOLD) {
          setCurrentServiceIndex(newIndex);
          wheelDelta = 0;
        }
      } else {
        wheelDelta = 0;
      }
    };

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


      let inSection = false;
      
      if (isMobile) {
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY - touchY;

        const isScrollingDown = deltaY > 0;
        if (isScrollingDown) {
          inSection = rect.top <= 400 && rect.bottom > windowHeight * 0.3;
        } else {

          inSection = rect.top <= 100 && rect.top >= 0;
        }
      } else {

        const sectionMiddle = rect.top + rect.height / 2;
        inSection = sectionMiddle >= 0 && sectionMiddle <= windowHeight;
      }

      if (inSection) {
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY - touchY;
        const direction = deltaY > 0 ? 1 : -1;
        const newIndex = currentServiceIndex + direction;

        if (newIndex < 0 || newIndex >= SERVICES.length) {

          touchDelta = 0;
          return;
        }

        try {
          e.preventDefault();
        } catch (err) {
          void err;
        }

        touchDelta += deltaY;
        touchStartY = touchY;

        if (Math.abs(touchDelta) >= SCROLL_THRESHOLD) {
          setCurrentServiceIndex(newIndex);
          touchDelta = 0;
        }
      } else {

        touchDelta = 0;
      }
    };

    let supportsPassive = false;
    try {
      const opts = Object.defineProperty({}, 'passive', {
        get() {
          supportsPassive = true;
          return true;
        }
      });
      const testHandler = () => undefined;
      window.addEventListener('testPassive', testHandler, opts);
      window.removeEventListener('testPassive', testHandler, opts);
    } catch (e) {
      supportsPassive = false;
    }

    const wheelOptions = supportsPassive ? { passive: false } : false;
    const touchOptions = supportsPassive ? { passive: false } : false;

    const targetEl: HTMLElement | Window = servicesSectionRef.current ?? window;

    // wrap handlers so they match EventListener signature
    const wheelListener: EventListener = (evt: Event) => handleWheel(evt as unknown as WheelEvent);
    const touchStartListener: EventListener = (evt: Event) => handleTouchStart(evt as unknown as TouchEvent);
    const touchMoveListener: EventListener = (evt: Event) => handleTouchMove(evt as unknown as TouchEvent);

    targetEl.addEventListener('wheel', wheelListener, wheelOptions as boolean | AddEventListenerOptions);
    targetEl.addEventListener('touchstart', touchStartListener, { passive: true } as AddEventListenerOptions);
    targetEl.addEventListener('touchmove', touchMoveListener, touchOptions as boolean | AddEventListenerOptions);

    return () => {
      try {
        targetEl.removeEventListener('wheel', wheelListener);
        targetEl.removeEventListener('touchstart', touchStartListener);
        targetEl.removeEventListener('touchmove', touchMoveListener);
      } catch (err) {
        // fallback to window removal
        window.removeEventListener('wheel', wheelListener);
        window.removeEventListener('touchstart', touchStartListener);
        window.removeEventListener('touchmove', touchMoveListener);
      }
    };
  }, [currentServiceIndex]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProjects = Object.values(PROJECTS_BY_CATEGORY).flat();
  const projectThumbnails: Project[] = [
    allProjects.find(p => p.id === 2),
    allProjects.find(p => p.id === 3),
    allProjects.find(p => p.id === 8)
  ].filter(Boolean) as Project[];

  return (
    <Box>
      
      <HeroSection
        videoUrl="/video/liffey-mechanical-hero.mp4"
        height="70vh"
      />

      
      <Box sx={{ pt: 20, pb: 20, backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 4
          }}>
            
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
                <span style={{ color: '#00157B', fontWeight: 600 }}>Liffey Mechanical</span> was founded in 2017 with a clear goal: to provide outstanding mechanical services to the local construction industry. We do so with pride, professionalism, and an unwavering dedication to partnership.
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
      </Box>      
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
        
        <Box sx={{
          position: 'relative',
          height: '100%',
          overflow: 'hidden'
        }}>
          
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
                  fontWeight: 700,
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
                
                
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    color: 'white',
                    fontWeight: 700,
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
                
                {SERVICES.map((service, index) => {




                  const position = index - currentServiceIndex;
                  const translateY = position * 255; // 250% spacing so items are fully hidden off screen
                  const distance = Math.abs(position);

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
                      
                      
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          gap: { xs: 1.5, md: 2 }
                        }}
                      >
                        
                        <Typography
                          variant="h3"
                          component="h3"
                          sx={{
                            position: 'absolute',
                            top: '15%',
                            left: '20%',
                            fontWeight: 700,
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
                            fontSize={{ xs: '1rem', md: '1.125rem' }}
                            serviceShadow
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
      </Box>      
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
              color: 'primary.main',
              fontSize: { xs: '2.25rem', md: '3.5rem' },
              letterSpacing: '0.05em',
              fontWeight: 700
            }}
          >
            PROJECTS
          </Typography>

          
          <Box sx={{ mb: 8 }}>
            <FeaturedProjectCard 
              project={FEATURED_PROJECT}
              onClick={() => null}
            />
          </Box>

          
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)'
            },
            gap: 3,
            mb: 6
          }}>
            {projectThumbnails.map((project: Project) => (
              <Box
                key={project.id}
                sx={{ textDecoration: 'none' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    backgroundColor: 'white',
                    borderRadius: 2,
                    overflow: 'hidden',
                    height: '100%'
                  }}
                >
                  
                  <Box
                    component="img"
                    src={project.imageUrl}
                    alt={project.title}
                    sx={{
                      height: '220px',
                      width: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  
                  
                  <Box sx={{ p: 3, flexGrow: 1 }}>
                    <Typography 
                      variant="h6" 
                      component="h3" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 600,
                        color: 'primary.main',
                        mb: 1,
                        fontSize: '1.25rem'
                      }}
                    >
                      {project.title}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          
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