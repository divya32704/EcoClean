# EcoClean — Environmental Awareness and Cleanup Campaign

EcoClean is a simple, fast website that promotes environmental responsibility and local cleanup initiatives. It highlights upcoming events, tracks volunteer impact, and provides educational resources that students and community members can use to take action.

## Features

- Informational pages about litter, recycling, and sustainable habits
- Events section with date, location, and call to action
- Volunteer sign up form with basic validation
- Impact counters for trash collected, hours volunteered, and participants
- Resources library with downloadable guides and links
- Mobile friendly layout with accessible color contrast and keyboard navigation
- Optional PWA setup for installable experience

## Tech Stack

- HTML5, CSS3, JavaScript
- Optional: React for component based UI
- Optional: Service Worker for PWA features

## Project Structure

ecoclean/
├─ public/
│ ├─ icons/ # Favicons and PWA icons
│ ├─ assets/ # Images and downloads
│ └─ manifest.json # PWA manifest (optional)
├─ src/
│ ├─ css/
│ │ └─ styles.css
│ ├─ js/
│ │ ├─ main.js # Site interactions
│ │ └─ analytics.js # Simple counters and metrics
│ ├─ index.html # Home
│ ├─ events.html # Cleanup events
│ ├─ resources.html # Learning materials
│ └─ about.html # Project overview
├─ service-worker.js # Offline caching (optional)
├─ README.md
└─ package.json # Only if you use a dev server or React
