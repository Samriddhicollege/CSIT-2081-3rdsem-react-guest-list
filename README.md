🎟️ GuestFlow — Event Guest List Manager

A full-featured React application for managing event guest lists with CRUD operations, real-time search, status tracking, and LocalStorage persistence.


Student Information

Name: [Your Name]
Roll Number: [Your Roll Number]
Course / Program: BSc Computer Science / CSIT
Semester / Year: 3rd Semester / 2026


Instructor Information

Instructor Name: [Instructor Name]
Course Title: React Development / Web Technology
College Name: [College Name]


Project Overview

GuestFlow is a web-based Event Guest List Manager developed using React 18 for the frontend with Vite as the build tool.
It allows event organizers to manage guests efficiently — adding, editing, deleting, and tracking RSVP statuses in real time.
Guests can be assigned meal preferences and table numbers, and all data persists automatically in the browser via LocalStorage.
The application features a clean, responsive UI with dark/light mode, live search, filter tabs, and toast notifications.
The main goal is to demonstrate real-world React concepts including custom hooks, component architecture, state management, and side effects.


Objectives

Build a production-quality React application from scratch
Implement full CRUD operations with a clean component hierarchy
Understand and apply React hooks (useState, useEffect, custom hooks)
Persist data using LocalStorage without any backend
Apply responsive UI/UX design with dark mode support
Meet all 15 mandatory React project criteria


Technologies Used
Frontend

React 18
JavaScript (ES6+)
HTML5 & CSS3 (with CSS Custom Properties)
Google Fonts (Playfair Display + DM Sans)

Build Tool

Vite 5

Storage

Browser LocalStorage (no backend required)

Other Tools

Git & GitHub
Vercel (Deployment)


Key Features

✅ Component-Based Architecture — 11 reusable components across /components, /pages, /hooks, /utils
✅ Full CRUD Operations — Add, Edit, Delete, and Status-toggle guests
✅ Custom Hook — useGuests() encapsulates all guest logic and localStorage sync
✅ State Management — useState and useEffect throughout
✅ Live Search & Filter — Search by name, email, or phone; filter by status
✅ LocalStorage Persistence — Data survives page refresh automatically
✅ Dark / Light Mode — Theme toggled and saved to localStorage
✅ Input Validation — Name (required), Email (regex), Phone (optional regex)
✅ 2-Step Delete — Click once to warn, click again to confirm
✅ Toast Notifications — Success/error feedback on every action
✅ Stats Dashboard — Live counts of Total, Confirmed, Pending, Declined guests
✅ Responsive Design — Works on mobile, tablet, and desktop


Screens / Modules

Header — Brand logo, dark mode toggle, Add Guest button
Stats Bar — 4 live stat cards (Total, Confirmed, Pending, Declined)
Guest Form — Add / Edit form with validation (name, email, phone, meal, table, notes)
Search & Filter Bar — Live search input + status filter tabs
Guest List — Animated list of guest cards with status badges
Guest Item — Individual card with edit, delete, and status toggle
Empty State — Friendly message when no guests or no search results


Installation & Setup
bash# Clone repository
git clone https://github.com/Samriddhicollege/CSIT-2081-3rdsem-react-guest-list.git

# Go to project folder
cd CSIT-2081-3rdsem-react-guest-list

# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
Open your browser at http://localhost:5173

Project Structure
/guest-list-app
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                      ← React entry point
    ├── App.jsx                       ← Root component (theme state)
    │
    ├── pages/
    │   └── GuestListPage.jsx         ← Main page, orchestrates all state & handlers
    │
    ├── components/
    │   ├── Header.jsx                ← Brand bar + dark mode toggle + Add button
    │   ├── StatsBar.jsx              ← 4 animated stat cards
    │   ├── GuestForm.jsx             ← Add / Edit guest form with validation
    │   ├── SearchFilterBar.jsx       ← Search input + filter tab pills
    │   ├── GuestList.jsx             ← Maps guests array → GuestItem
    │   ├── GuestItem.jsx             ← Single guest card (avatar, status, actions)
    │   ├── EmptyState.jsx            ← Empty / no-results placeholder
    │   └── Toast.jsx                 ← Auto-dismiss notification popup
    │
    ├── hooks/
    │   └── useGuests.js              ← Custom hook: all CRUD + search + localStorage
    │
    ├── utils/
    │   └── helpers.js                ← generateId, validateGuestForm, formatDate
    │
    └── styles/
        ├── global.css                ← CSS variables, design tokens, shared styles
        ├── header.css
        ├── stats.css
        ├── form.css
        ├── searchfilter.css
        ├── guestlist.css
        ├── guestitem.css
        ├── emptystate.css
        ├── toast.css
        └── page.css

React Concepts Used
ConceptUsage in GuestFlowuseStateguests, searchTerm, filterStatus, showForm, editingGuest, theme, toastuseEffectSync guests to localStorage, sync theme, auto-dismiss toastCustom HookuseGuests() — all guest logic extracted into a reusable hookPropsData + function props passed from parent to all child components.map() + KeysGuestList maps guests array with unique guest_id keysConditional RenderingEmptyState, Toast, confirmDelete ternary, isEditing ternaryEvent HandlingonClick, onChange, onSubmit across all interactive componentsComponent ArchitectureApp → GuestListPage → Components — strict separation of concerns

LocalStorage Implementation
js// Read on first render (lazy initializer)
const [guests, setGuests] = useState(() => {
  const stored = localStorage.getItem("guestapp_guests");
  return stored ? JSON.parse(stored) : [];
});

// Write on every state change
useEffect(() => {
  localStorage.setItem("guestapp_guests", JSON.stringify(guests));
}, [guests]);
Two keys are stored:

guestapp_guests — JSON array of all guest objects
guestapp_theme — "light" or "dark" string


GitHub & Live Demo

GitHub Repository: https://github.com/Samriddhicollege/CSIT-2081-3rdsem-react-guest-list
Live Demo (Vercel): (add your Vercel URL here after deployment)


Testing

Tested full CRUD flow — add, edit, delete, status toggle
Verified LocalStorage persistence by refreshing the browser
Tested form validation with empty inputs and invalid email/phone
Verified 2-step delete confirmation behavior
Checked responsive layout on mobile (375px), tablet (768px), and desktop (1280px)
Tested dark/light mode toggle and theme persistence across sessions
Verified live search and filter tabs update list correctly


Challenges Faced

node_modules committed to Git — caused Vercel build failures; fixed with git rm --cached node_modules and a proper .gitignore
Git push rejected — remote had a newer commit (.gitignore added online); resolved with git pull --rebase origin main
Form pre-fill for edit mode — populating GuestForm with existing data required a useEffect watching the initialData prop
State update timing — useState setters are async; learned not to read state immediately after calling the setter
Dark mode flicker — theme briefly flashed on load; fixed by reading localStorage in the useState lazy initializer instead of useEffect


Future Enhancements

Add backend integration (Node.js + Express + MongoDB) for cloud storage and multi-device sync
Implement user authentication with JWT so each organizer has a private guest list
Add email invitation sending via Nodemailer or SendGrid
Build an analytics dashboard with charts (attendance rate, meal distribution, table fill)
Develop a React Native mobile app with push notifications for RSVPs
Add QR code check-in system for event day guest verification


Acknowledgement

I would like to thank my instructor for their guidance and support throughout this project.
This project helped me understand real-world React development beyond tutorials — from component design to deployment.


Declaration

I hereby declare that this project — GuestFlow — is my original work and has been completed as part of my academic submission for the React Development course in the 3rd Semester of BSc CSIT, 2026.

