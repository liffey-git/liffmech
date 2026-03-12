

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
export const logError = (error: Error, context?: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(`[${context || 'Unknown'}] Error:`, error);
  }
};
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
      case 'EMAIL_SERVICE_NOT_CONFIGURED':
        return 'Contact form email is not configured yet. Please call or email us directly for now.';
      case 'VALIDATION_ERROR':
        return 'Please check your input and try again.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  }
  
  return 'Something went wrong. Please try again.';
};
export const useErrorHandler = () => {
  const handleError = (error: Error, context?: string) => {
    logError(error, context);
  };

  return { handleError, getUserFriendlyMessage };
};
