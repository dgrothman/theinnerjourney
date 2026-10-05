# The Inner Journey — www.theinnerjourney.training

Astro static site. Deploys to GitHub Pages (`gh-pages` branch) on push to `master`.

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # astro build + Pagefind search index → dist/
```

## Each new term

Edit `src/data/site.ts` → `TERM` (dates, time, location, signup link). Set `TERM = null` between terms;
the home page switches to "new dates coming soon" (it also does this on its own once the last class has passed).

Add recordings to `src/data/audio.ts`. Replace handouts in `public/handouts/class-N.pdf`.

## Content

- `src/content/articles/<topic>/<slug>.md` — topic library articles. The file name is the URL slug;
  frontmatter sets `title`, `topic`, `group` (section on the topic page) and `order`.
- `src/data/topics.ts` — the five core symptoms, their intros and groups.
- `src/data/classes.ts` — the six weekly sessions and their reading lists.
- `src/data/resources.ts` — reading list, tagged by topic.
- `src/data/redirects.json` — old MkDocs URLs → new pages.
- `facilitator/` — teaching notes. Not published.
