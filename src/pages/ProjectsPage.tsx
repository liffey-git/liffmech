import React, { useState, useEffect, useMemo } from 'react';
import { Box, Container, Typography } from '@mui/material';
import FilterableProjectCard from '../components/common/FilterableProjectCard';
import FeaturedProjectCard from '../components/common/FeaturedProjectCard';
import ProjectFilters from '../components/common/ProjectFilters';
import { Project } from '../types';
import { FEATURED_PROJECT, PROJECTS_BY_CATEGORY } from '../utils/projectsData';

const ProjectsPage: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedClientTypes, setSelectedClientTypes] = useState<string[]>([]);

  const handleClearFilters = () => {
    setSelectedServices([]);
    setSelectedClientTypes([]);
  };

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
      
      <Box sx={{ pt: 14, pb: 8, backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
          <Typography variant="h1" component="h1" gutterBottom align="center" sx={{ mb: 2, textTransform: 'uppercase', fontWeight: 700 }} color="primary">
            PROJECTS
          </Typography>
          
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mb: 8
          }}>
            <Typography 
              variant="body1" 
              align="center" 
              sx={{ 
                maxWidth: '800px',
                fontSize: { xs: '1rem', lg: '1.125rem' }
              }}
            >
              We call Toronto home, but all of Ontario is our backyard. Liffey has completed projects across the province, of every size and type. We collaborate closely with developers, owners, subcontractors, and site managers to ensure projects are completed on time and on budget.
            </Typography>
          </Box>
          
          
          <Box sx={{ mb: 8 }}>
            <Container maxWidth="lg">
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center'
              }}>
                <FeaturedProjectCard 
                  project={FEATURED_PROJECT}
                   onClick={() => null}
                />
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>

      
      <Box sx={{ 
        pt: 8,
        pb: 20, 
        backgroundColor: 'rgba(30, 67, 136, 0.08)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(30, 67, 136, 0.12)',
        borderBottom: '1px solid rgba(30, 67, 136, 0.12)'
      }}>
        <Container maxWidth="lg">
          
          <ProjectFilters
            selectedServices={selectedServices}
            selectedClientTypes={selectedClientTypes}
            onServiceChange={setSelectedServices}
            onClientTypeChange={setSelectedClientTypes}
            onClearFilters={handleClearFilters}
          />

          
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
                   onClick={() => null}
                />
              ))
            )}
          </Box>

          
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