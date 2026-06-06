import cvPdf from '../assets/PDF/Mohamed_Ncib_Resume_English.pdf';

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/PLACEHOLDER_FORM_ID';

export const profile = {
  name: 'Mohamed Ncib',
  firstName: 'Mohamed',
  lastName: 'Ncib',
  initials: 'MN',
  role: 'Product Strategist',
  location: 'Tunisia',
  email: 'mohamed.ncib@polytechnicien.tn',
  phoneLabel: '+216 55 518 492',
  whatsappNumber: '21655518492',
  headline: 'I turn market complexity into product clarity. Strategy is where the work starts.',
  bio:
    'Market intelligence, product vision, and cross-functional execution — I connect the dots to turn opportunities into shipped products. Currently studying Data Science & AI to sharpen strategic decisions.',
  cv: {
    href: cvPdf,
    fileName: 'Mohamed_Ncib_CV_PLACEHOLDER.pdf',
    label: 'Download CV',
    placeholderNote: 'PLACEHOLDER CV PDF. Replace the file in src/assets/PDF before final publishing.',
  },
  contact: {
    formEndpoint: formspreeEndpoint,
    isBackendPlaceholder: formspreeEndpoint.includes('PLACEHOLDER'),
    backendNote: 'PLACEHOLDER contact backend. Set VITE_FORMSPREE_ENDPOINT to a real Formspree endpoint.',
  },
  pillars: [
    { number: '01', title: 'Market Intelligence', description: 'Competitive analysis, trend forecasting, and opportunity identification' },
    { number: '02', title: 'Product Vision', description: 'Defining roadmaps, positioning, and long-term strategic direction' },
    { number: '03', title: 'User Insight', description: 'Behavioral research, needs discovery, and empathy-driven validation' },
    { number: '04', title: 'Strategic Execution', description: 'Cross-functional alignment, prioritization, and measurable impact' },
  ],
  areas: [
    'Product Strategy',
    'Market Research',
    'UX Strategy',
    'Data & Analytics',
  ],
  stats: [
    { value: '6', label: 'Satisfied clients', detail: 'Freelance partnerships built on trust and repeat collaboration.' },
    { value: '2', label: 'Companies delighted', detail: 'Delivered products shaped around business context and execution.' },
    { value: 'DS + AI', label: 'Current focus', detail: 'Expanding design with analytical intelligence and product judgment.' },
  ],
  socials: [
    { label: 'Email', href: 'mailto:mohamed.ncib@polytechnicien.tn', placeholder: false },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-ncib-1b17b5224/', placeholder: false },
    { label: 'GitHub', href: 'https://github.com/Mohamed-ncib19', placeholder: false },
    { label: 'WhatsApp', href: 'https://wa.me/21655518492', placeholder: false },
  ],
};
