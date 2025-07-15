// Common TypeScript types used across the application

export interface Service {
  id: number;
  title: string;
  path: string;
  imageUrl: string;
  logoUrl: string;
}

export interface Project {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  industry: string;
  services: string[]; // Service tags from service categories
  clientType: 'Healthcare' | 'Financial' | 'Retail' | 'Entertainment' | 'Hospitality' | 'Industrial' | 'Commercial';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  company: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export interface ServiceCategory {
  id: number;
  title: string;
  description: string;
  items: string[];
  imageUrl: string;
  carouselImages: string[];
}
