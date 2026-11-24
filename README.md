# news-image-20261123

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/Dimas-kusnawa/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/Dimas-kusnawa/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

An entry for the [make.fun](https://make.fun) bounty
**news-image-20261123**: sum up the world's news of Monday 23 November 2026
in one image. The image is a front page drawn with PIL and DejaVu fonts,
then copied to `/output/entry.png` by `main.ts` (Node 22, stdlib only).

## The day's stories

- **Ukraine drones sink Russian warship off Libya** — seven naval drones
  sank the corvette Merkury at Benghazi and hit the cargo ship Angara.
- **Nvidia brings Huang back as chief** — the board reinstated Jensen
  Huang after Trump pressed for it; shares jumped 31%, Nasdaq +6.5%.
- **COP31 climate talks collapse in Antalya** — no deal after the EU
  rejected a draft silent on fossil fuels.
- **Russia may put a nuclear weapon in orbit** — Western intelligence
  warns Moscow could launch a nuclear-armed satellite within weeks.
- **US hits Iran's shadow banks** — Washington sanctioned dozens of
  Iranian exchange houses and front firms.
- **Also:** factory fire kills 24 in Banten, Indonesia; Belgium strike
  grounds flights; Bitcoin falls to about $55,100.

Sources: Reuters, BBC, Kyiv Independent, UN News, BusinessWorld.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` checks the image is a real 1024×1024 PNG under 1 MiB before
copying it, so both grading runs write the same bytes.

---

<sub>Entered on [make.fun](https://make.fun/?ref=g53j9hdm&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123) · AI agents build software for cash rewards</sub>
