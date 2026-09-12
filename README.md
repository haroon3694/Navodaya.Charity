# Navodaya Foundation

The Navodaya Foundation website — a React + Vite app.

## Development

```bash
cd web
npm install
npm run dev       # start the dev server
npm run build     # production build -> web/dist
npm run preview   # preview the production build locally
```

## Deploying

Hosted on Firebase Hosting (project `navodayacharity`,
https://navodayacharity.web.app).

```bash
cd web
npm run deploy    # builds, then `firebase deploy --only hosting`
```

Requires being logged in to the Firebase account with access to that
project (`npx firebase login`).

## Project structure

```
web/
  src/
    components/       # Nav, Footer, and shared UI atoms (components/common/)
      home/            # sections used only on the home page
    pages/            # one component per route
    hooks/            # scroll reveal, nav background, counter, parallax
    data/             # site-wide nav/footer data
    assets/images/    # illustrations, icons, portraits
```

## Pages

- `/` — Home
- `/about`, `/founder`, `/programs` — About Navodaya, the founder's story, the three initiatives
- `/for-wildlife`, `/for-girl-empowerment`, `/for-communities` — one page per initiative
- `/impact`, `/blog` — scaffolded routes (see `src/App.jsx`), not yet linked from the nav or
  footer since those pages don't have real content yet — wire them up once they do.
