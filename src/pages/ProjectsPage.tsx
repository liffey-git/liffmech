import React, { useState, useEffect, useMemo } from 'react';
import { Box, Container, Typography } from '@mui/material';
import FilterableProjectCard from '../components/common/FilterableProjectCard';
import FeaturedProjectCard from '../components/common/FeaturedProjectCard';
import ProjectFilters from '../components/common/ProjectFilters';
import BrandMarquee from '../components/common/BrandMarquee';
import { Project } from '../types';
import { FEATURED_PROJECT, PROJECTS_BY_CATEGORY } from '../utils/projectsData';

// Client logos
const CLIENT_LOGOS = [
  '/images/ClientLogos/bmo-blue-on-transparent-en.svg',
  '/images/ClientLogos/rbc-logo-shield.svg',
  '/images/ClientLogos/scotiabank-logo-red-desktop-200px.svg',
  '/images/ClientLogos/TD_logo.svg',
  '/images/ClientLogos/cibc-logo-colour-142x36.svg',
  '/images/ClientLogos/A&W_logo.svg',
  '/images/ClientLogos/WMT-Wordmark-Standard-TrueBlue-RGB.png'
];

const ProjectsPage: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedClientTypes, setSelectedClientTypes] = useState<string[]>([]);

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
      {/* Main Content */}
      <Box sx={{ pt: 14, pb: 8, backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
          <Typography variant="h1" component="h1" gutterBottom align="center" sx={{ mb: 2, textTransform: 'uppercase', fontWeight: 700 }} color="primary">
            PROJECTS
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
            <Container maxWidth="lg">
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center'
              }}>
                <FeaturedProjectCard 
                  project={FEATURED_PROJECT}
                  onClick={() => {/* No action */}}
                />
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>

      {/* Brand Marquee */}
      <BrandMarquee 
        logos={CLIENT_LOGOS}
        height={60}
        speed={50}
        sx={{
          borderTop: '1px solid rgba(30, 67, 136, 0.12)',
          borderBottom: '1px solid rgba(30, 67, 136, 0.12)'
        }}
      />

      {/* Filters and Projects Section */}
      <Box sx={{ 
        pt: 8,
        pb: 20, 
        backgroundColor: 'rgba(30, 67, 136, 0.08)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(30, 67, 136, 0.12)',
        borderBottom: '1px solid rgba(30, 67, 136, 0.12)'
      }}>
        <Container maxWidth="lg">
          {/* Project Filters */}
          <ProjectFilters
            selectedServices={selectedServices}
            selectedClientTypes={selectedClientTypes}
            onServiceChange={setSelectedServices}
            onClientTypeChange={setSelectedClientTypes}
            onClearFilters={handleClearFilters}
          />

          {/* Projects Grid */}
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)'
            },
            gap: 3
          }}>
            {Object.entries(filteredProjects).flatMap(([_category, projects]) => 
              projects.map((project) => (
                <FilterableProjectCard 
                  key={project.id}
                  project={project}
                  onClick={() => {/* No action */}}
                />
              ))
            )}
          </Box>

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
    </Box>
  );
};

export default ProjectsPage;