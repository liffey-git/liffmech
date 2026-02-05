import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  SelectChangeEvent,
  useMediaQuery,
  useTheme,
  Chip
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleServiceClick = (service: string) => {
    if (selectedServices.includes(service)) {
      onServiceChange(selectedServices.filter(s => s !== service));
    } else {
      onServiceChange([...selectedServices, service]);
    }
  };

  const handleClientTypeClick = (clientType: string) => {
    if (selectedClientTypes.includes(clientType)) {
      onClientTypeChange(selectedClientTypes.filter(c => c !== clientType));
    } else {
      onClientTypeChange([...selectedClientTypes, clientType]);
    }
  };

  const hasActiveFilters = selectedServices.length > 0 || selectedClientTypes.length > 0;
  const totalActiveFilters = selectedServices.length + selectedClientTypes.length;

  // Desktop View
  const DesktopFilters = () => (
    <Box sx={{ mb: 6, mt: 4 }}>
      {/* Filter Header */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        mb: 4 
      }}>
        <Typography variant="h3" component="h2" color="primary" fontWeight={700}>
          Projects
        </Typography>
        
        {hasActiveFilters && (
          <Button
            variant="text"
            color="primary"
            size="small"
            startIcon={<ClearIcon sx={{ fontSize: '1rem' }} />}
            onClick={onClearFilters}
            sx={{
              borderRadius: 2,
              px: 2,
              py: 0.5,
              fontWeight: 500,
              textTransform: 'none',
              fontSize: '0.875rem',
              minHeight: 32,
              color: 'text.secondary',
              border: '1px solid rgba(0, 0, 0, 0.12)',
              '&:hover': {
                backgroundColor: 'rgba(30, 67, 136, 0.04)',
                color: 'primary.main',
                borderColor: 'rgba(30, 67, 136, 0.2)'
              }
            }}
          >
            Clear All ({totalActiveFilters})
          </Button>
        )}
      </Box>

      {/* Services Section */}
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h6" 
          gutterBottom 
          fontWeight={600}
          sx={{ mb: 2, color: 'text.primary' }}
        >
          Filters
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
          {SERVICE_TAGS.map((service) => (
            <Button
              key={service}
              variant={selectedServices.includes(service) ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleServiceClick(service)}
              sx={{
                borderRadius: 3,
                px: 3,
                py: 1,
                fontWeight: 500,
                textTransform: 'none',
                fontSize: '0.875rem',
                border: '2px solid',
                borderColor: selectedServices.includes(service) 
                  ? 'primary.main' 
                  : 'rgba(30, 67, 136, 0.3)',
                backgroundColor: selectedServices.includes(service)
                  ? 'primary.main'
                  : 'transparent',
                color: selectedServices.includes(service)
                  ? 'white'
                  : 'primary.main',
                '&:hover': {
                  backgroundColor: selectedServices.includes(service)
                    ? 'primary.dark'
                    : 'rgba(30, 67, 136, 0.08)',
                  borderColor: 'primary.main',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px rgba(30, 67, 136, 0.2)'
                },
                transition: 'all 0.2s ease-in-out'
              }}
            >
              {service}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Client Types Section */}
      <Box sx={{ mb: 2, display: 'none' }}>
        <Typography 
          variant="h6" 
          gutterBottom 
          fontWeight={600}
          sx={{ mb: 2, color: 'text.primary' }}
        >
          Client Types
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
          {CLIENT_TYPES.map((clientType) => (
            <Button
              key={clientType}
              variant={selectedClientTypes.includes(clientType) ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleClientTypeClick(clientType)}
              sx={{
                borderRadius: 3,
                px: 3,
                py: 1,
                fontWeight: 500,
                textTransform: 'none',
                fontSize: '0.875rem',
                border: '2px solid',
                borderColor: selectedClientTypes.includes(clientType) 
                  ? 'primary.main' 
                  : 'rgba(30, 67, 136, 0.3)',
                backgroundColor: selectedClientTypes.includes(clientType)
                  ? 'primary.main'
                  : 'transparent',
                color: selectedClientTypes.includes(clientType)
                  ? 'white'
                  : 'primary.main',
                '&:hover': {
                  backgroundColor: selectedClientTypes.includes(clientType)
                    ? 'primary.dark'
                    : 'rgba(30, 67, 136, 0.08)',
                  borderColor: 'primary.main',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px rgba(30, 67, 136, 0.2)'
                },
                transition: 'all 0.2s ease-in-out'
              }}
            >
              {clientType}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );

  // Handle combined filter changes for mobile
  const handleMobileCombinedChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    const selectedValues = typeof value === 'string' ? value.split(',') : value;
    
    // Separate services and client types
    const services = selectedValues.filter(v => SERVICE_TAGS.includes(v as typeof SERVICE_TAGS[number]));
    const clientTypes = selectedValues.filter(v => CLIENT_TYPES.includes(v as typeof CLIENT_TYPES[number]));
    
    onServiceChange(services);
    onClientTypeChange(clientTypes);
  };

  // Get combined values for mobile dropdown
  const getCombinedValues = () => {
    return [...selectedServices, ...selectedClientTypes];
  };

  // Mobile View
  const MobileFilters = () => (
    <Box sx={{ mb: 4, mt: 4 }}>
      {/* Filter Header */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        mb: 3 
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FilterListIcon color="primary" />
          <Typography variant="h5" component="h2" color="primary" fontWeight={600}>
            Filters
          </Typography>
          {hasActiveFilters && (
            <Chip 
              label={totalActiveFilters} 
              size="small" 
              color="primary"
              sx={{ 
                minWidth: 24,
                height: 20,
                fontSize: '0.75rem',
                fontWeight: 600
              }}
            />
          )}
        </Box>
        
        {hasActiveFilters && (
          <Button
            variant="text"
            color="primary"
            size="small"
            onClick={onClearFilters}
            sx={{
              fontWeight: 500,
              textTransform: 'none',
              minWidth: 'auto',
              px: 2,
              py: 0.5,
              fontSize: '0.875rem',
              color: 'text.secondary',
              border: '1px solid rgba(0, 0, 0, 0.12)',
              borderRadius: 1.5,
              '&:hover': {
                backgroundColor: 'rgba(30, 67, 136, 0.04)',
                color: 'primary.main',
                borderColor: 'rgba(30, 67, 136, 0.2)'
              }
            }}
          >
            Clear All
          </Button>
        )}
      </Box>

      {/* Combined Filters Dropdown */}
      <Box sx={{ mb: 2 }}>
        <FormControl fullWidth size="medium">
          <InputLabel>Filter Projects</InputLabel>
          <Select
            multiple
            value={getCombinedValues()}
            onChange={handleMobileCombinedChange}
            label="Filter Projects"
            renderValue={(selected) => {
              if (selected.length === 0) {
                return (
                  <Typography variant="body2" color="text.secondary">
                    Select filters...
                  </Typography>
                );
              }
              return selected.join(', ');
            }}
            sx={{
              borderRadius: 2,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              },
              '& .MuiPaper-root': {
                '& ul': {
                  listStyle: 'none !important',
                  '& li': {
                    listStyle: 'none !important',
                    position: 'relative',
                    '&::before': {
                      display: 'none !important',
                      backgroundImage: 'none !important'
                    }
                  }
                }
              },
              '& .MuiMenuItem-root': {
                listStyle: 'none !important',
                position: 'relative',
                '&::before': {
                  display: 'none !important',
                  backgroundImage: 'none !important'
                }
              },
              '& .MuiList-root': {
                listStyle: 'none !important',
                '& li': {
                  listStyle: 'none !important',
                  position: 'relative',
                  '&::before': {
                    display: 'none !important',
                    backgroundImage: 'none !important'
                  }
                }
              }
            }}
          >
            {/* Services Section */}
            <MenuItem disabled className="no-bullets">
              <Typography variant="subtitle2" fontWeight={600} color="primary">
                Services
              </Typography>
            </MenuItem>
            {SERVICE_TAGS.map((service) => (
              <MenuItem key={service} value={service} className="no-bullets" sx={{ pl: 3 }}>
                {service}
              </MenuItem>
            ))}
            
            {/* Client Types Section */}
            <MenuItem disabled className="no-bullets">
              <Typography variant="subtitle2" fontWeight={600} color="primary" sx={{ mt: 1 }}>
                Client Types
              </Typography>
            </MenuItem>
            {CLIENT_TYPES.map((clientType) => (
              <MenuItem key={clientType} value={clientType} className="no-bullets" sx={{ pl: 3 }}>
                {clientType}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );

  return isMobile ? <MobileFilters /> : <DesktopFilters />;
};

export default ProjectFilters;
