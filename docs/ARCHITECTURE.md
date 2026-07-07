# ARCHITECTURE.md

Version: 1.0

Last Updated: 2026-07-04

---

# Overview

This document describes the technical architecture of Waypoint.

Unlike `WAYPOINT_CONTEXT.md`, which defines the product vision and roadmap, this document explains how the application is structured and how its components interact.

---

# Architecture Principles

- Keep the MVP simple.
- Build one complete vertical slice at a time.
- Prefer composition over complexity.
- Minimize technical debt.
- Every feature should be independently testable.
- Repository documentation is the engineering source of truth.

---

# High-Level Architecture

┌──────────────────────┐
│   Chrome Extension   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│    Next.js Web App   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      Supabase        │
│ Authentication       │
│ PostgreSQL Database  │
│ Storage              │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      OpenAI API      │
│ AI Summary           │
│ AI Categorization    │
│ AI Tag Generation    │
└──────────────────────┘

---

# Technology Stack

## Frontend

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Backend

- Supabase

## Authentication

- Google OAuth via Supabase

## Database

- PostgreSQL

## AI

- OpenAI

## Deployment

- Vercel

---

# Current Folder Structure

```
waypoint/
│
├── app/
├── docs/
├── public/
├── package.json
├── tsconfig.json
├── next.config.ts
└── ...
```

---

# Planned Folder Structure

```
app/
│
├── (public)/
│
├── dashboard/
│
├── auth/
│
├── api/
│
└── components/
```

---

# Current Application Flow

User

↓

Landing Page

↓

Google Authentication (Next Mission)

↓

Dashboard

↓

Knowledge Capture

↓

Knowledge Objects

↓

Search & Retrieval

---

# Current State

Implemented

- Project initialization
- Git workflow
- Landing page

Next

- Authentication
- Dashboard shell
- Chrome extension
- Knowledge Object engine

---

# Future Architecture

- Browser Extension communication
- AI processing pipeline
- Search indexing
- Semantic retrieval
- Background synchronization
- Vector search (future)