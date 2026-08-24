# User Directory Dashboard

A responsive React dashboard that fetches users from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users), displays them as a searchable grid of cards, and opens a modal with full details on click.

## Running locally

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`. It fetches live data from JSONPlaceholder on load, so an internet connection is required.

Other scripts:

```bash
npm run build    # production build -> dist/
npm run preview  # serve the production build locally
```

## Tailwind vs. Bootstrap

Bootstrap is used only for the page's grid system (`container` / `row` / `col-*`) and the detail modal's structural classes; Tailwind handles all the micro-styling on top, colors, spacing, typography, hover/focus states, and card shadows. This split keeps each library to what it's best at instead of letting them fight over the same properties.
