# Podcast episode art

Square artwork uploaded to each episode in Spotify for Creators. One folder per term:
`source/episode-N.html` is the editable design, `TIJ-<term>-Class-N-episode-art.png` is the rendered upload.

To change a title, edit the `<h1>` in the source HTML, then render:

```sh
node episode-art/render.mjs episode-art/fall-2026/source/episode-6.html episode-art/fall-2026/TIJ-2026-Fall-Class-6-episode-art.png
```

Uses the same Chrome + puppeteer-core as `pnpm handouts`. Fonts load from Google Fonts, so render online.
