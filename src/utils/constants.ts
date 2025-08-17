// Application constants
import { Service, ServiceCategory } from '../types';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'HVAC & Refrigeration',
    path: '/services?tab=0',
    imageUrl: '/images/IMG_8150.png',
    logoUrl: '/images/icons/ServiceLogo.svg'
  },
  {
    id: 2,
    title: 'Plumbing',
    path: '/services?tab=1',
    imageUrl: '/images/IMG_8874.jpg',
    logoUrl: '/images/icons/ServiceLogo.svg'
  },
  {
    id: 3,
    title: 'Sheet Metal',
    path: '/services?tab=2',
    imageUrl: '/images/IMG_3973.JPG',
    logoUrl: '/images/icons/ServiceLogo.svg'
  },
  {
    id: 4,
    title: 'Hydronic Heating',
    path: '/services?tab=3',
    imageUrl: '/images/IMG_8154.jpg',
    logoUrl: '/images/icons/ServiceLogo.svg'
  },
  {
    id: 5,
    title: 'Mechanical Wiring',
    path: '/services?tab=4',
    imageUrl: '/images/IMG_8178.jpg',
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
      'Makeup air unit installs',
      'Air handling unit replacements and rebuilds',
      'Steam humidifiers',
      'Air compressor venting and piping',
      'Steam generators',
      'Unit heaters and radiant heaters',
      'High-pressure gas pipes and PRVs',
      'Gas detection systems (including CO/CO2, flammable vapor, and refrigerant)',
      'Semi-hermetic compressors teardowns/rebuilds',
      'Grease ducting',
      'Flue venting',
      'Industrial ventilation and ductwork'
    ],
    imageUrl: '/images/IMG_8150.png',
    carouselImages: [
      '/images/IMG_8150.png',
      '/images/IMG_8156.jpg',
      '/images/IMG_8200.jpg'
    ]
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
    imageUrl: '/images/IMG_8874.jpg',
    carouselImages: [
      '/images/IMG_8874.jpg',
      '/images/IMG_8871.jpg',
      '/images/IMG_8883.jpg'
    ]
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
    imageUrl: '/images/IMG_3973.JPG',
    carouselImages: [
      '/images/IMG_3973.JPG',
      '/images/IMG_3972.JPG',
      '/images/IMG_4001.JPG'
    ]
  },
  {
    id: 4,
    title: 'Hydronic Heating',
    description: 'We are experts in hydronic heating, with a team of highly trained technicians who have years of experience in installations of snow-melt systems, in-floor heating, radiators, chilled water and heating, boilers, and more. Our signature is top-flight workmanship that maximizes efficiency for our clients—residential, commercial and industrial.',
    items: [
      'Boiler installations and replacements',
      'Boiler installs, repairs, and tear downs ',
      'Snow-melt systems',
      'In-floor heating',
      'Radiators',
      'Chilled water and heating for commercial and Industrial projects',
      'Condensation lines',
      'Control wiring'
    ],
    imageUrl: '/images/IMG_8154.jpg',
    carouselImages: [
      '/images/IMG_8154.jpg',
      '/images/IMG_8178.jpg',
      '/images/IMG_8179.jpg'
    ]
  },
  {
    id: 5,
    title: 'Mechanical Wiring',
    description: 'rom designing new systems to retrofitting existing ones, we add value by integrating electrical services into overall project planning and rollout. We are skilled in developing tailored lighting installations, conducting energy efficiency audits, and providing green energy alternatives. Our expertise covers: ',
    items: [
      'Wiring and controls for HVAC, VRF, boilers and building automation',
      'Heat tracing and snow melt systems',
      'Local control wiring',
      'Data centre wiring',
      'System and equipment maintenance'
    ],
    imageUrl: '/images/IMG_8178.jpg',
    carouselImages: [
      '/images/IMG_8178.jpg',
      '/images/IMG_8198.jpg',
      '/images/IMG_9072.jpg'
    ]
  },
    {
    id: 6,
    title: 'Snow Melt',
    description: 'Benefiting from a team of certified technicians with extensive experience in Canadian winters, Liffey is a partner you can trust for delivering snow-free parking and driveways. We have developed excellent relationships with manufacturers, and we draw on those relationships to stay abreast of the latest developments in snow-melt systems. With our knowledge of the most up-to-date technology, we can ensure you the optimal solution, from installation of loops to commissioning of systems.',
    items: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Sed tempor nisi sed imperdiet auctor',
      'Donec posuere nulla nec lectus molestie, non lacinia odio sodales'
    ],
    imageUrl: '/images/IMG_8178.jpg',
    carouselImages: [
      '/images/IMG_8178.jpg',
      '/images/IMG_8198.jpg',
      '/images/IMG_9072.jpg'
    ]
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
