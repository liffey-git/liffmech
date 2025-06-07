import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';
import emailjs from '@emailjs/browser';
import { ContactFormData, ContactFormErrors } from '../../types';
import { useErrorHandler, ValidationError, ApiError } from '../../utils/errorHandling';

// Replace these with your actual Email.js credentials when setting up
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const USER_ID = 'YOUR_USER_ID';

// Update EmailParams interface to include index signature for compatibility
interface EmailParams extends Record<string, unknown> {
  to_name: string;
  from_name: string;
  from_email: string;
  from_phone?: string;
  from_company?: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { handleError, getUserFriendlyMessage } = useErrorHandler();
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    company: ''
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));    // Clear error when field is edited
    if (errors[name as keyof ContactFormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    // Phone validation
    if (formData.phone && !/^[0-9+\-() ]{10,15}$/i.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message is too short';
      isValid = false;
    }

    setErrors(newErrors);
    
    if (!isValid) {
      throw new ValidationError('Please correct the errors in the form', 'form');
    }
    
    return isValid;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      validateForm();
    } catch (error) {
      if (error instanceof ValidationError) {
        // Validation errors are already set in state, just return
        return;
      }
    }

    setIsSubmitting(true);

    try {
      // Prepare email template parameters
      const templateParams: EmailParams = {
        to_name: 'Liffey Mechanical',
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        from_company: formData.company || 'Not provided',
        message: formData.message
      };

      // Send email using Email.js
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);

      // Show success message
      setSnackbar({
        open: true,
        message: 'Thank you! Your message has been sent successfully.',
        severity: 'success'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        company: ''
      });
    } catch (error) {
      const apiError = new ApiError(
        'Failed to send message',
        'EMAIL_SEND_FAILED',
        error instanceof Error ? error.message : 'Unknown error'
      );
      
      handleError(apiError, 'ContactForm.handleSubmit');
      
      setSnackbar({
        open: true,
        message: getUserFriendlyMessage(apiError),
        severity: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({
      ...prev,
      open: false
    }));
  };

  return (
    <Paper 
      elevation={0} 
      sx={{ 
        p: { xs: 3, md: 4 }, 
        borderRadius: 2, 
        backgroundColor: '#f8f9fa',
        border: '1px solid #e0e0e0'
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        Get In Touch
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Fill out the form below, and we&apos;ll get back to you as soon as possible.
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 2 
        }}>
          <Box sx={{ 
            width: { 
              xs: '100%', 
              sm: 'calc(50% - 8px)'
            } 
          }}>
            <TextField
              required
              fullWidth
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              variant="outlined"
              margin="normal"
              disabled={isSubmitting}
            />
          </Box>
          <Box sx={{ 
            width: { 
              xs: '100%', 
              sm: 'calc(50% - 8px)'
            } 
          }}>
            <TextField
              required
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              variant="outlined"
              margin="normal"
              disabled={isSubmitting}
            />
          </Box>
          <Box sx={{ 
            width: { 
              xs: '100%', 
              sm: 'calc(50% - 8px)'
            } 
          }}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
              variant="outlined"
              margin="normal"
              disabled={isSubmitting}
            />
          </Box>
          <Box sx={{ 
            width: { 
              xs: '100%', 
              sm: 'calc(50% - 8px)'
            } 
          }}>
            <TextField
              fullWidth
              label="Company (Optional)"
              name="company"
              value={formData.company}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              disabled={isSubmitting}
            />
          </Box>
          <Box sx={{ width: '100%' }}>
            <TextField
              required
              fullWidth
              label="Your Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              variant="outlined"
              margin="normal"
              disabled={isSubmitting}
            />
          </Box>
          <Box sx={{ width: '100%' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={isSubmitting}
              sx={{ mt: 2, px: 4, py: 1 }}
            >
              {isSubmitting ? (
                <>
                  <CircularProgress size={24} color="inherit" sx={{ mr: 1 }} />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default ContactForm;