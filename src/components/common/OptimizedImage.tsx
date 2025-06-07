import React, { useState, useCallback } from 'react';
import { Box, Skeleton } from '@mui/material';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  loading?: 'lazy' | 'eager';
  showLoadingState?: boolean;
  sx?: object;
}

const OptimizedImage: React.FC<OptimizedImageProps> = React.memo(({
  src,
  alt,
  width = '100%',
  height = 'auto',
  borderRadius = 0,
  objectFit = 'cover',
  loading = 'lazy',
  showLoadingState = true,
  sx = {},
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  if (hasError) {
    return (
      <Box
        sx={{
          width,
          height: height === 'auto' ? 200 : height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
          borderRadius,
          color: '#999',
          ...sx,
        }}
      >
        Failed to load image
      </Box>
    );
  }

  return (
    <Box sx={{ position: 'relative', width, height, ...sx }}>
      {isLoading && showLoadingState && (
        <Skeleton
          variant="rectangular"
          width={width}
          height={height === 'auto' ? 200 : height}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            borderRadius,
          }}
        />
      )}
      <Box
        component="img"
        src={src}
        alt={alt}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        sx={{
          width,
          height,
          objectFit,
          borderRadius,
          display: isLoading ? 'none' : 'block',
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
    </Box>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
