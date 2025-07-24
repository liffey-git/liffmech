import React from 'react';
import { Box, Typography, Chip, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { SERVICE_TAGS, CLIENT_TYPES } from '../../utils/projectsData';

interface ProjectFiltersProps {
  selectedServices: string[];
  selectedClientTypes: string[];
  onServiceChange: (services: string[]) => void;
  onClientTypeChange: (clientTypes: string[]) => void;
  onClearFilters: () => void;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  selectedServices,
  selectedClientTypes,
  onServiceChange,
  onClientTypeChange,
  onClearFilters
}) => {
  const handleServiceClick = (service: string) => {
    if (selectedServices.includes(service)) {
      onServiceChange(selectedServices.filter(s => s !== service));
    } else {
      onServiceChange([...selectedServices, service]);
    }
  };

  const handleClientTypeChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    onClientTypeChange(typeof value === 'string' ? value.split(',') : value);
  };

  const hasActiveFilters = selectedServices.length > 0 || selectedClientTypes.length > 0;

  return (
    <Box sx={{ mb: 4, mt: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom color="primary" fontWeight={600}>
        Filter Projects
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Service Tags Filter */}
        <Box>
          <Typography variant="subtitle1" gutterBottom fontWeight={500}>
            Services
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {SERVICE_TAGS.map((service) => (
              <Chip
                key={service}
                label={service}
                clickable
                variant={selectedServices.includes(service) ? 'filled' : 'outlined'}
                color={selectedServices.includes(service) ? 'primary' : 'default'}
                onClick={() => handleServiceClick(service)}
                sx={{
                  '&:hover': {
                    backgroundColor: selectedServices.includes(service) 
                      ? 'primary.dark' 
                      : 'action.hover'
                  }
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Client Type Filter */}
        <Box sx={{ maxWidth: 300 }}>
          <FormControl fullWidth size="small">
            <InputLabel>Client Types</InputLabel>
            <Select
              multiple
              value={selectedClientTypes}
              onChange={handleClientTypeChange}
              label="Client Types"
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} size="small" />
                  ))}
                </Box>
              )}
            >
              {CLIENT_TYPES.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Box>
            <Chip
              label="Clear All Filters"
              variant="outlined"
              color="secondary"
              clickable
              onClick={onClearFilters}
              sx={{
                '&:hover': {
                  backgroundColor: 'secondary.light',
                  color: 'white'
                }
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProjectFilters;
