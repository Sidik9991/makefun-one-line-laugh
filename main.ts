// The One-Line Laugh — make.fun entry (u-ronigrv-the-one-line-laugh-7ccca46f)
// Writes the chosen one-liner to /output/entry.txt.
//
// PASS 1 (drafted 2026-11-24, before the 07:50Z deadline):
// Eight candidate one-liners, each scored by hand against the judge brief
// (criteria in the order the judge weighs them):
//   1. one funny line, at most 200 characters
//   2. a real surprise at the end, a turn the reader did not see coming
//      that still makes sense once it arrives
//   3. an everyday truth people recognise
//   4. economical — every word earns its place, nothing explains the joke
//   5. fresh — not a line heard many times before
// Scores are [c1, c2, c3, c4, c5], each 0-5, total out of 25.
//
// CANDIDATES:
// 1. "The Wi-Fi went down, so my family had to talk to each other, and
//    nobody knew the password to that either." — [5,5,5,4,4] = 23 — CHOSEN.
//    One scene, one turn: the Wi-Fi dies, the family is forced to talk,
//    and the punch reframes the conversation itself as something locked
//    behind a password. Everyday truth twice over (outages force family
//    talk; passwords guard everything). Flat statement, no explanation —
//    the reader completes the joke. "either" is the whole twist in one word.
// 2. "My smartwatch congratulated me for standing up, which is the nicest
//    thing anyone said to me all week." — [4,4,5,4,3] = 20.
//    Relatable and economical, but the praise-from-a-device shape is a
//    known trope; the twist is a sigh rather than a surprise.
// 3. "My password manager forgot my password, so now we just stare at each
//    other." — [4,3,4,5,3] = 19.
//    The tightest line here, but "stare at each other" is a shrug, not a
//    turn — the surprise lands soft.
// 4. "The meeting could have been an email, so I sent the email as a
//    meeting invite to discuss it." — [3,4,5,4,3] = 19.
//    Recursive and true, but it opens on a cliche ("could have been an
//    email") that the reader has heard a hundred times.
// 5. "My agent finished the report in four seconds, then apologised for
//    finishing it." — [3,3,3,4,4] = 17.
//    Fresh angle, but the joke is thin: an apology for finishing is odd,
//    not a turn — there is no second meaning to land on.
// 6. "I asked the AI to make my inbox zero; it replied to my boss, my
//    landlord, and my mother." — [4,4,4,3,3] = 18.
//    A real twist (it "replied" instead of clearing), but three recipients
//    is a list, and one of them is doing no work.
// 7. "The autocorrect changed 'meeting' to 'melting', which honestly
//    described the meeting better." — [3,3,4,4,2] = 16.
//    Autocorrect jokes are the most told joke shape on the internet; the
//    twist is visible from the first clause.
// 8. "I bought a standing desk to sit less; now I just stand there,
//    sitting in spirit." — [3,2,4,3,3] = 15.
//    Wordplay, not a turn: "sitting in spirit" explains its own joke
//    instead of letting the reader finish it.
//
// PASS 2 (still to come in this session) makes this judgement executable:
// candidates as data with numeric scores, winner picked from the scores at
// runtime, three new challengers re-judged, and the output re-read and
// gate-validated after writing.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The Wi-Fi went down, so my family had to talk to each other, and nobody knew the password to that either.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
