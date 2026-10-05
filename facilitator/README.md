# Facilitator notes

Teaching notes for the six classes, written against the rebranded decks (`IJ#Nfinal.pptx`).
Not published to the site.

- `class-N.md` — one file per class: Teacher Intro, Class Intro, Head, Hand, Heart, Group Time Handoff,
  slide by slide, timed to the 60-minute teaching hour. `⚑ Review` marks material added beyond the
  slides, site articles and the original notes.
- `tools/notes_to_pptx.py` — checks each file (every slide covered in deck order, sections total 60 min)
  and writes the notes into a copy of the deck's presenter notes as `IJ#N-notes.pptx`, next to the original.

```sh
pip install python-pptx
python facilitator/tools/notes_to_pptx.py "~/Downloads/Class Extended - Rebranded" --check   # validate only
python facilitator/tools/notes_to_pptx.py "~/Downloads/Class Extended - Rebranded"           # write decks
```
