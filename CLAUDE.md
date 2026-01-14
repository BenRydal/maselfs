# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MaSelfS (Mapping Self in Society) is an educational web application that provides a teaching framework for personal geography and critical spatial inquiry. It guides users through three activities: Collect (GPS tracking), Visualize (mapping with IGS tool), and Reflect (data ethics discussion).

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run Svelte type checking

## Tech Stack

- **SvelteKit 2** with Svelte 5 (uses runes: `$state`, `$derived`, `$props`)
- **Tailwind CSS 4** via Vite plugin (not PostCSS config)
- **TypeScript** with strict mode
- **Vercel adapter** for deployment
- **lucide-svelte** for icons

## Architecture

### Data-Driven Activities

All activity content lives in `src/lib/data/activities.ts`. This single file defines:
- Activity metadata (title, subtitle, description, heroImage)
- Step-by-step instructions with optional video/image embeds
- Guiding questions, key concepts, and readings
- Color schemes per activity (blue/purple/green)

Adding/modifying activities only requires editing this data file—no component changes needed.

### Route Structure

- `/` - Hero landing page with video background
- `/overview` - Framework overview
- `/activity/[id]` - Dynamic activity pages (1-3)
- `/resources` - Additional resources
- `/about` - About page

Activity pages use `+page.ts` load functions to fetch activity data by ID.

### Shared Layout

`+layout.svelte` wraps all pages with Header and Footer components. The Header includes a fixed navigation with activities dropdown.

## Svelte 5 Patterns Used

- `let { data } = $props()` for page data
- `$state()` for reactive local state
- `$derived()` for computed values
- `{@render children()}` for slot content
