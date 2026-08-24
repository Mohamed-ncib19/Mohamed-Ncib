export const workCategories = [
  {
    id: 'business-systems',
    index: '01',
    label: 'Business & Management Systems',
    meta: '2 systems',
    lede: 'Manual processes, paperwork, and scattered spreadsheets rebuilt as structured platforms teams actually run on.',
    accent: '157 78 221',
    projects: [
      {
        name: 'School Internal Management System',
        kind: 'Internal platform',
        summary:
          'One system for students, teachers, classes, scheduling, sessions, and administration — replacing the registers and spreadsheets a school runs on.',
        facets: ['Multi-role access', 'Scheduling engine', 'Academic records', 'Admin operations'],
      },
      {
        name: 'Barber Management Platform',
        kind: 'Operations platform',
        summary:
          'Reservations, attendance, and daily finances in a single view, so the shop is managed from live data instead of a notebook.',
        facets: ['Reservations', 'Attendance tracking', 'Financial reporting', 'Daily operations'],
      },
    ],
  },
  {
    id: 'ecosystems',
    index: '02',
    label: 'Large-Scale Digital Ecosystems',
    meta: '1 ecosystem',
    lede: 'Interconnected products rather than isolated apps — many roles, many modules, one coherent architecture.',
    accent: '181 126 255',
    featured: true,
    projects: [
      {
        name: 'Delivery & Ride-Sharing Ecosystem',
        kind: 'Multi-module ecosystem',
        summary:
          'A complete platform spanning web and cross-platform mobile, connecting customers, drivers, and partners through payments, deliveries, and mobility — with administration over all of it.',
        facets: [
          'Web + cross-platform mobile',
          'Customer, driver & partner roles',
          'Payments & deliveries',
          'Mobility services',
          'Central administration',
        ],
      },
    ],
  },
  {
    id: 'education',
    index: '03',
    label: 'Education & Robotics',
    meta: '1 platform',
    lede: 'Learning products built around how people actually absorb technical material.',
    accent: '124 77 255',
    projects: [
      {
        name: 'Robotics E-Learning Platform',
        kind: 'Learning product',
        summary:
          'A web platform for robotics education, structuring course content into interactive experiences that hold attention and track progress.',
        facets: ['Course architecture', 'Interactive lessons', 'Progress tracking'],
      },
    ],
  },
  {
    id: 'ai',
    index: '04',
    label: 'AI-Powered Systems',
    meta: '2 systems',
    lede: 'Models put to work on real business questions — pricing, demand, and performance.',
    accent: '139 92 246',
    projects: [
      {
        name: 'House Price Prediction',
        kind: 'Predictive system',
        summary:
          'A prediction and analysis system that turns property attributes into defensible valuations instead of guesswork.',
        facets: ['Predictive modelling', 'Feature analysis', 'Valuation output'],
      },
      {
        name: 'E-commerce Sales Analysis',
        kind: 'Analytics system',
        summary:
          'Sales and performance data analysed into the patterns that change decisions — what sells, what stalls, and where margin actually comes from.',
        facets: ['Sales analytics', 'Performance insight', 'Decision support'],
      },
    ],
  },
];

export const workCapabilities = [
  'Complex architectures',
  'Multiple user roles',
  'Interconnected modules',
  'Cross-platform mobile',
  'Scalable products',
];
