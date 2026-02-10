import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Box, 
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact Us', path: '/contact' },
];

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const location = useLocation();

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1, backgroundColor: '#1e4388' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo and Brand Name */}
          <Box 
            component={RouterLink}
            to="/"
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            textDecoration: 'none',
            color: 'white',
            flexGrow: isMobile ? 1 : 0,
          gap: .75
            }}
          >
            <Box
              component="img"
              src="/images/icons/liffey-drop-white.svg"
              alt="Liffey Mechanical Logo"
              sx={{
                width: '32px',
                height: '32px',
                flexShrink: 0
              }}
            />
            <Typography
              variant="h4"
              component="div"
              sx={{ 
                fontWeight: 700, 
                letterSpacing: '0.02em',
                textTransform: 'uppercase' 
              }}
            >
              LIFFEY MECHANICAL
            </Typography>
          </Box>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box sx={{ marginLeft: 'auto', display: 'flex' }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={RouterLink}
                  to={item.path}
                  sx={{ 
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: isActivePage(item.path) ? 700 : 500,
                    position: 'relative',
                    mx: 0.5,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    textTransform: 'none',
                    transition: 'all 0.3s ease-in-out',
                    backgroundColor: isActivePage(item.path) 
                      ? 'rgba(255, 255, 255, 0.15)' 
                      : 'transparent',
                    '&:hover': {
                      backgroundColor: isActivePage(item.path)
                        ? 'rgba(255, 255, 255, 0.25)'
                        : 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateY(-1px)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                    }
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}

          {/* Mobile Nav */}
          {isMobile && (
            <>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="Open navigation menu"
                aria-controls={anchorEl ? 'navigation-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={anchorEl ? 'true' : undefined}
                onClick={handleOpenMenu}
                sx={{ ml: 'auto' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="navigation-menu"
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={handleCloseMenu}
                MenuListProps={{
                  'aria-labelledby': 'navigation-menu',
                }}
                sx={{ mt: '45px' }}
              >
                {navItems.map((item) => (
                  <MenuItem 
                    key={item.name} 
                    component={RouterLink} 
                    to={item.path}
                    onClick={handleCloseMenu}
                    sx={{
                      backgroundColor: isActivePage(item.path) ? 'rgba(30, 67, 136, 0.08)' : 'transparent',
                      borderRadius: 1,
                      mx: 1,
                      my: 0.5,
                      transition: 'all 0.2s ease-in-out',
                      border: isActivePage(item.path) ? '1px solid rgba(30, 67, 136, 0.2)' : '1px solid transparent',
                      '&:hover': {
                        backgroundColor: isActivePage(item.path) 
                          ? 'rgba(30, 67, 136, 0.12)' 
                          : 'rgba(30, 67, 136, 0.04)',
                        borderColor: 'rgba(30, 67, 136, 0.2)',
                        transform: 'translateX(4px)'
                      }
                    }}
                  >
                    <Typography 
                      textAlign="center"
                      sx={{ 
                        fontWeight: isActivePage(item.path) ? 600 : 400,
                        color: isActivePage(item.path) ? 'primary.main' : 'inherit',
                        fontSize: '0.95rem',
                        transition: 'color 0.2s ease-in-out'
                      }}
                    >
                      {item.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;