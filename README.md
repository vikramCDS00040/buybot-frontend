# ProdVista Frontend

An AI-powered product ratings and reviews platform built with Next.js and Tailwind CSS.

## Features

- **Search Module**: Debounced search with query suggestions
- **Product List**: AI-ranked products with quick view hover
- **Comparison**: Side-by-side comparison of up to 3 products
- **Recommendations**: AI-powered product recommendations carousel

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- React Context for state management

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/search/          # Search API endpoint
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── SearchModule.tsx     # Search functionality
│   ├── ProductListModule.tsx # Product grid display
│   ├── ComparisonModule.tsx  # Product comparison
│   └── RecommendationModule.tsx # Recommendations
├── contexts/
│   └── ProductContext.tsx   # Global state management
└── Configuration files
```

## Design System

- **Primary Color**: #2563EB (Blue)
- **Secondary Color**: #10B981 (Green)
- **Accent Color**: #F59E0B (Amber)
- **Fonts**: Inter (body), Poppins (headings)
- **Responsive**: Desktop, tablet, mobile support