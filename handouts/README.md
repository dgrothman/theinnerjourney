# Class handouts (source)

`class-N.html` is the editable source for each class handout. Edit the HTML, then build a PDF:

```sh
pnpm handouts        # all six
pnpm handouts 5      # just class 5
```

PDFs land in `handouts/dist/` (not committed). The live site serves `public/handouts/class-N.pdf`;
copy a built PDF there only when you want to publish it.

You can also open `class-N.html` in Chrome and print to PDF (Margins: Default, Background graphics on).

Page size, margins, header (logo, title, page x / y) and footer come from `@page` rules in
`handout.css`. Each file sets its header title in the `<head>`:
`<style>:root { --running: "Class N · Title"; }</style>` — keep it the same as `<title>`
(the `<title>` also becomes the PDF's document title).

## Building blocks

- **Cover** (first thing in `<body>`):
  `<header class="cover"><span class="mark">SVG</span><div class="text"><div class="kicker">Class N handout</div><h1>Title</h1></div><span class="badge">Finding Peace Within</span></header>`
  Marks: class 1 = five-stones logo; 2 Reality, 3 Boundaries, 4 Self Care, 5 Moderation, 6 Self Esteem (see the files).
- Section heading `<h2>` (sub-heading `<h3>`), small uppercase label `<h4>`.
- Source line: `<p class="source"><em>From <strong>Book</strong> by Author</em></p>`.
- Bullets: plain nested `<ul>`; numbered: `<ol>`.
- Prompts with space to write: `<ol class="prompts" style="--write: 0.9in">`.
- Tables: `<table>` with `<th>` header row; fill-in grids add `class="grid"`.
- Page break: `<div class="page"></div>`.
