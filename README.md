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

- `public/images/portrait.png` — hero portrait, a transparent-background cut-out
- `public/images/about.png` — About page image
- `public/files/Arbind_Sah_Resume.pdf` — served by every "Get Resume" button
- `public/projects_data/<project>/` — screenshots and walkthrough video per project
- `assets_src/` — original, uncompressed captures. **Not served**; kept out of
  `public/` so `npm run build` doesn't ship them.

### Project screenshots and video

A project in `src/data/site.js` can carry an optional `media` block:

```js
media: {
  thumb: { src, width, height },
  video: { src, poster, width, height, length, title, caption },
  shots: [{ src, width, height, span, title, caption }],
}
```

- `thumb` replaces the generated artwork on the project cards (grid and Home).
  Cards crop to 16/11, so pick a shot whose subject sits in the middle.
- With a `video`, the detail page uses it as the hero instead of the generated
  artwork. Nothing of the file downloads until the poster is clicked — the
  `<video>` element is not mounted before then.
- `shots` render below the write-up at full container width; `span: 'full'`
  gives a shot the whole row, anything else pairs two across. Clicking one
  opens the lightbox (arrow keys to step, Escape to close).
- Always set `width`/`height` to the file's real pixel size — that is what
  reserves the space and stops the page jumping as images load.

Prepare a new recording the same way:

```bash
# web copy — 1440px wide, 30fps, no audio track; typically ~85% smaller
ffmpeg -i original.mp4 -vf "scale=1440:-2,fps=30" -c:v libx264 -crf 28 \
  -preset veryfast -pix_fmt yuv420p -movflags +faststart -an walkthrough.mp4

# poster frame
ffmpeg -ss 70 -i original.mp4 -frames:v 1 -vf scale=1440:-2 -q:v 4 \
  walkthrough-poster.jpg
```

Crop screenshots down to their content before adding them — a capture with a
large empty margin reads as a grey slab on the dark page. **Crop off the
browser chrome too**: the URL bar and bookmarks bar expose personal links and
have nothing to do with the work.

```bash
ffmpeg -i raw.png -vf "crop=1852:928:0:74" screen.png    # drop the top 74px
```

Save photo-heavy screens as JPEG (`-q:v 3`) and flat UI screens as PNG — the
same capture can be 4× larger in the wrong format.

Replacing the portrait: use a PNG with a **real alpha channel**. Exports from
background-remover previews often bake the grey checkerboard into the pixels
instead — that renders as a visible checkerboard on the page. Size it around
1100px wide; the hero scales it and adds a drop shadow plus a soft fade at the
bottom edge (`.hero__portrait` in `src/index.css`).

### The hero social ring

`.hero__orbit` (the drawn circle) and `.hero__socials` (the links) are
**siblings sharing identical geometry**, and each link is placed at an angle
from `ORBIT_ANGLES` in `src/components/Hero.jsx` — so the line always threads
exactly through every icon, however many you have. Add or remove entries in
`socials` and add a matching angle (0° is due right, negative is upward).

They have to stay siblings: the centring `transform` creates a stacking
context, so nesting the links inside the ring hides them behind the portrait.

## Things wired to placeholders

The Facebook and Fiverr entries in `socials` (`src/data/site.js`) point at
placeholder URLs — replace them with your real profile and gig links.

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
