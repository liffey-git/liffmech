import React, { useState, useEffect, useMemo } from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import HeroSection from '../components/common/HeroSection';
import FilterableProjectCard from '../components/common/FilterableProjectCard';
import FeaturedProjectCard from '../components/common/FeaturedProjectCard';
import ProjectFilters from '../components/common/ProjectFilters';
import ProjectLightbox from '../components/common/ProjectLightbox';
import { Project } from '../types';
import { FEATURED_PROJECT, PROJECTS_BY_CATEGORY } from '../utils/projectsData';

const ProjectsPage: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedClientTypes, setSelectedClientTypes] = useState<string[]>([]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
    setSelectedProject(null);
  };

  const handleClearFilters = () => {
    setSelectedServices([]);
    setSelectedClientTypes([]);
  };

  // Filter logic
  const filteredProjects = useMemo(() => {
    if (selectedServices.length === 0 && selectedClientTypes.length === 0) {
      return PROJECTS_BY_CATEGORY;
    }

    const filtered: Record<string, Project[]> = {};
    
    Object.entries(PROJECTS_BY_CATEGORY).forEach(([category, projects]) => {
      const categoryFiltered = projects.filter(project => {
        const serviceMatch = selectedServices.length === 0 || 
          selectedServices.some(service => project.services.includes(service));
        const clientTypeMatch = selectedClientTypes.length === 0 || 
          selectedClientTypes.includes(project.clientType);
        
        return serviceMatch && clientTypeMatch;
      });
      
      if (categoryFiltered.length > 0) {
        filtered[category] = categoryFiltered;
      }
    });
    
    return filtered;
  }, [selectedServices, selectedClientTypes]);

  const hasActiveFilters = selectedServices.length > 0 || selectedClientTypes.length > 0;

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection 
        imageUrl="/images/IMG_8855.jpg"
        height="50vh"
      />
      
      {/* Main Content */}
      <Box sx={{ pt: 14, pb: 8, backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
          <Typography variant="h1" component="h1" gutterBottom align="center" sx={{ mb: 2 }} color="primary" fontWeight={600}>
            Projects
          </Typography>
          
          {/* Introduction */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mb: 8
          }}>
            <Typography 
              variant="body1" 
              align="center" 
              sx={{ 
                maxWidth: '800px' 
              }}
            >
              We call Toronto home, but all of Ontario is our backyard. Liffey has completed projects across the province, of every size and type. We collaborate closely with developers, owners, subcontractors, and site managers to ensure projects are completed on time and on budget.
            </Typography>
          </Box>
          
          {/* Featured Project */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ mb: 4 }} color="primary" fontWeight={600}>
              Featured Project
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center'
            }}>
              <FeaturedProjectCard 
                project={FEATURED_PROJECT}
                onClick={() => handleProjectClick(FEATURED_PROJECT)}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Filters and Projects Section */}
      <Box sx={{ pb: 20, backgroundColor: '#fafafa' }}>
        <Container maxWidth="lg">
          {/* Project Filters */}
          <ProjectFilters
            selectedServices={selectedServices}
            selectedClientTypes={selectedClientTypes}
            onServiceChange={setSelectedServices}
            onClientTypeChange={setSelectedClientTypes}
            onClearFilters={handleClearFilters}
          />

          {/* Projects by Category */}
          {Object.entries(filteredProjects).map(([category, projects], categoryIndex) => (
            <Box key={category} sx={{ mb: 6 }}>
              <Typography 
                variant="h3" 
                component="h2" 
                gutterBottom 
                color="primary" 
                fontWeight={600}
                sx={{ mb: 3 }}
              >
                {category}
              </Typography>
              
              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)'
                },
                gap: 3,
                mb: 4
              }}>
                {projects.map((project) => (
                  <FilterableProjectCard 
                    key={project.id}
                    project={project}
                    onClick={() => handleProjectClick(project)}
                  />
                ))}
              </Box>
              
              {/* Divider between categories (except last one) */}
              {categoryIndex < Object.entries(filteredProjects).length - 1 && (
                <Divider sx={{ my: 4, bgcolor: 'rgba(0,0,0,0.1)' }} />
              )}
            </Box>
          ))}

          {/* No Results Message */}
          {Object.keys(filteredProjects).length === 0 && hasActiveFilters && (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h5" color="text.secondary" gutterBottom>
                No projects match your selected filters
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Try adjusting your filters or clearing them to see all projects.
              </Typography>
            </Box>
          )}
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