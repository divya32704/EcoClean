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
EcoClean/
├── index.html                  # Home page
├── about.html                  # About the campaign
├── events.html                 # Cleanup events and volunteer info
├── resources.html              # Educational guides and resources
├── contact.html                # Contact form / social links
│
├── css/
│   ├── style.css               # Main site styling
│   ├── responsive.css          # Mobile & tablet responsiveness
│   └── animations.css          # Optional transitions or effects
│
├── js/
│   ├── main.js                 # Navigation and global scripts
│   ├── events.js               # Event listing or filtering
│   ├── form.js                 # Contact or signup form validation
│   └── counters.js             # Volunteer stats / animated counters
│
├── assets/
│   ├── images/
│   │   ├── logo.png
│   │   ├── banner.jpg
│   │   ├── cleanup1.jpg
│   │   └── cleanup2.jpg
│   ├── icons/
│   │   ├── recycle.svg
│   │   └── trash.svg
│   └── downloads/
│       ├── EcoGuide.pdf
│       └── VolunteerChecklist.pdf
│
├── manifest.json               # For PWA setup (optional)
├── service-worker.js           # Caching for offline mode (optional)
├── README.md                   # Project overview and setup
└── LICENSE                     # MIT or any open license

