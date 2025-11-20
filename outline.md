# GVMI Website Project Outline

## Project Structure
```
/mnt/okcomputer/output/
├── index.html              # Home page
├── about.html              # About GVMI
├── services.html           # Our Services
├── advantages.html         # Our Advantages
├── fleet.html              # Fleet & Assets
├── insights.html           # Insights & Reports
├── news.html               # News & Events
├── partners.html           # Partners
├── contact.html            # Contact
├── main.js                 # Main JavaScript file
├── resources/              # Images and assets folder
│   ├── hero-maritime.jpg   # Hero background image
│   ├── fleet-1.jpg         # Fleet images
│   ├── fleet-2.jpg
│   ├── fleet-3.jpg
│   ├── team-1.jpg          # Team photos
│   ├── team-2.jpg
│   ├── office-building.jpg # Office/company images
│   ├── dashboard.jpg       # Analytics/dashboard images
│   ├── port-operations.jpg # Maritime operations
│   ├── shipping-containers.jpg
│   ├── maritime-meeting.jpg
│   └── partner-logos/      # Partner company logos
├── styles.css              # Custom styles (if needed)
└── README.md               # Project documentation
```

## Page Breakdown

### 1. Home (index.html)
- **Purpose**: Main landing page showcasing GVMI's capabilities
- **Key Sections**:
  - Hero section with maritime background and company positioning
  - Key statistics (300+ fleet, $1B+ credit, $2.8B assets, 120+ clients)
  - Quick service cards (Market Research, Financial Solutions, Asset Management)
  - Featured case studies
  - Partners logo carousel
  - Latest insights preview
  - Call-to-action buttons

### 2. About (about.html)
- **Purpose**: Company overview and leadership information
- **Key Sections**:
  - Company overview with Seacon affiliation
  - Leadership team profiles
  - Vision and mission statements
  - Company timeline/journey
  - Certifications and achievements

### 3. Services (services.html)
- **Purpose**: Detailed service offerings
- **Key Sections**:
  - Service overview
  - Maritime Market Research
  - Maritime Financial Solutions
  - Full-Cycle Asset Management
  - Sustainable Shipping solutions

### 4. Advantages (advantages.html)
- **Purpose**: Competitive advantages and unique value propositions
- **Key Sections**:
  - Data-driven insights capabilities
  - Financial and leasing strength
  - Global network coverage
  - Risk and compliance framework

### 5. Fleet (fleet.html)
- **Purpose**: Fleet and asset portfolio showcase
- **Key Sections**:
  - Fleet overview statistics
  - Interactive fleet filtering system
  - Individual vessel details
  - Asset portfolio summary

### 6. Insights (insights.html)
- **Purpose**: Market research and industry reports
- **Key Sections**:
  - Report categories and filters
  - Search functionality
  - Individual report listings
  - Download capabilities

### 7. News (news.html)
- **Purpose**: Company news and media coverage
- **Key Sections**:
  - Corporate news
  - SEACON 2025 coverage
  - Media mentions
  - Event galleries

### 8. Partners (partners.html)
- **Purpose**: Strategic partnerships and alliances
- **Key Sections**:
  - Partner categories (Financial, Shipping & Energy, Tech & Data)
  - Partner logos and descriptions
  - Strategic partnership highlights

### 9. Contact (contact.html)
- **Purpose**: Contact information and inquiry forms
- **Key Sections**:
  - Global office locations
  - Contact form with validation
  - Interactive map
  - Contact information

## Technical Implementation

### Design System
- **Colors**: Ocean blue primary (#1e3a8a), gold accent (#f59e0b), neutral grays
- **Typography**: Noto Sans/Inter for English, PingFang for Chinese
- **Layout**: Responsive grid system with mobile-first approach
- **Visual Elements**: Maritime imagery, data visualizations, professional photography

### Interactive Components
1. **Fleet Filter System**: Filter vessels by type, size, status
2. **Contact Form**: Multi-step form with validation and email integration
3. **Insights Search**: Real-time search and category filtering
4. **Partners Carousel**: Smooth scrolling partner logos
5. **Statistics Counters**: Animated number counting on scroll

### Visual Effects
1. **Hero Background**: Animated maritime scenes using p5.js
2. **Data Visualizations**: Maritime industry charts using ECharts.js
3. **Scroll Animations**: Subtle reveal animations using Anime.js
4. **Image Galleries**: Lightbox effects for fleet and office images

### External Libraries
- **Anime.js**: Scroll animations and transitions
- **ECharts.js**: Data visualization and charts
- **p5.js**: Creative coding for hero backgrounds
- **Splide.js**: Image carousels and sliders
- **Typed.js**: Typewriter effects for headlines

## Content Strategy

### Key Messages
- Data-driven maritime finance expertise
- Global reach with local knowledge
- Sustainable shipping solutions
- Proven track record and financial strength
- Strategic partnerships and industry leadership

### SEO Optimization
- Unique meta titles and descriptions for each page
- Structured data markup for business information
- Optimized images with alt text
- Semantic HTML structure
- Fast loading times and mobile optimization

## Deployment Plan
1. Create all HTML pages with responsive design
2. Implement interactive components and animations
3. Add content and optimize for SEO
4. Test across devices and browsers
5. Deploy to production environment