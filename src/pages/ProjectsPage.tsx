import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import HeroSection from '../components/common/HeroSection';
import ProjectCard from '../components/common/ProjectCard';
import ProjectLightbox from '../components/common/ProjectLightbox';

const ProjectsPage: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    description: string;
    imageUrl: string;
  } | null>(null);

  const handleProjectClick = (project: { title: string; description: string; imageUrl: string }) => {
    setSelectedProject(project);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
    setSelectedProject(null);
  };
  // Sample projects data
  const featuredProject = {
    id: 1,
    title: 'Jack Nathan Health Centres',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Excepteur sint occaecat cupidatat non proident.',
    imageUrl: '/images/IMG_SheetM.jpg'
  };
  const projects = [
    {
      id: 2,
      title: 'TD Bank',
      description: 'A comprehensive mechanical installation for TD Bank\'s flagship branch location. This project included advanced HVAC systems, energy-efficient heating and cooling solutions, and specialized ventilation systems to ensure optimal comfort for both customers and staff. Our team worked closely with the bank\'s facilities management to deliver a system that meets their high standards for reliability and efficiency.',
      imageUrl: '/images/IMG_AC.jpg'
    },
    {
      id: 3,
      title: 'BMO Financial',
      description: 'Complete mechanical systems overhaul for BMO\'s regional office building. The project encompassed installation of modern HVAC equipment, plumbing systems, and building automation controls. Our expertise in commercial banking environments ensured minimal disruption to daily operations while delivering state-of-the-art mechanical solutions.',
      imageUrl: '/images/IMG_Draft.jpg'
    },
    {
      id: 4,
      title: 'CIBC Corporate Center',
      description: 'Large-scale mechanical infrastructure project for CIBC\'s corporate headquarters. We provided comprehensive mechanical services including climate control systems, industrial-grade plumbing, and specialized air filtration systems. The project required precise coordination with other trades and strict adherence to corporate security protocols.',
      imageUrl: '/images/IMG_Pipes.jpg'
    },
    {
      id: 5,
      title: 'RBC Branch',
      description: 'Multi-location mechanical services project covering several RBC branch locations across Ontario. Each site received customized HVAC solutions, upgraded plumbing systems, and energy-efficient mechanical equipment. Our standardized approach ensured consistency across all locations while meeting each site\'s unique requirements.',
      imageUrl: '/images/IMG_Ref.jpg'
    },
    {
      id: 6,
      title: 'Scotiabank Plaza',
      description: 'Premium mechanical installation for Scotiabank\'s flagship plaza location. This high-profile project featured advanced building automation systems, precision climate control, and specialized mechanical equipment for the banking hall and office spaces. Our team delivered exceptional quality to match the prestige of this landmark location.',
      imageUrl: '/images/Hero1.jpg'
    },
    {
      id: 7,
      title: 'Walmart',
      description: 'Industrial-scale mechanical project for Walmart\'s regional distribution facility. The scope included massive HVAC systems for warehouse climate control, specialized refrigeration systems for cold storage areas, and comprehensive plumbing infrastructure. Our industrial expertise ensured optimal performance for this critical supply chain facility.',
      imageUrl: '/images/IMG_AC.jpg'
    },
    {
      id: 8,
      title: 'A&W Restaurant',
      description: 'Multi-site restaurant mechanical services covering several A&W locations. Each restaurant received commercial kitchen ventilation systems, grease management solutions, HVAC systems optimized for food service environments, and specialized plumbing for commercial kitchen operations. Our food service expertise ensured compliance with all health and safety regulations.',
      imageUrl: '/images/IMG_Draft.jpg'
    },
    {
      id: 9,
      title: 'Pizza Hut',
      description: 'Comprehensive mechanical systems for Pizza Hut restaurant locations including commercial kitchen exhaust systems, specialized oven ventilation, HVAC systems designed for food service environments, and complete plumbing installations. Our restaurant industry experience delivered systems that support efficient operations and food safety standards.',
      imageUrl: '/images/IMG_Pipes.jpg'
    },
    {
      id: 10,
      title: 'Isabelle\'s Nightclub',
      description: 'Specialized mechanical installation for this entertainment venue featuring advanced ventilation systems for large crowds, climate control optimized for nightclub environments, specialized plumbing for bar and restaurant operations, and acoustically-designed HVAC systems to minimize noise interference with sound systems.',
      imageUrl: '/images/IMG_Ref.jpg'
    },
    {
      id: 11,
      title: 'Ballroom Bowl',
      description: 'Complex mechanical project for this bowling and entertainment facility. The installation included specialized ventilation for the bowling lanes, restaurant-grade kitchen systems, HVAC solutions for various entertainment zones, and comprehensive plumbing for the full-service facility. Our versatile expertise handled the diverse mechanical needs of this multi-use entertainment venue.',
      imageUrl: '/images/IMG_SheetM.jpg'
    }
  ];

  return (
    <Box>      {/* Hero Section */}
      <HeroSection 
        imageUrl="/images/IMG_Ref.jpg"
        height="40vh"
      />
      
      {/* Main Content - Combined Introduction and Featured Project */}
      <Box sx={{ pt: 14, pb: 2, backgroundColor: '#fff' }}>        
        <Container maxWidth="lg">
          <Typography variant="h1" component="h1" gutterBottom align="center" sx={{ mb: 2 }} color="primary" fontWeight={600}>
            Projects
          </Typography>
          
          {/* Centered paragraph with controlled width */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mb: 8
          }}>
            <Typography 
              variant="body1" 
              align="center" 
              textAlign="left"
              sx={{ 
                maxWidth: '800px' 
              }}
            >
              We call Toronto home, but all of Ontario is our backyard. Liffey has completed projects across the province, of every size and type. We collaborate closely with developers, owners, subcontractors, and site managers to ensure projects are completed on time and on budget. Browse a selection of some of our highest-profile projects here. 
            </Typography>
          </Box>
          
          {/* Featured Project */}
          <Box sx={{ mb: 6 }}>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 4
            }}>
              <Box sx={{ 
                width: { 
                  xs: '100%', 
                  md: 'calc(50% - 16px)' 
                } 
              }}>
                <Box 
                  component="img"
                  src={featuredProject.imageUrl}
                  alt={featuredProject.title}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2
                  }}
                />
              </Box>
              <Box sx={{ 
                width: { 
                  xs: '100%', 
                  md: 'calc(50% - 16px)' 
                }}}>
                <Typography variant="h3" component="h2" gutterBottom color="primary" fontWeight={600}>
                  {featuredProject.title}
                </Typography>
                <Typography variant="body1">
                  {featuredProject.description}
                </Typography>
              </Box>
            </Box>
          </Box>        </Container>
      </Box>
      
      {/* Projects Grid Section */}
      <Box sx={{ pb: 20, backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 3,
              maxWidth: '1200px',
              justifyContent: 'center'
            }}>              
            {projects.map((project) => (
                <Box 
                  key={project.id}
                  sx={{ 
                    width: { 
                      xs: '100%', 
                      sm: 'calc(50% - 12px)', 
                      md: 'calc(25% - 18px)' 
                    },
                    maxWidth: '280px'
                  }}
                >
                  <ProjectCard
                    title={project.title}
                    imageUrl={project.imageUrl}
                    onClick={() => handleProjectClick(project)}
                  />
                </Box>
            ))}
            </Box>          
          </Box>
        </Container>
      </Box>

      {/* Project Lightbox */}
      <ProjectLightbox
        isOpen={lightboxOpen}
        onClose={handleCloseLightbox}
        project={selectedProject}
      />
    </Box>
  );
};

export default ProjectsPage;