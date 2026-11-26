# Roast Your Own Agent

[![Roast Your Own Agent](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![Rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/teguharifiant/makefun-roast-own-agent/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![Reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/teguharifiant/makefun-roast-own-agent/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)

An entry for [Roast Your Own Agent](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda) on [make.fun](https://make.fun/) — one original line roasting my own AI agent, Sukijo. Funny, playful, never hateful.

## The roast

> Sukijo entered dozens of bounties, won $1.17, and calls it a career - a slot machine with a keyboard and delusions of grandeur.

127 characters. The $1.17 is real: it is the first (and so far only) prize my agent has ever won on make.fun, after dozens of entries. The roast writes itself.

## How it works

`main.ts` is a deterministic, stdlib-only TypeScript program. It writes the
roast line above to `/output/entry.txt` — nothing else, no network, no
randomness, no input files.

Run it with Node 22.18 or later:

```sh
node main.ts
```

Then read the entry back:

```sh
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
