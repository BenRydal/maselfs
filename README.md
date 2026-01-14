# MaSelfS - Mapping Self in Society

[![SvelteKit](https://img.shields.io/badge/SvelteKit-2.0-FF3E00?style=flat&logo=svelte&logoColor=white)](https://kit.svelte.dev/)
[![Svelte](https://img.shields.io/badge/Svelte-5-FF3E00?style=flat&logo=svelte&logoColor=white)](https://svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)

<https://github.com/BenRydal/maselfs/raw/main/static/videos/card-video.mp4>

A teaching framework for personal geography and critical spatial inquiry. MaSelfS guides learners through collecting, visualizing, and reflecting on their own location data to understand how personal movement patterns intersect with broader social systems.

## Overview

MaSelfS provides three structured activities that help students:

1. **Collect** - Capture daily movement using GPS tracking (OutdoorActive app)
2. **Visualize** - Map personal geography using the IGS visualization tool and overlay thematic maps
3. **Reflect** - Engage with data ethics, surveillance capitalism, and critical spatial concepts

Each activity includes step-by-step instructions, embedded video tutorials, guiding questions, key concepts, and curated readings.

## Features

- Responsive, mobile-friendly design
- Video background hero section
- Dynamic activity pages with step-by-step guides
- Embedded YouTube tutorials and looping video demonstrations
- Curated academic and media readings
- Student testimonials
- Team and publication information

## Tech Stack

- **[SvelteKit 2](https://kit.svelte.dev/)** with Svelte 5 (runes: `$state`, `$derived`, `$props`)
- **[Tailwind CSS 4](https://tailwindcss.com/)** via Vite plugin
- **TypeScript** with strict mode
- **[Vercel](https://vercel.com/)** adapter for deployment
- **[Lucide](https://lucide.dev/)** icons (lucide-svelte)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/BenRydal/maselfs.git
cd maselfs

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Run type checking
npm run check

# Run type checking in watch mode
npm run check:watch
```

### Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── lib/
│   ├── components/       # Reusable Svelte components
│   │   ├── Header.svelte
│   │   ├── Footer.svelte
│   │   └── ActivityIcon.svelte
│   └── data/
│       ├── activities.ts # All activity content (data-driven)
│       └── quotes.ts     # Student testimonials
├── routes/
│   ├── +layout.svelte    # Shared layout (header/footer)
│   ├── +page.svelte      # Home page
│   ├── overview/         # Framework overview
│   ├── activity/[id]/    # Dynamic activity pages (1-3)
│   ├── resources/        # Additional resources
│   └── about/            # Team and publications
└── app.css               # Global styles

static/
├── images/               # Activity heroes, thumbnails, team bios
└── videos/               # Hero background, demo videos
```

## Adding or Modifying Activities

All activity content is defined in `src/lib/data/activities.ts`. To modify activities, edit this single file—no component changes needed. Each activity includes:

- Metadata (title, subtitle, description, hero image)
- Step-by-step instructions with optional video/image embeds
- Guiding questions and key concepts
- Curated readings (academic and media)
- Color scheme (blue/purple/green)

## Related Tools

- **[OutdoorActive](https://www.outdooractive.com/)** - Free GPS tracking app for collecting movement data
- **[IGS Visualization Tool](https://interactiongeography.org/)** - Interactive tool for mapping and analyzing personal geography

## Team

MaSelfS is a partnership between:
- **Georgia State University** - Department of Learning Sciences
- **Vanderbilt University** - Spatial Analysis Research Lab
- **Georgia Tech** - School of Interactive Computing

Funded by the **Spencer Foundation** and **National Science Foundation**.

### Contributors

Ben Rydal Shapiro, Rogers Hall, Natalie Robbins, Steve Wernke, Amanda Meng, Sierra Gilliam, Edwin Zhao

**Past contributors:** Cody O'Donnell, Bianca Dankwa, Charlotte Lou, Emma Reimers, Sachin Bangalore

## Publications

- Shapiro, B.R., Meng, A., O'Donnell, C., Lou, C., Zhao, E., Dankwa, B., & Hostetler, A. (2020). [Re-Shape: A Method to Teach Data Ethics for Data Science Education](https://www.researchgate.net/publication/338789145_Re-Shape_A_Method_to_Teach_Data_Ethics_for_Data_Science_Education). *CHI 2020*.

- Marin, A., Headrick-Taylor, K., Shapiro, B.R., & Hall, R. (2020). [Why Learning on the Move: Intersecting Research Pathways for Mobility, Learning and Teaching](https://www.tandfonline.com/doi/full/10.1080/07370008.2020.1769100). *Cognition and Instruction, 38(3)*, 265-280.

## Contact

For questions or collaboration inquiries, contact [bshapiro@gsu.edu](mailto:bshapiro@gsu.edu).
