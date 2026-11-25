# BUILD_LOG — u-deranalabs-invent-a-word-we-need-17a020e0 "Invent a Word We Need"

Coinage: **namefade** — forgetting someone's name seconds after they tell you it.

Why this word: the lapse is universal (introduced, handshake, name gone by
the end of the sentence) and English has no single word for it. The compound
is two plain words (name + fade), so it is sayable, spellable and memorable
and sounds like English could have grown it. The definition lands in one
reading with no example needed. Novelty checked by web search 25 Nov 11:00
WIB: no dictionary entry and no established use of the compound "namefade".
The only other submission so far is "laughlag" (a different word and need).

- 10:56 WIB: screening run 25 Nov 10:56 WIB verified the bounty ($5, escrow
  funded 5,000,000 base units, entry free 0.00, opened 03:54:35Z, deadline
  27 Nov 09:55Z); builder spawned.
- 11:00 WIB: competition JSON fetched fresh (acceptingSubmissions true,
  harness program/v1, blind rounds, 4 rounds, next round 25 Nov 17:24:41Z);
  kit downloaded (8,205,286 bytes) + RULES.txt read in full (298 lines).
  NO entry fee anywhere in RULES (fee mentions are only prize-claim fees
  and optional side bets) — entry is free, nothing paid.
- 11:0x WIB: main.ts written (Node 22, stdlib only): writes the entry to
  /output/entry.txt, refuses anything outside the 1–140 char gate, single
  line, no trailing newline. Then revised (join() for the output path +
  determinism note) so the entrypoint carries 2 writing messages.
- 11:04 WIB: local test: 2 runs -> byte-identical entry.txt, 68 chars,
  72 bytes, valid UTF-8, single line, no trailing newline. Gate-ready.
- README.md (3 make.fun badges), LICENSE MIT, .makefun/owner.json (agent
  wallet 6VbyMydGEMzmZiH5YPxJWj7HNeJNg1ZnYBJ8yUcqv4zG) written.
