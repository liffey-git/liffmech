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
    title: 'HVAC and Refrigeration',
    description: 'Liffey offers comprehensive HVAC and refrigeration services, from conception and design to construction and installation. We test and calibrate our systems to ensure the highest level of quality control, and we also service systems that we install for their entire lifespans. We provide:',
    items: [
      'VRF system installations ',
      'boiler installs, repairs, and tear downs ',
      'makeup air unit installs',
      'air handling unit replacements and rebuilds',
      'steam humidifiers',
      'air compressor venting and piping',
      'steam generators',
      'unit heaters',
      'radiant heaters',
      'high-pressure gas pipes and PRVs',
      'local control wiring',
      'gas detection systems (including CO/CO2, flammable vapor, and refrigerant)',
      'semi-hermetic compressors teardowns/rebuilds',
      'grease ducting',
      'flue venting',
      'industrial ventilation and ductwork'
    ],
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
    description: 'From designing new systems to retrofitting existing ones, we are able to provide full electrical services for every type of wiring project. We are skilled in developing tailored lighting installations, conducting energy efficiency audits, and providing green energy alternatives. Our expertise covers:',
    items: [
      'wiring and controls for HVAC, VRF, boilers and building automation',
      'retrofits and upgrades for lighting and other electrical service',
      'heat tracing and snow melt systems',
      'data centre wiring',
      'system and equipment maintenance'
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
