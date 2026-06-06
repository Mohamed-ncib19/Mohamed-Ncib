import cvPdf from '../assets/PDF/Mohamed_Ncib_Resume_English.pdf';

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/PLACEHOLDER_FORM_ID';

export const profile = {
  name: 'Mohamed Ncib',
  firstName: 'Mohamed',
  lastName: 'Ncib',
  initials: 'MN',
  role: 'Product Designer',
  location: 'Tunisia',
  email: 'mohamed.ncib@polytechnicien.tn',
  phoneLabel: '+216 55 518 492',
  whatsappNumber: '21655518492',
  headline: 'I turn any idea into a product. Complexity is where the work starts.',
  bio:
    'Strategy, design, and front-end fluency — I bridge all three to turn any idea into a shipped product. Currently studying Data Science & AI to sharpen product decisions.',
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
    { number: '01', title: 'User Psychology', description: 'Behavioral mapping, user research, and empathy flows' },
    { number: '02', title: 'Market Strategy', description: 'Analyzing product-market fit and competitor landscapes' },
    { number: '03', title: 'Product Management', description: 'Cross-functional alignment, scoping, and lifecycle strategy' },
    { number: '04', title: 'Product Design', description: 'Turning ideas into tangible, high-fidelity UI/UX' },
  ],
  areas: [
    'Product Design',
    'Front-End Engineering',
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
