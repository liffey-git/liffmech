

import { SxProps, Theme } from '@mui/material';
export const colors = {
  primary: '#1e4388',
  primaryLight: '#2c5aa0',
  primaryDark: '#164080',
  white: '#ffffff',
  lightGray: '#fafafa',
  gray: '#f5f5f5',
  darkGray: '#333333',
  textSecondary: '#666666',
  borderLight: '#e0e0e0',
  shadowLight: 'rgba(0,0,0,0.1)',
  shadowMedium: 'rgba(0,0,0,0.12)',
  shadowDark: 'rgba(0,0,0,0.15)',
  shadowHeavy: 'rgba(0,0,0,0.3)'
} as const;
export const typography = {
  weights: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700
  },
  sizes: {
    caption: '0.7rem',
    small: '0.875rem',
    body: '1rem',
    bodyLarge: '1.1rem',
    subtitle: '1.125rem',
    h6: '1.25rem',
    h5: '1.5rem',
    h4: '1.75rem',
    h3: '2rem',
    h2: '2.5rem',
    h1: '3rem'
  }
} as const;
export const spacing = {
  xs: 0.5, // 4px
  sm: 1,   // 8px
  md: 2,   // 16px
  lg: 3,   // 24px
  xl: 4,   // 32px
  xxl: 6,  // 48px
  xxxl: 8  // 64px
} as const;
export const borderRadius = {
  small: 1,  // 8px
  medium: 2, // 16px
  large: 3   // 24px
} as const;
export const shadows = {
  light: '0 2px 8px rgba(0,0,0,0.1)',
  medium: '0 4px 12px rgba(0,0,0,0.1)', 
  elevated: '0 8px 24px rgba(0,0,0,0.12)',
  floating: '0 8px 24px rgba(0,0,0,0.15)',
  modal: '0 24px 48px rgba(0,0,0,0.3)'
} as const;
export const layout = {
  maxWidth: {
    xs: '100%',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px'
  },
  containerPadding: {
    vertical: { xs: 8, md: 14 }, // 64px mobile, 112px desktop
    section: { xs: 10, md: 20 }   // 80px mobile, 160px desktop
  }
} as const;
export const componentStyles = {
  pageTitle: {
    variant: 'h1' as const,
    component: 'h1' as const,
    align: 'center' as const,
    gutterBottom: true,
    color: 'primary',
    fontWeight: typography.weights.semiBold,
    sx: { mb: 2 }
  },
  sectionTitle: {
    variant: 'h2' as const,
    component: 'h2' as const,
    align: 'center' as const,
    gutterBottom: true,
    color: 'primary',
    fontWeight: typography.weights.semiBold,
    sx: { mb: 4 }
  },
  subsectionTitle: {
    variant: 'h3' as const,
    component: 'h3' as const,
    gutterBottom: true,
    color: 'primary',
    fontWeight: typography.weights.semiBold
  },
  card: {
    borderRadius: borderRadius.medium,
    boxShadow: shadows.medium,
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: shadows.floating,
      transform: 'translateY(-4px)'
    }
  } as SxProps<Theme>,
  featuredCard: {
    borderRadius: borderRadius.large,
    boxShadow: shadows.elevated
  } as SxProps<Theme>,
  primaryButton: {
    px: 4,
    py: 1.5,
    bgcolor: colors.primary,
    color: 'white',
    borderRadius: borderRadius.small,
    fontWeight: typography.weights.medium,
    textDecoration: 'none',
    '&:hover': {
      bgcolor: colors.primaryLight
    }
  } as SxProps<Theme>,
  chip: {
    fontSize: typography.sizes.caption,
    height: '24px',
    color: colors.primary,
    borderColor: colors.primary,
    '&:hover': {
      backgroundColor: colors.primaryLight,
      color: 'white'
    }
  } as SxProps<Theme>,
  imageContainer: {
    borderRadius: borderRadius.medium,
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const
    }
  } as SxProps<Theme>,
  section: {
    py: layout.containerPadding.vertical,
    backgroundColor: colors.white
  } as SxProps<Theme>,

  sectionAlternate: {
    py: layout.containerPadding.vertical,
    backgroundColor: colors.lightGray
  } as SxProps<Theme>
};
export const gridLayouts = {
  threeColumn: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)'
    },
    gap: spacing.lg
  } as SxProps<Theme>,
  twoColumn: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: spacing.xl,
    alignItems: 'flex-start'
  } as SxProps<Theme>,
  featuredLayout: {
    display: 'flex',
    flexDirection: { xs: 'column', lg: 'row' } as 'column' | 'row' | { xs: 'column'; lg: 'row' },
    gap: { xs: spacing.lg, lg: spacing.xl },
    alignItems: { xs: 'center', lg: 'flex-start' }
  } as SxProps<Theme>
};
export const responsive = {
  contentWidth: {
    xs: '100%',
    sm: 'calc(50% - 16px)',
    md: 'calc(33.333% - 16px)',
    lg: 'calc(25% - 18px)'
  },
  featuredWidth: {
    xs: '100%',
    lg: '60%'
  },

  featuredSideWidth: {
    xs: '100%', 
    lg: '40%'
  }
};

export default {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  layout,
  componentStyles,
  gridLayouts,
  responsive
};
