// Error handling utilities for consistent error management across the application

export interface AppError {
  message: string;
  code?: string;
  details?: string;
}

export class ApiError extends Error {
  public code: string;
  public details?: string;

  constructor(message: string, code = 'UNKNOWN_ERROR', details?: string) {
    super(message);
    this.name = 'ApiError';
    this.code = code;
    this.details = details;
  }
}

export class ValidationError extends Error {
  public field: string;

  constructor(message: string, field: string) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

// Error logging utility
export const logError = (error: Error, context?: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(`[${context || 'Unknown'}] Error:`, error);
  }
  
  // In production, you would send this to a logging service
  // Example: sendToLoggingService(error, context);
};

// Helper function to create user-friendly error messages
export const getUserFriendlyMessage = (error: Error): string => {
  if (error instanceof ValidationError) {
    return error.message;
  }
  
  if (error instanceof ApiError) {
    switch (error.code) {
      case 'NETWORK_ERROR':
        return 'Unable to connect to our servers. Please check your internet connection and try again.';
      case 'EMAIL_SEND_FAILED':
        return 'Failed to send email. Please try again or contact us directly.';
      case 'VALIDATION_ERROR':
        return 'Please check your input and try again.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  }
  
  return 'Something went wrong. Please try again.';
};

// Error boundary hook for functional components
export const useErrorHandler = () => {
  const handleError = (error: Error, context?: string) => {
    logError(error, context);
    // You could also dispatch to a global error state or show a toast notification
  };

  return { handleError, getUserFriendlyMessage };
};
