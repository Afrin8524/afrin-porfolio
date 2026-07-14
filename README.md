# Afrin Fathima — Portfolio

A single-page portfolio built for the Amazon BIL (Brand Innovation Lab) "Design
Technologist I" application. Plain HTML/CSS/JS — no build step, no framework,
no dependencies to install. It uses real GSAP + ScrollTrigger (loaded from a
CDN) to drive the scroll animations, since that's literally the skill the JD
asks for.

## What's in here
```
index.html      → all content lives here (copy is easy to edit)
styles.css      → design tokens + layout (colors/fonts are CSS variables at the top)
script.js       → GSAP scroll-reveal + the left-hand "playhead" timeline rail
```

## 1. Before you send this anywhere — read this
I don't have access to real screenshots of the AJM Motors / Cleaning World /
BNK Services sites, so the "Work" section uses simple wireframe diagrams
("build maps") instead of screenshots. **This is the single biggest thing
to upgrade before you apply.** A portfolio with real visuals will always beat
one with diagrams. Two options, in order of how much they'll help you:

**Option A — screen recordings (best).** Record a 10–15 second scroll-through
of each live site (OBS Studio, or even your phone screen-recording the
browser), trim it, and export a short looping `.mp4` or `.gif`. Drop it into
the `reel-media` div for that project in `index.html`, replacing the `<svg>`
block, e.g.:
```html
<div class="reel-media">
  <video src="assets/ajm-demo.mp4" autoplay muted loop playsinline></video>
</div>
```
If a site is client-owned and you're not sure you can show it publicly,
**check with ERPApps first** — a quick "can I show this in my portfolio,
blurring any client-confidential numbers?" message is worth sending today.

**Option B — static screenshots.** Even a plain screenshot of the homepage,
saved into `assets/` and swapped in as an `<img>`, is a big upgrade over the
wireframe.

If neither is possible in time, the wireframes are a reasonable fallback —
they at least show you can think in systems, which the JD explicitly asks
for ("document page builds, reusable components, implementation patterns").

## 2. Fill in the real links
Search `index.html` for anything you want to swap:
- The `mailto:` and `tel:` links already use your real email/phone from your resume.
- There's no LinkedIn/GitHub link yet — add one to the hero actions and the
  contact section if you have either, recruiters usually look for both.
- If any of the three projects have a public URL (even a staging URL you can
  share), add it as a link on the project title.

## 3. Preview it locally
No build tools needed. Easiest way:
- Double-click `index.html` to open it directly in a browser, **or**
- From a terminal in this folder: `python3 -m http.server 8080`, then visit
  `http://localhost:8080`

## 4. Get a live link (Amazon's email asked for one)
Pick one — both are free and take under 5 minutes:

**Netlify (fastest, no account needed for a quick test):**
1. Go to https://app.netlify.com/drop
2. Drag this whole folder onto the page
3. You'll get a live URL immediately (you can rename it in site settings)

**GitHub Pages (better if you want to keep iterating):**
1. Create a new repo on GitHub, e.g. `afrin-portfolio`
2. Upload `index.html`, `styles.css`, `script.js` (and `assets/` if you add media)
3. Repo Settings → Pages → Deploy from branch → `main` / root
4. Your site goes live at `https://<your-username>.github.io/afrin-portfolio/`

Either way, send **that URL** to Anthea — not the zip file.

## 5. Quick customization notes
- Colors/fonts are all CSS variables at the top of `styles.css` under `:root`
  — change `--ink`, `--paper`, `--accent`, `--signal` to retheme everything at once.
- The left rail timecodes (00:00, 00:12, etc.) are just labels for a visual
  motif — they don't need to be literally accurate, but keep them in
  ascending order if you add/remove sections.
- Everything is one file (`index.html`) top to bottom in this order: Hero →
  Stack → Work (3 case studies) → Experience → Metrics → Contact.

## 6. Before you hit send
- Read it out loud once — case study copy pulls directly from your work
  documentation, but double check nothing reads as an overclaim.
- Check the site on your phone — it's responsive, but always worth a look.
- Test both the email and phone links actually open correctly.
