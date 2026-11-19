# The World in One Day — 19 November 2026

[![news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/Gustronger/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/Gustronger/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

A morning-edition poster that sums up Thursday 19 November 2026's world news
in a single 1024×1024 image: the Trump–Xi–Putin summit in Shenzhen, the
widening US–Iran strikes across the Gulf, the worldwide launch of GTA VI,
Cyclone Akvan bearing down on Odisha, the Fed's hawkish minutes, and Estonia's
plan to close its border with Russia — plus the day's smaller stories and a
markets ticker.

`main.ts` (Node 22, standard library only) writes the image to
`/output/entry.png`. It creates the output directory only when it is missing
and copies the image in, verifying the PNG header and byte size, so the run
is deterministic: the same bytes every time.
