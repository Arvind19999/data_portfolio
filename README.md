# Arbind Sah — Data Engineer Portfolio

A React portfolio built to match the dark editorial layout of the reference
template video, with the content reworked for data engineering.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the built bundle
```

## Editing content

**Everything readable on the site lives in `src/data/site.js`.** Change it there
and every page updates — no component edits needed.

| Export         | Drives                                                        |
| -------------- | ------------------------------------------------------------- |
| `profile`      | Name, role, tagline, bio, email, phone, résumé link, video URL |
| `socials`      | Orbit links in the hero, footer and drawer icons              |
| `stats`        | The animated counters                                         |
| `services`     | Services grid + each service detail page                      |
| `skills`       | Animated progress bars                                        |
| `techStack`    | Grouped technology chips on the About page                    |
| `experience`   | Career timeline                                               |
| `education`    | Education timeline                                            |
| `projects`     | Project grid, filters and each project detail page            |
| `testimonials` | Testimonial slider                                            |
| `pricing`      | Engagement model cards                                        |
| `faqs`         | Accordion on the Home, Services and FAQ pages                 |
| `posts`        | Blog list and each post page                                  |
| `navigation`   | Header menu and its dropdowns                                 |

Adding a project or post is just appending an object with a new `slug` — the
route, the detail page and the generated artwork all follow automatically.

## Pages

`/` · `/about` · `/services` · `/services/:slug` · `/projects` ·
`/projects/:slug` · `/blog` · `/blog/:slug` · `/faq` · `/contact` · 404 catch-all

## Features

Sticky header with hover dropdowns · mobile off-canvas drawer with expandable
submenus · hero with orbiting social ring and video lightbox · scroll-reveal
animations · animated counters and skill bars · touch/keyboard testimonial
slider · filterable project grid · FAQ accordion · validated contact form ·
newsletter signup · back-to-top · per-page titles and meta descriptions ·
responsive down to 390px · `prefers-reduced-motion` support.

## Assets

- `public/images/portrait.png` — hero portrait
- `public/images/about.png` — About page image
- `public/files/Arbind_Sah_Resume.pdf` — served by every "Get Resume" button

Replacing the portrait: the hero frames it in an arch that fades into the page
background (`.hero__portrait-frame` in `src/index.css`). If you swap in a PNG
with a transparent background, drop the `::after` gradient and the
`object-fit`/`filter` rules for a true cut-out.

## Things wired to placeholders

Three spots have no backend and are marked with comments in the source:

- **Contact form** (`src/pages/Contact.jsx`) — validates, then opens the
  visitor's mail client via `mailto:`. Swap for a form service or API route.
- **Newsletter** (`src/components/Newsletter.jsx`) — validates and confirms
  locally; connect your provider's API.
- **Hero video** (`profile.videoUrl` in `src/data/site.js`) — currently a
  placeholder YouTube embed. Point it at your own intro reel.

## Deploying

`npm run build` outputs a static `dist/`. Because routing is client-side, the
host must rewrite unknown paths to `index.html` — `vercel.json` and
`public/_redirects` already cover Vercel and Netlify. For nginx use
`try_files $uri /index.html;`.

## Stack

React 19, React Router 7, Vite. No UI framework and no icon package — the
design system is hand-written CSS in `src/index.css`, icons are inline SVG in
`src/components/Icons.jsx`, and project/blog artwork is generated per slug by
`src/components/ProjectViz.jsx`. Type is Playfair Display + Poppins from Google
Fonts.
