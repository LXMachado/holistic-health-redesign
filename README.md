# Holistic Wellness Website Design

A modern, responsive website for holistic wellness services, built with React, Vite, and Tailwind CSS.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Agents Configuration](#agents-configuration)
- [Contributing](#contributing)
- [License](#license)

## Overview
The Holistic Wellness Website Design project aims to create a beautiful, functional online presence for holistic wellness practitioners. The website will showcase services, provide booking capabilities, and offer educational resources.

## Features
- Responsive design for all device sizes
- Service listings with detailed descriptions
- Online booking and appointment scheduling
- Blog/resource section for wellness content
- Contact forms and practitioner profiles
- Accessibility compliant (WCAG 2.1 AA)
- Performance optimized for fast loading
- SEO friendly structure

## Tech Stack
- **Frontend**: React 18, Vite, Tailwind CSS
- **UI Components**: Radix UI, Lucide Icons
- **State Management**: React Hook Form, Context API (to be expanded)
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: pnpm

## Project Structure
```
holistic-wellness-website/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page components
│   ├── layouts/            # Layout components
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── styles/             # Global styles and Tailwind config
│   └── App.jsx             # Main application component
├── .kilo/                  # Kilo CLI configuration
├── AGENTS.md               # Agent roles and communication protocols
├── guidelines/             # Project guidelines
├── index.html              # Main HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
└── postcss.config.mjs      # PostCSS configuration
```

## Getting Started
1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm dev
   ```
4. Open http://localhost:5173 in your browser

## Development
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally

## Agents Configuration
This project utilizes a multi-agent system for development. See [AGENTS.md](AGENTS.md) for detailed information about:
- Agent roles and responsibilities
- Communication protocols
- Code review processes
- Success metrics

## Contributing
Please read [AGENTS.md](AGENTS.md) for detailed guidelines on how to contribute to this project, including:
- How to work as an agent in the system
- Communication protocols
- Pull request process
- Coding standards

## License
This project is private and proprietary. All rights reserved.