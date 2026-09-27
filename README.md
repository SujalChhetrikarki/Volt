# VoltDrive EV Store

This project is a beginner-friendly React app for an electric vehicle showroom.

## What this app does

- Shows a homepage with hero content and featured vehicles
- Displays all available EVs with a search and sorting option
- Shows details for each vehicle
- Includes a contact form for test-drive requests
- Uses React Router to switch between pages

## Folder structure

```bash
src/
├── App.jsx              # Main app and route setup
├── main.jsx             # Starts the React app
├── index.css            # All styling for the project
├── components/          # Reusable UI pieces like Navbar, Footer, VehicleCard
├── pages/               # Individual pages: Home, Vehicles, Contact, etc.
├── data/
│   └── vehicles.json    # Product data for all EVs
└── assets/              # Images and static files
```

## How the app works

1. `main.jsx` starts React and renders the app.
2. `App.jsx` sets up the routes for the project.
3. Each page component receives data from `vehicles.json`.
4. Components like `VehicleCard` are reused many times to keep code simple.
5. CSS in `index.css` controls the look of the whole app.

## Basic flow

```text
main.jsx
   ↓
App.jsx
   ↓
Routes (Home / Vehicles / Contact / About)
   ↓
Pages render components
   ↓
Data from vehicles.json
```

## Important files to learn first

- `src/App.jsx` — where the app routes are defined
- `src/pages/Home.jsx` — homepage content
- `src/pages/Vehicles.jsx` — search, filter, and listing logic
- `src/data/vehicles.json` — all vehicle information
- `src/components/VehicleCard.jsx` — card shown for each vehicle

## Run the project

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173/
```

## Beginner tip

Start by reading these files in this order:

1. `src/main.jsx`
2. `src/App.jsx`
3. `src/pages/Home.jsx`
4. `src/pages/Vehicles.jsx`
5. `src/data/vehicles.json`

Once you understand those, the rest of the project becomes much easier to follow.
