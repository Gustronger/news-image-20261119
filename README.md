# The World in One Day — 19 November 2026

[![news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/Gustronger/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/Gustronger/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

A one-image summary of the world's news for Thursday, 19 November 2026 —
full-day edition. Riso-poster style: paper cream, ink black, signal red and
deep navy, with a giant red "19" leading the page.

## What's on the poster

- **Lead — Shenzhen:** Donald Trump, Xi Jinping and Vladimir Putin meet in
  the first three-way summit of its kind, with nuclear arms control, Ukraine
  and the Iran conflict on the agenda. No major breakthrough expected.
- **Anthropic IPO:** priced at $83 a share, above the $70–$78 range; about
  $81.3 billion raised, the largest IPO on record, at roughly a $1.5 trillion
  fully diluted value. Shares debut on Nasdaq as ANT today.
- **GTA VI:** a record 3.29 million concurrent viewers on Twitch, beating
  League of Legends' 3.11 million; about 7.89 million combined across
  Twitch, YouTube and Kick in preliminary figures. First reviews: 99/100.
- **Gulf strikes:** Iran fired at a US base in Kuwait and struck Bahrain;
  the US hit a Revolutionary Guard missile site on Qeshm Island. A tanker
  was struck in the Strait of Hormuz; its crew was reported safe.
- **The Hague:** the ICJ delivers its judgment today at 10:00 on Gambia v.
  Myanmar — whether Myanmar committed genocide against the Rohingya. Final,
  no appeal.
- **Cyclone Akvan:** landfall by noon on 20 November between Narsapur and
  Puri; winds 90–100 kmph, gusts to 110; about 50,000 people evacuated in
  Odisha under a red alert.
- **Estonia:** to shut its border with Russia from 1 December, after an
  alleged GRU-commissioned sabotage attempt on drone maker Threod Systems.
- **Also today:** NASA's Voyager 1 believed to have reached a "light-day"
  from Earth; the EU proposes a €45bn loan for Ukraine; hundreds of
  thousands march in Prague for media independence; a general strike disrupts
  ports and factories in Spain; House Democrats nominate Hakeem Jeffries for
  Speaker (251–11); Deutsche Bank investigated after a leak of 15 million+
  internal files.
- **Markets:** Dow −1.11% · Nasdaq +0.42% · Nvidia −2.89%.

## How it is built

`dev-v2/page.html` is the poster source (plain HTML/CSS, 1024×1024). It is
rendered to `entry.png` with headless Chromium, then `main.ts` (Node,
standard library only) copies `entry.png` into the output directory given by
`MAKEFUN_OUTPUT_DIR` (default `/output`), verifying the PNG magic bytes and
the exact byte size. The output directory is created only if missing — it is
never deleted or recreated.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```
