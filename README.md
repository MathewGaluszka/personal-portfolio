# Mathew Galuszka — Personal Portfolio

Personal site for **Mathew Galuszka**, a mechatronics / biomedical engineering student. It is based on [Yuji Sato's React portfolio template](https://github.com/yujisatojr/react-portfolio-template) (MIT). The homepage keeps that layout; project cards open pages inside this site instead of leaving to another website.

This first version uses placeholder project writeups, skills chips, timeline entries, and a placeholder resume PDF. Swap those when the real copy and files are ready. Dark mode is the only theme.

## Run locally on Windows

After this project has a GitHub remote:

```bat
cd C:\
git clone <your-private-repo-url> PersonalPortfolio
cd C:\PersonalPortfolio
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

Requirements: [Node.js](https://nodejs.org/) 18 or newer.

## What is on the site

- Hero with LinkedIn, Resume, and GitHub above the name
- Skills in three groups: Electrical, Software, Mechanical
- History timeline (placeholder rows)
- Four project pages:
  - `/projects/jukebox-robot-arm`
  - `/projects/smarthome-stained-glass-lamp`
  - `/projects/pace-plus-plus`
  - `/projects/walk-n-roll`
- Contact form that opens a mail draft to `mgaluszka23@gmail.com`

## Where to edit content

| What | File |
| --- | --- |
| Name, headline, email, LinkedIn, GitHub | `src/data/site.ts` |
| Project titles, summaries, writeups, demo/GitHub URLs | `src/data/projects.ts` |
| Skills chips | `src/components/Expertise.tsx` |
| Timeline | `src/components/Timeline.tsx` |
| Resume PDF | replace `public/resume.pdf` |
| Photo | replace `public/avatar.svg` (or point `src/components/Main.tsx` at a photo) |

Adding a fifth project is a new object in `src/data/projects.ts`. Optional `liveUrl` and `githubUrl` fields show buttons on that project's page.

## Scripts

```bash
npm start    # development server
npm test     # unit tests
npm run build
```

## License

Template code is MIT, copyright Yuji Sato. See `LICENSE`.
