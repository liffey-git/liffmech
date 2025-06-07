// Application constants
import { Service, ServiceCategory } from '../types';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'HVAC & Refrigeration',
    path: '/services?tab=0',
    imageUrl: '/images/IMG_Ref.jpg',
    logoUrl: '/images/icons/ServiceLogo.svg'
  },
  {
    id: 2,
    title: 'Plumbing',
    path: '/services?tab=1',
    imageUrl: '/images/IMG_Pipes.jpg',
    logoUrl: '/images/icons/ServiceLogo.svg'
  },
  {
    id: 3,
    title: 'Sheet Metal',
    path: '/services?tab=2',
    imageUrl: '/images/IMG_SheetM.jpg',
    logoUrl: '/images/icons/ServiceLogo.svg'
  },
  {
    id: 4,
    title: 'Hydronic Heating',
    path: '/services?tab=3',
    imageUrl: '/images/IMG_AC.jpg',
    logoUrl: '/images/icons/ServiceLogo.svg'
  },
  {
    id: 5,
    title: 'Mechanical Wiring',
    path: '/services?tab=4',
    imageUrl: '/images/IMG_Draft.jpg',
    logoUrl: '/images/icons/ServiceLogo.svg'
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 1,
    title: 'HVAC & Refrigeration',
    description: 'We offer comprehensive HVAC & refrigeration services for commercial, institutional, and industrial applications. Our team of skilled technicians provides expert installation, maintenance, and repair services to ensure optimal performance and energy efficiency.',
    items: [
      'Commercial HVAC systems',
      'Industrial refrigeration',
      'Heat pumps and chillers',
      'Air handling units',
      'Ventilation systems',
      'Energy efficiency upgrades',
      'Preventative maintenance programs'    ],
    imageUrl: '/images/IMG_Ref.jpg'
  },
  {
    id: 2,
    title: 'Plumbing',
    description: 'Our licensed plumbers provide full-service plumbing solutions for new construction, renovations, and emergency repairs. We specialize in commercial and institutional plumbing systems with a focus on reliability and code compliance.',
    items: [
      'Commercial plumbing systems',
      'Water supply and distribution',
      'Sanitary and storm drainage',
      'Fixture installation',
      'Backflow prevention',
      'Emergency repairs',
      'Code compliance upgrades'
    ],
    imageUrl: '/images/IMG_Pipes.jpg'
  },
  {
    id: 3,
    title: 'Sheet Metal',
    description: 'Our sheet metal specialists provide custom fabrication and installation services for HVAC ductwork and specialty applications. We combine traditional craftsmanship with modern techniques to deliver precise, durable solutions.',
    items: [
      'Custom ductwork fabrication',
      'HVAC ductwork installation',
      'Heating and air conditioning',
      'Ductwork design and installation',
      'Exhaust systems',
      'Custom fabrication and design'
    ],
    imageUrl: '/images/IMG_SheetM.jpg'
  },
  {
    id: 4,
    title: 'Hydronic Heating',
    description: 'We are experts in hydronic heating, with a team of highly trained technicians who have years of experience in installations of snow-melt systems, in-floor heating, radiators, chilled water and heating, boilers, and more. Our signature is top-flight workmanship that maximizes efficiency for our clients—residential, commercial and industrial.',
    items: [
      'Boiler installations and replacements',
      'Snow-melt systems',
      'In-floor heating',
      'Radiators',
      'Chilled water and heating for commercial and Industrial projects',
      'Condensation lines',
      'Control wiring'
    ],
    imageUrl: '/images/IMG_AC.jpg'
  },
  {
    id: 5,
    title: 'Mechanical Wiring',
    description: 'We are a registered electrical contractor with a strong team of licensed electricians, able to provide full electrical and wiring services for the most complex projects. We can design new systems and retrofit existing ones, develop lighting installations to suit specific requirements, and provide energy efficiency audits and green energy alternatives.',
    items: [
      'HVAC mechanical wiring',
      'VRF system wiring and controls',
      'Building automation systems',
      'Boiler controls',
      'Electrical service upgrades',
      'Lighting retro fits and energy audits',
      'Heat trace and snow melt systems',
      'Data centre wiring',
      'Equipment maintenance'
    ],
    imageUrl: '/images/IMG_Draft.jpg'
  }
];

export const CONTACT_INFO = {
  offices: {
    ontario: {
      title: 'Ontario Office',
      street: '2488 Tree Valley Blvd West',
      city: 'City, Ontario',
      postalCode: 'Postal Code'
    },
    second: {
      title: 'Second Office',
      street: '2412 Happy Pond Street',
      city: 'City, Ontario',
      postalCode: 'Postal Code'
    }
  }
};

export const NAVIGATION_ITEMS = [
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact Us', path: '/contact' },
];
