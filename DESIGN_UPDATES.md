# Mohamed Ncib - Portfolio Website

A stunning, modern portfolio website featuring an animated galaxy background, professional UI components, and comprehensive sections showcasing skills, experience, and projects.

## Recent Design Enhancements

### 1. **Galaxy Background Animation**
- **Custom-built animated galaxy background** with:
  - Twinkling stars with dynamic opacity
  - Shooting stars with gradient trails
  - Multiple glowing orbs creating depth
  - Smooth canvas-based animations
  - Performance-optimized rendering

### 2. **Modern UI Components (shadcn-inspired)**
- **Card Component**: Sleek, glassmorphic cards with hover effects
- **Badge Component**: Multiple variants (default, secondary, outline, success)
- **Enhanced Typography**: Gradient text effects and smooth animations
- **Consistent Design System**: Unified color palette and spacing

### 3. **New Experience Section**
- **Professional Timeline Layout**: Alternating card design showing career progression
- **LinkedIn Integration**: Direct link to LinkedIn profile
- **Interactive Elements**:
  - Hover animations on cards
  - Smooth transitions
  - Timeline with gradient connector
  - Badge indicators for different types (Education, Contract, Self-Employed)
- **Comprehensive Details**:
  - Job titles and companies
  - Time periods and locations
  - Key achievements
  - Skills and technologies used

### 4. **Enhanced Hero Section**
- **Animated Gradient Text**: Name displayed with flowing gradient animation
- **Role Badges**: Web Developer, UI/UX Designer, Art Lover
- **Ambient Orbs**: Pulsing gradient orbs for depth
- **Interactive Elements**: Smooth hover effects on all interactive components

### 5. **Improved Skills Section**
- **Card-based Layout**: Using new Card components
- **Interactive Hover States**: Scale and glow effects
- **Icon Animations**: Rotating and scaling on hover
- **Consistent Spacing**: Improved visual hierarchy

### 6. **Custom Animations**
- **fadeIn**: Smooth entrance animations
- **gradient**: Flowing gradient text effects
- **float**: Subtle floating animations
- **Custom Scrollbar**: Purple gradient themed
- **Selection Styling**: Custom text selection colors

## Technology Stack

### Frontend
- **React 18.2.0**: Modern UI library
- **Vite 4.3.9**: Fast build tool
- **Tailwind CSS 3.3.2**: Utility-first CSS framework
- **Framer Motion 10.12.17**: Animation library

### UI Components
- **Custom shadcn-inspired components**: Card, Badge
- **Material UI 5.14.14**: Additional components
- **Flowbite React 0.10.1**: UI components
- **React Icons 4.9.0**: Icon library
- **Lucide React**: Modern icon set

### Utilities
- **clsx**: Conditional className utility
- **tailwind-merge**: Merge Tailwind classes intelligently
- **class-variance-authority**: Component variant management

### Other Dependencies
- **React Router DOM 6.13.0**: Navigation
- **Firebase 9.22.2**: Backend services
- **React Lazy Load Image**: Image optimization

## Project Structure

```
Mohamed-Ncib-main/
├── src/
│   ├── components/
│   │   ├── backgrounds/
│   │   │   └── GalaxyBackground.jsx    # Animated galaxy background
│   │   ├── ui/
│   │   │   ├── card.jsx                # Card component
│   │   │   └── badge.jsx               # Badge component
│   │   └── modals/
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── HomePage.jsx            # Main homepage with galaxy bg
│   │   │   ├── hero.jsx                # Enhanced hero section
│   │   │   ├── Experience.jsx          # NEW: Professional experience
│   │   │   ├── skills.jsx              # Enhanced skills section
│   │   │   └── ...
│   │   ├── About/
│   │   ├── Works/
│   │   └── Contact/
│   ├── lib/
│   │   └── utils.js                    # Utility functions
│   └── css/
│       ├── index.css                   # Global styles & animations
│       └── style.css
├── public/
├── package.json
├── tailwind.config.js                  # Extended theme config
└── vite.config.js
```

## Key Features

### Visual Design
- **Galaxy Background**: Immersive animated background with stars and shooting stars
- **Gradient Accents**: Purple to pink gradients throughout
- **Glassmorphism**: Frosted glass effect on cards
- **Smooth Animations**: Carefully crafted transitions and animations
- **Responsive Design**: Mobile-first approach

### User Experience
- **Fast Load Times**: Optimized bundle size and lazy loading
- **Smooth Scrolling**: Native smooth scroll behavior
- **Interactive Elements**: Hover states and transitions
- **Accessibility**: Semantic HTML and ARIA labels

### Performance
- **Canvas Optimization**: Efficient rendering for galaxy background
- **Code Splitting**: Dynamic imports where needed
- **Image Optimization**: Lazy loading for images
- **CSS Optimization**: Tailwind purge for minimal bundle size

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Mohamed-ncib19/Mohamed-Ncib.git
cd Mohamed-Ncib-main
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Design System

### Colors
- **Primary Purple**: `#6947ef`
- **Pink Accent**: `#ec4899`
- **Dark Background**: `#0F0F0F`
- **Card Background**: `#1a1a1a` with transparency
- **Text**: White with various gray shades

### Typography
- **Headings**: Large, bold, gradient text
- **Body**: Clean, readable sans-serif
- **Spacing**: Consistent vertical rhythm

### Components
- **Cards**: Rounded corners, subtle borders, hover effects
- **Badges**: Small, rounded, color-coded
- **Buttons**: Gradient backgrounds, smooth transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

1. **Lazy Loading**: Images loaded on demand
2. **Code Splitting**: Route-based splitting
3. **Minification**: CSS and JS minified
4. **Tree Shaking**: Unused code removed
5. **Canvas Optimization**: Efficient star rendering

## Future Enhancements

- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add more interactive animations
- [ ] Integrate CMS for easy content updates
- [ ] Add project filtering and search
- [ ] Implement PWA features

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Mohamed Ncib**
- LinkedIn: [Mohamed Ncib](https://www.linkedin.com/in/mohamed-ncib-1b17b5224/)
- GitHub: [@Mohamed-ncib19](https://github.com/Mohamed-ncib19)
- Portfolio: [Visit Website](https://mohamed-ncib19.github.io/Mohamed-Ncib/)

## Acknowledgments

- Design inspiration from modern portfolio websites
- Galaxy background inspired by space-themed UI trends
- Component architecture influenced by shadcn/ui
- Community feedback and support

---

**Built with passion and dedication to creating beautiful, functional web experiences.**

Last Updated: October 2025
