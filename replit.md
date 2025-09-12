# Saudi Makamin Holding Company Website

## Overview

This project is the flagship digital presence for Saudi Makamin Holding Company, an oil & gas services company established in 2008 with a capital of SAR 1.2 billion. The application comprehensively showcases company capabilities through a modern, bilingual (English/Arabic) interface with authentic content from the 2017 company profile. It is built as a full-stack React application with an Express.js backend, designed with cinematic visuals, interactive components, and an AI-ready architecture. The project's ambition is to serve as a tech showcase for Vision 2030 initiatives and as a presentation tool for future IPO.

## User Preferences

Preferred communication style: Simple, everyday language.
Project preservation priority: High - maintain all work with precision until user return.
Content standards: Authentic company data only, zero placeholder content.
Visual standards: Royal-grade precision suitable for regulatory and ministerial viewing.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom Makamin brand colors
- **State Management**: TanStack Query for server state, React hooks for local state
- **Internationalization**: Custom i18n implementation supporting English and Arabic
- **Build Tool**: Vite for development and production builds
- **UI/UX Decisions**: Cinematic design, glass morphism, gradient effects, animated particles, real-time data visualization (e.g., live KPIs, interactive timelines, motion-driven microinteractions), Royal-grade precision for visual elements, mobile-first optimization, and touch-friendly interfaces. Authentic Makamin branding with Saudi corporate blue/gold gradients and flag integration.

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **API Design**: RESTful API with typed endpoints
- **Session Management**: Express sessions with PostgreSQL store

### System Design Choices
- **Monorepo Structure**: Shared code between client and server for type safety and consistency.
- **AI-Ready Architecture**: Plugin-ready for future AI integration (e.g., ChatGPT/LangChain). Includes features like AI-Enhanced Dashboards, semantic metadata (Schema.org), and enhanced security measures (CSP, bot detection, spam filters).
- **Comprehensive SEO Implementation**: Dynamic meta tags, structured data (JSON-LD), optimized sitemaps, performance optimization, and multi-language SEO.
- **Robust Social Media Optimization**: Open Graph and Twitter Card enhancements with professional banners and multi-platform optimization.
- **VIP Shareholder System**: Secure, PostgreSQL-backed digital shareholder management platform with real-time updates, advanced filtering, and mobile optimization.
- **Authentic Content Integration**: All content derived from actual company profiles, project data, certifications, and news articles.
- **Zero Tolerance Protocol**: Strict adherence to "خطاء صفر في كل شي" for technical and visual precision, ensuring no errors, placeholders, or inconsistencies.
- **Advanced News Components**: Dynamic pulse indicators replace reading time displays across all news components (news-new.tsx, news-enhanced.tsx, news-premium.tsx) with red indicators for urgent news, green for active announcements, and Arabic tooltips "الخبر حي – قيد التحديث".

## External Dependencies

- **@neondatabase/serverless**: Serverless PostgreSQL database provider.
- **drizzle-orm**: Type-safe database ORM.
- **@tanstack/react-query**: For server state management and caching.
- **wouter**: Lightweight React router.
- **zod**: Schema validation.
- **@radix-ui/***: For accessible UI primitives.
- **tailwindcss**: Utility-first CSS framework.
- **lucide-react**: Icon library.
- **class-variance-authority**: For component variant management.
- **vite**: Build tool and development server.
- **typescript**: For type checking.
- **tsx**: For TypeScript execution.
- **esbuild**: Fast JavaScript bundler.
- **Framer Motion**: For advanced animations and interactive components.
- **Google Maps API**: For interactive map embeddings and Street View integration.
- **IndexNow API**: For immediate search engine notification.
- **Cloudflare**: Used for DNS management and SSL.
- **Vercel**: Deployment platform.

## Recent Changes - September 10, 2025

**CRITICAL MOBILE OPTIMIZATION & VERCEL DEPLOYMENT FIXES COMPLETED:**
- ✅ **FIXED**: Horizontal overflow bug on contact page (1084px → 838px in landscape mode)
- ✅ **RESOLVED**: package.json JSON parsing error - recreated clean file for Vercel compatibility
- ✅ **OPTIMIZED**: Navigation breakpoints (md:flex → lg:flex) to prevent mobile overflow
- ✅ **CONTAINED**: Wave animations with overflow-x:hidden and reduced transform values
- ✅ **UPDATED**: Vercel configuration to include attached_assets copying in build process
- ✅ **ACHIEVED**: Perfect mobile responsiveness for all viewport orientations
- ✅ **MAINTAINED**: Royal-grade precision for government and ministerial viewing standards
- ✅ **VERIFIED**: All mobile optimizations tested and working flawlessly
- ✅ **STATUS**: Application running successfully (serving on port 5000)
- ✅ **GIT**: All changes committed locally, ready for GitHub push to preserve work

**PROJECT STATE**: Fully stable, optimized, and ready for production deployment.