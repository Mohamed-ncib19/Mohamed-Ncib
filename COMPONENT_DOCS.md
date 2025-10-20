# Component Architecture Documentation

## Overview
This document outlines all new and modified components in the portfolio redesign.

---

## 1. GalaxyBackground Component

**File**: `C:\Users\KIRA\Desktop\Mohamed-Ncib-main\src\components\backgrounds\GalaxyBackground.jsx`

### Purpose
Creates an immersive, animated galaxy background using HTML5 Canvas.

### Features
- **Twinkling Stars**: Dynamic opacity changes for realistic twinkling
- **Shooting Stars**: Gradient trails with smooth motion
- **Glowing Orbs**: Multiple radial gradients for depth
- **Responsive**: Adjusts to window resize
- **Performance**: Optimized rendering loop

### Usage
```jsx
import GalaxyBackground from '../../components/backgrounds/GalaxyBackground';

<GalaxyBackground className="min-h-screen">
  {/* Your content here */}
</GalaxyBackground>
```

### Props
- `className`: Additional CSS classes
- `children`: Content to render above the background

### Technical Details
- Uses `useRef` for canvas element
- `useEffect` manages animation lifecycle
- `requestAnimationFrame` for smooth 60fps animation
- Cleanup on component unmount

---

## 2. Card Component System

**File**: `C:\Users\KIRA\Desktop\Mohamed-Ncib-main\src\components\ui\card.jsx`

### Components Exported
1. `Card` - Main container
2. `CardHeader` - Top section
3. `CardTitle` - Title text
4. `CardDescription` - Subtitle/description
5. `CardContent` - Main content area
6. `CardFooter` - Bottom section

### Features
- Glassmorphic design with backdrop blur
- Border with purple accent
- Hover shadow effects
- Consistent padding and spacing
- Accessible with forwardRef

### Usage
```jsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

### Styling
- Background: `bg-gray-900/50` with backdrop blur
- Border: `border-gray-800`
- Hover: Shadow with purple glow
- Rounded: `rounded-xl`

---

## 3. Badge Component

**File**: `C:\Users\KIRA\Desktop\Mohamed-Ncib-main\src\components\ui\badge.jsx`

### Variants
1. **default**: Purple background, white text
2. **secondary**: Gray background, light text
3. **outline**: Transparent with border
4. **success**: Green background, white text

### Features
- Small, pill-shaped design
- Multiple color variants
- Hover effects
- Focus ring support

### Usage
```jsx
import { Badge } from '../../components/ui/badge';

<Badge variant="default">Web Developer</Badge>
<Badge variant="secondary">Design</Badge>
<Badge variant="outline">React</Badge>
<Badge variant="success">Education</Badge>
```

### Styling
- Size: Small (`text-xs`, minimal padding)
- Shape: Rounded pill (`rounded-full`)
- Interactive: Hover and focus states

---

## 4. Experience Component

**File**: `C:\Users\KIRA\Desktop\Mohamed-Ncib-main\src\pages\Home\Experience.jsx`

### Purpose
Displays professional experience in a timeline format with LinkedIn integration.

### Structure
```
Experience Section
├── Header (Gradient Title)
├── Timeline Line (Vertical gradient)
└── Experience Cards (Alternating layout)
    ├── Timeline Dot
    └── Card
        ├── Header (Title, Company, Badge)
        ├── Meta (Date, Location)
        ├── Description
        ├── Achievements List
        └── Skills Badges
```

### Features
- **Timeline Layout**: Vertical line with dots
- **Alternating Cards**: Left/right on desktop
- **Responsive**: Single column on mobile
- **Icons**: Lucide React icons
- **LinkedIn Link**: Call-to-action button
- **Animations**: Hover scale and shadow effects

### Data Structure
```javascript
{
  id: number,
  title: string,
  company: string,
  location: string,
  period: string,
  type: 'Self-Employed' | 'Contract' | 'Education',
  description: string,
  skills: string[],
  achievements: string[]
}
```

### Responsive Behavior
- Desktop: Alternating left/right layout
- Mobile: All cards left-aligned with timeline on left edge

---

## 5. Enhanced Hero Component

**File**: `C:\Users\KIRA\Desktop\Mohamed-Ncib-main\src\pages\Home\hero.jsx`

### New Features
- Animated gradient text for name
- Role badges (Web Developer, Designer, Art Lover)
- Ambient gradient orbs
- Enhanced typography
- Purple accent clock

### Layout
```
Hero Section
├── Ambient Orbs (2 floating gradients)
└── Content Container
    ├── NEWS Badge (modal)
    ├── Name (gradient animation)
    ├── Role Badges
    ├── Description
    ├── Scroll Down Arrow
    └── Date/Time Display
```

### Animations
- `animate-fadeIn`: Content entrance
- `animate-gradient`: Text gradient flow
- `animate-pulse`: Orb pulsing
- `animate-bounce`: Arrow bounce
- Hover effects on interactive elements

---

## 6. Enhanced Skills Component

**File**: `C:\Users\KIRA\Desktop\Mohamed-Ncib-main\src\pages\Home\skills.jsx`

### Updates
- Replaced custom divs with Card components
- Added gradient header
- Icon animations on hover
- Improved spacing and typography

### Card Structure (3 cards)
1. **Design**
   - Figma
   - UI/UX Design
   - Prototyping

2. **Front End**
   - Next.js, React
   - Bootstrap, Tailwind
   - Material UI, Tabler
   - HTML, CSS, JS
   - PHP
   - WordPress

3. **Back End**
   - Express.js
   - Fastify
   - MongoDB
   - SQL
   - Firebase

### Hover Effects
- Card scale (1.02x)
- Purple shadow glow
- Icon rotate and scale
- Smooth transitions

---

## 7. Utility Functions

**File**: `C:\Users\KIRA\Desktop\Mohamed-Ncib-main\src\lib\utils.js`

### Purpose
Intelligent className merging for Tailwind CSS.

### Function
```javascript
cn(...inputs)
```

### Usage
```jsx
import { cn } from '../../lib/utils';

<div className={cn(
  'base-classes',
  condition && 'conditional-classes',
  className
)} />
```

### Benefits
- Merges conflicting Tailwind classes
- Handles conditional classes
- Prevents duplicate classes
- Type-safe with TypeScript support

---

## Integration Flow

```
HomePage.jsx
└── GalaxyBackground
    └── Content Container
        ├── Navbar
        ├── Hero (enhanced with badges)
        ├── Skills (Card components)
        ├── Experience (NEW timeline)
        ├── Recent Projects
        ├── Design UI
        ├── Contact
        └── Footer
```

---

## Styling Architecture

### Global Styles
File: `C:\Users\KIRA\Desktop\Mohamed-Ncib-main\src\css\index.css`

**Custom Animations**:
- `fadeIn`: Smooth entrance
- `gradient`: Flowing gradient
- `float`: Gentle floating
- Custom scrollbar styling
- Selection color customization

### Tailwind Config
File: `C:\Users\KIRA\Desktop\Mohamed-Ncib-main\tailwind.config.js`

**Extended Theme**:
- Custom keyframes
- Animation timings
- Color system
- Backdrop blur utilities

---

## Performance Considerations

### Galaxy Background
- Canvas cleared each frame
- Efficient star rendering
- Optimized gradient calculations
- RequestAnimationFrame for smooth 60fps

### Component Rendering
- React.forwardRef for better composition
- Minimal re-renders
- Lazy loading where applicable
- CSS transitions over JS animations

### Build Optimization
- Tree shaking enabled
- CSS purging for unused classes
- Code splitting by route
- Asset optimization

---

## Accessibility Features

### Semantic HTML
- Proper heading hierarchy
- Meaningful section landmarks
- Accessible form controls

### Keyboard Navigation
- Focus indicators on all interactive elements
- Logical tab order
- Skip links where needed

### Screen Readers
- ARIA labels on icons
- Alt text on images
- Semantic structure

### Color Contrast
- Purple/pink on dark: AA compliant
- White text on dark: AAA compliant
- Badge colors: Sufficient contrast

---

## Browser Compatibility

### Supported Features
- Canvas API ✅
- CSS Backdrop Blur ✅
- CSS Grid ✅
- Flexbox ✅
- CSS Animations ✅
- Modern ES6+ ✅

### Fallbacks
- No special fallbacks needed
- Modern browsers only
- Progressive enhancement approach

---

## Testing Checklist

### Visual Testing
- ✅ Galaxy background renders
- ✅ Stars twinkle smoothly
- ✅ Shooting stars appear
- ✅ Cards have proper styling
- ✅ Badges display correctly
- ✅ Timeline aligns properly
- ✅ Hover effects work
- ✅ Animations are smooth

### Responsive Testing
- ✅ Mobile (320px - 767px)
- ✅ Tablet (768px - 1023px)
- ✅ Desktop (1024px+)
- ✅ Large screens (1920px+)

### Performance Testing
- ✅ 60fps animation
- ✅ Fast page load
- ✅ No layout shift
- ✅ Smooth scrolling

---

## Maintenance Guide

### Adding New Experience
1. Edit `src/pages/Home/Experience.jsx`
2. Add object to `experiences` array
3. Follow existing data structure
4. Build will auto-update

### Modifying Colors
1. Update `tailwind.config.js` for theme colors
2. Update `src/css/index.css` for custom styles
3. Search and replace hex values if needed

### Adjusting Animations
1. Edit keyframes in `src/css/index.css`
2. Modify timing in `tailwind.config.js`
3. Test on multiple devices

---

**Component architecture is modular, reusable, and maintainable!**
