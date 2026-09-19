# mayank.os Frontend

The frontend is the React/Vite portfolio application for Mayank Manohar. It presents the portfolio, projects, skills, contact information, and the Manma AI guide in the existing mayank.os interface.

## Features

- Portfolio sections for work, about, skills, Manma, and contact
- Project filtering and project detail modal
- Command palette and dark mode
- Lenis scrolling and existing GSAP interactions
- Devicon technology tiles
- Manma drawer connected to the backend `POST /manma` API

## Tech Stack

- React and React DOM
- Vite
- Tailwind CSS with the Vite plugin
- GSAP and Lenis
- Devicon React components

## Project Structure

```text
src/
  components/       Portfolio and Manma UI components
  context/          Shared portfolio state
  data/             Profile, projects, and skills data
  hooks/             Scroll and command action hooks
  layouts/          Header, footer, and root layout
  services/         Backend API client
  utils/            Shared style helpers
public/assets/      Profile image and resume
```

## Installation

```bash
cd Frontend
npm install
```

## Environment Variables

Copy `.env.example` to `.env`:

```env
VITE_API_URL=http://localhost:5000
```

`VITE_API_URL` is the base URL of the Manma backend. Do not put backend API keys in the frontend environment.

## Local Development

Start the Vite development server:

```bash
npm run dev
```

The local Vite proxy also forwards `/manma` and `/health` to `http://localhost:3000` when the frontend is configured without a custom API URL. For the supplied backend environment, use `VITE_API_URL=http://localhost:5000`.

## Production Build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`. It is ignored by Git and should be generated during deployment.

## Backend API Configuration

Set `VITE_API_URL` to the deployed backend base URL, for example:

```env
VITE_API_URL=https://your-manma-api.example.com
```

The client sends requests to `${VITE_API_URL}/manma`.

## Manma Integration

`src/components/ManmaDrawer.jsx` collects the user message and conversation history. `src/services/manmaApi.js` sends:

```json
{
  "message": "Who is Mayank?",
  "conversation": []
}
```

The frontend consumes the existing response fields: `ok`, `answer`, `sources`, and `projects`.

## Deployment Notes

- Configure `VITE_API_URL` in the frontend build environment.
- Deploy the generated `dist/` directory with a static host that supports SPA fallback to `index.html`.
- Deploy the backend separately and configure its `CLIENT_ORIGIN` to the frontend origin.
- Never commit `.env` files or backend credentials.
