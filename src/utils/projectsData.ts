import { Project } from '../types';

export const SERVICE_TAGS = [
  'HVAC & Refrigeration',
  'Plumbing',
  'Sheet Metal',
  'Hydronic Heating',
  'Mechanical Wiring',
  'Snow Melt'
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
  id: 7,
  title: 'Walmart Distribution Center',
  description: 'This recent 107,000 square-foot project in Oakville, Ontario showcased Liffey’s mechanical expertise. Featuring full interior fit-out, new rooftop gas piping, under- and above-ground plumbing, installation of RTUs, and supply of new duct work and HVAC equipment, Walmart\'s new Distribution Centre is a testament to the range of Liffey’s skills and workmanship.',
  location: 'Brampton, Ontario',
  imageUrl: '/images/Hero1.jpg',
  industry: 'Retail',
  services: ['HVAC & Refrigeration', 'Plumbing', 'Sheet Metal'],
  clientType: 'Retail'
};

export const PROJECTS_BY_CATEGORY: Record<string, Project[]> = {
  'Financial Services': [
    {
      id: 2,
      title: 'TD Bank',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
      location: 'Downtown Toronto, Ontario',
      imageUrl: '/images/Projects/td-bank-branch.jpg',
      industry: 'Banking',
      services: ['HVAC & Refrigeration', 'Mechanical Wiring'],
      clientType: 'Financial'
    },
    {
      id: 3,
      title: 'BMO',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris blandit aliquet elit.',
      location: 'Mississauga, Ontario',
      imageUrl: '/images/Projects/bmo-financial-branch.jpg',
      industry: 'Banking',
      services: ['HVAC & Refrigeration', 'Plumbing', 'Mechanical Wiring'],
      clientType: 'Financial'
    },
    {
      id: 4,
      title: 'CIBC',
      description: 'Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
      location: 'North York, Ontario',
      imageUrl: '/images/Projects/cibc-corporate-centre.jpg',
      industry: 'Banking',
      services: ['HVAC & Refrigeration', 'Plumbing', 'Sheet Metal'],
      clientType: 'Financial'
    },
    {
      id: 5,
      title: 'RBC',
      description: 'Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta.',
      location: 'Etobicoke, Ontario',
      imageUrl: '/images/Projects/rbc-branch-interior.jpg',
      industry: 'Banking',
      services: ['HVAC & Refrigeration', 'Plumbing'],
      clientType: 'Financial'
    },
    {
      id: 6,
      title: 'Scotiabank',
      description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec velit neque, auctor sit amet.',
      location: 'Financial District, Toronto',
      imageUrl: '/images/Projects/Scotiabank.jpg',
      industry: 'Banking',
      services: ['HVAC & Refrigeration', 'Mechanical Wiring'],
      clientType: 'Financial'
    }
  ],
  'Retail & Commercial': [
    {
      id: 1,
      title: 'Jack Nathan Health Centres',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      location: 'Toronto, Ontario',
      imageUrl: '/images/Projects/Jack-Nathan-Health.jpeg',
      industry: 'Healthcare Facilities',
      services: ['HVAC & Refrigeration', 'Plumbing', 'Mechanical Wiring'],
      clientType: 'Healthcare'
    }
  ],
  'Food Service & Hospitality': [
    {
      id: 8,
      title: 'A&W Restaurants',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla.',
      location: 'Markham, Ontario',
      imageUrl: '/images/aw-restaurant-exterior.jpg',
      industry: 'Restaurant',
      services: ['HVAC & Refrigeration', 'Plumbing', 'Sheet Metal'],
      clientType: 'Hospitality'
    },
    {
      id: 9,
      title: 'Pizza Hut',
      description: 'Consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra.',
      location: 'Scarborough, Ontario',
      imageUrl: '/images/Projects/PizzaHut.jpeg',
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
      location: 'King Street West, Toronto',
      imageUrl: '/images/isabelles-nightclub.jpg',
      industry: 'Entertainment',
      services: ['HVAC & Refrigeration', 'Mechanical Wiring'],
      clientType: 'Entertainment'
    },
    {
      id: 11,
      title: 'Ballroom Bowl',
      description: 'Sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus.',
      location: 'Richmond Hill, Ontario',
      imageUrl: '/images/ballroom-bowl-facility.jpg',
      industry: 'Entertainment',
      services: ['HVAC & Refrigeration', 'Plumbing', 'Sheet Metal'],
      clientType: 'Entertainment'
    }
  ]
};

export const ALL_PROJECTS: Project[] = [
  FEATURED_PROJECT,
  ...Object.values(PROJECTS_BY_CATEGORY).flat()
];
