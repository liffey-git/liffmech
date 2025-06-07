import emailjs from '@emailjs/browser';

/**
 * Email.js Configuration Guide
 * 
 * 1. Sign up for a free account at https://www.emailjs.com/
 * 2. Create a new Email Service (Gmail, Outlook, etc.)
 * 3. Create an Email Template with variables like:
 *    - {{to_name}}       (Recipient's name - usually your company name)
 *    - {{from_name}}     (Sender's name)
 *    - {{from_email}}    (Sender's email)
 *    - {{from_phone}}    (Sender's phone)
 *    - {{from_company}}  (Sender's company if applicable)
 *    - {{message}}       (The message content)
 * 4. Get your Service ID, Template ID, and User ID
 * 5. Replace the placeholder constants below with your actual values
 */

// Replace these with your actual Email.js credentials when setting up
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const USER_ID = 'YOUR_USER_ID';

// Add index signature to make compatible with emailjs
export interface EmailParams {
  to_name: string;
  from_name: string;
  from_email: string;
  from_phone?: string;
  from_company?: string;
  message: string;
  [key: string]: unknown; // Add this index signature to resolve TypeScript error
}

/**
 * Sends an email using Email.js
 * @param params - Email parameters
 * @returns Promise resolving to the Email.js response
 */
export const sendEmail = async (params: EmailParams) => {
  try {
    // Initialize Email.js with your user ID
    emailjs.init(USER_ID);
    
    // Send the email
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params);
    
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};