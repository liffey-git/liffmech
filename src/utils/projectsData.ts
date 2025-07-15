import { Project } from '../types';

// Service tags that match our service categories
export const SERVICE_TAGS = [
  'HVAC & Refrigeration',
  'Plumbing',
  'Sheet Metal',
  'Hydronic Heating',
  'Mechanical Wiring'
] as const;

export const CLIENT_TYPES = [
  'Healthcare',
  'Financial',
  'Retail', 
  'Entertainment',
  'Hospitality',
  'Industrial',
  'Commercial'
] as const;

export const FEATURED_PROJECT: Project = {
  id: 1,
  title: 'Jack Nathan Health Centres',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  imageUrl: '/images/IMG_8967.jpg',
  industry: 'Healthcare Facilities',
  services: ['HVAC & Refrigeration', 'Plumbing', 'Mechanical Wiring'],
  clientType: 'Healthcare'
};

export const PROJECTS_BY_CATEGORY: Record<string, Project[]> = {
  'Financial Services': [
    {
      id: 2,
      title: 'TD Bank',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
      imageUrl: '/images/IMG_8944.jpg',
      industry: 'Banking',
      services: ['HVAC & Refrigeration', 'Mechanical Wiring'],
      clientType: 'Financial'
    },
    {
      id: 3,
      title: 'BMO Financial',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris blandit aliquet elit.',
      imageUrl: '/images/IMG_8961.jpg',
      industry: 'Banking',
      services: ['HVAC & Refrigeration', 'Plumbing', 'Mechanical Wiring'],
      clientType: 'Financial'
    },
    {
      id: 4,
      title: 'CIBC Corporate Centre',
      description: 'Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
      imageUrl: '/images/IMG_3877.JPG',
      industry: 'Banking',
      services: ['HVAC & Refrigeration', 'Plumbing', 'Sheet Metal'],
      clientType: 'Financial'
    },
    {
      id: 5,
      title: 'RBC Branch',
      description: 'Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta.',
      imageUrl: '/images/IMG_9072.jpg',
      industry: 'Banking',
      services: ['HVAC & Refrigeration', 'Plumbing'],
      clientType: 'Financial'
    },
    {
      id: 6,
      title: 'Scotiabank Plaza',
      description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec velit neque, auctor sit amet.',
      imageUrl: '/images/IMG_4160.JPG',
      industry: 'Banking',
      services: ['HVAC & Refrigeration', 'Mechanical Wiring'],
      clientType: 'Financial'
    }
  ],
  'Retail & Commercial': [
    {
      id: 7,
      title: 'Walmart Distribution Center',
      description: 'Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis.',
      imageUrl: '/images/IMG_3910.JPG',
      industry: 'Retail',
      services: ['HVAC & Refrigeration', 'Plumbing', 'Sheet Metal'],
      clientType: 'Retail'
    }
  ],
  'Food Service & Hospitality': [
    {
      id: 8,
      title: 'A&W Restaurant',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla.',
      imageUrl: '/images/IMG_8146.jpg',
      industry: 'Restaurant',
      services: ['HVAC & Refrigeration', 'Plumbing', 'Sheet Metal'],
      clientType: 'Hospitality'
    },
    {
      id: 9,
      title: 'Pizza Hut',
      description: 'Consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra.',
      imageUrl: '/images/IMG_4199.JPG',
      industry: 'Restaurant',
      services: ['HVAC & Refrigeration', 'Sheet Metal'],
      clientType: 'Hospitality'
    }
  ],
  'Entertainment & Recreation': [
    {
      id: 10,
      title: 'Isabelle\'s Nightclub',
      description: 'Aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices.',
      imageUrl: '/images/IMG_8923.jpg',
      industry: 'Entertainment',
      services: ['HVAC & Refrigeration', 'Mechanical Wiring'],
      clientType: 'Entertainment'
    },
    {
      id: 11,
      title: 'Ballroom Bowl',
      description: 'Sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus.',
      imageUrl: '/images/IMG_8837.JPG',
      industry: 'Entertainment',
      services: ['HVAC & Refrigeration', 'Plumbing', 'Sheet Metal'],
      clientType: 'Entertainment'
    }
  ]
};

// Flattened array of all projects for filtering
export const ALL_PROJECTS: Project[] = [
  FEATURED_PROJECT,
  ...Object.values(PROJECTS_BY_CATEGORY).flat()
];
