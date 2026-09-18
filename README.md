# Mathew Galuszka — Personal Portfolio

Personal site for **Mathew Galuszka**, a mechatronics / biomedical engineering student. The visual theme is [Chiri](https://github.com/the3ash/astro-chiri) (MIT), reshaped from a blog into a homepage with skills, school, projects, and work experience. Project titles open internal pages. Dates are not shown.

This first version uses placeholder school, skills, work, and project writeups. Swap those when the real copy is ready. Light and dark follow the system setting; there is no theme toggle.

## Run locally on Windows

After this project has a GitHub remote:

```bat
cd C:\
git clone <your-private-repo-url> PersonalPortfolio
cd C:\PersonalPortfolio
pnpm install
pnpm dev
```

Then open the local URL printed in the terminal (usually [http://localhost:4321](http://localhost:4321)).

Requirements: [Node.js](https://nodejs.org/) 18 or newer, and [pnpm](https://pnpm.io/).

```bat
npm install -g pnpm
```

## What is on the site

- Name, headline, and text links: LinkedIn, Resume, GitHub
- Skills: Electrical, Software, Mechanical
- School (placeholder)
- Projects that open their own pages:
  - `/jukebox-robot-arm`
  - `/smarthome-stained-glass-lamp`
  - `/pace-plus-plus`
  - `/walk-n-roll`
- Work experience (placeholder rows)

## Where to edit content

| What | File |
| --- | --- |
| Name, headline, links, skills, school, work | `src/data/portfolio.ts` |
| Site title and theme options | `src/config.ts` |
| Project pages | `src/content/posts/` |
| Resume PDF | replace `public/resume.pdf` |

Adding a fifth project is a new markdown file in `src/content/posts/` with `title` and `order`.

## Scripts

```bash
pnpm dev      # development server
pnpm build    # production build
pnpm preview  # serve the build
```

## License

Chiri theme code is MIT. See `LICENSE`.
