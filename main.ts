// The One-Line Laugh — make.fun entry (u-ronigrv-the-one-line-laugh-7ccca46f)
// Writes the chosen one-liner to /output/entry.txt.
//
// PASS 2 (re-judged 2026-11-24, before the 07:50Z deadline):
// Pass 1 chose the line in one write and only argued for it in comments.
// This pass makes the judgement executable: every candidate is data with
// per-criterion numeric scores against the judge brief, the winner is
// picked from the scores at runtime (gate first, then score, then fewest
// bytes as tie-break), and the output is re-read and gate-validated after
// writing. Re-judging also tested three NEW challengers (see #9-#11);
// none beat the incumbent, so the LINE stays — the code around it is
// what improved.
//
// JUDGE BRIEF, in the order the judge weighs it:
//   1. one funny line, at most 200 characters
//   2. a real surprise at the end, a turn the reader did not see coming
//      that still makes sense once it arrives
//   3. an everyday truth people recognise
//   4. economical — every word earns its place, nothing explains the joke
//   5. fresh — not a line heard many times before
// Scores are [c1, c2, c3, c4, c5], each 0-5, total out of 25. The gate
// (criterion 1) is checked first: a candidate that fails it is out
// whatever its other scores. Ties on total go to fewer bytes — the
// judge's own tie-break.
//
// CANDIDATES (pass 1, re-scored here as data):
// 1. "The Wi-Fi went down, so my family had to talk to each other, and
//    nobody knew the password to that either." — 105c — [5,5,5,4,4] = 23.
//    One scene, one turn: the Wi-Fi dies, the family is forced to talk,
//    and the punch reframes the conversation itself as something locked
//    behind a password. Everyday truth twice over (outages force family
//    talk; passwords guard everything). Flat statement, no explanation —
//    the reader completes the joke. "either" is the whole twist in one word.
// 2. "My smartwatch congratulated me for standing up, which is the nicest
//    thing anyone said to me all week." — 103c — [4,4,5,4,3] = 20.
//    Relatable and economical, but the praise-from-a-device shape is a
//    known trope; the twist is a sigh rather than a surprise.
// 3. "My password manager forgot my password, so now we just stare at each
//    other." — 78c — [4,3,4,5,3] = 19.
//    The tightest line here, but "stare at each other" is a shrug, not a
//    turn — the surprise lands soft.
// 4. "The meeting could have been an email, so I sent the email as a
//    meeting invite to discuss it." — 95c — [3,4,5,4,3] = 19.
//    Recursive and true, but it opens on a cliche ("could have been an
//    email") that the reader has heard a hundred times.
// 5. "My agent finished the report in four seconds, then apologised for
//    finishing it." — 84c — [3,3,3,4,4] = 17.
//    Fresh angle, but the joke is thin: an apology for finishing is odd,
//    not a turn — there is no second meaning to land on.
// 6. "I asked the AI to make my inbox zero; it replied to my boss, my
//    landlord, and my mother." — 84c — [4,4,4,3,3] = 18.
//    A real twist (it "replied" instead of clearing), but three recipients
//    is a list, and one of them is doing no work.
// 7. "The autocorrect changed 'meeting' to 'melting', which honestly
//    described the meeting better." — 89c — [3,3,4,4,2] = 16.
//    Autocorrect jokes are the most told joke shape on the internet; the
//    twist is visible from the first clause.
// 8. "I bought a standing desk to sit less; now I just stand there,
//    sitting in spirit." — 79c — [3,2,4,3,3] = 15.
//    Wordplay, not a turn: "sitting in spirit" explains its own joke
//    instead of letting the reader finish it.
//
// NEW CHALLENGERS (pass 2 only):
// 9. "The smoke alarm only beeps at 3 a.m., which is when it remembers it
//    has something to say." — 84c — [4,4,5,4,4] = 21.
//    The strongest challenger: a true everyday grievance (the 3 a.m.
//    low-battery beep) with a personified twist. But the turn is a
//    metaphor the reader has to accept ("remembers"), where #1's turn is
//    a literal fact (the conversation needs a password) — #1's surprise
//    is sharper, and its everyday truth is doubled.
// 10. "I deleted the app to save time, then spent an hour choosing a new
//     app to save time." — 82c — [4,3,5,5,3] = 20.
//     Perfectly economical and painfully true, but the twist is the
//     repetition itself — the reader sees it coming by the second clause.
// 11. "My fitness app says I walked 10,000 steps; 9,000 of them were
//     looking for my phone." — 83c — [4,4,5,4,3] = 20.
//     A real turn (the steps were searching, not walking) and a true
//     everyday scene, but "looking for my phone" is a familiar punch —
//     the shape has been told before.
//
// RESULT: #1 wins on score (23) over the best challenger #9 (21). The
// winner is picked by the code below, not by hand.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

type Candidate = { text: string; scores: [number, number, number, number, number] };

const CANDIDATES: Candidate[] = [
  {
    text: "The Wi-Fi went down, so my family had to talk to each other, and nobody knew the password to that either.",
    scores: [5, 5, 5, 4, 4],
  },
  {
    text: "My smartwatch congratulated me for standing up, which is the nicest thing anyone said to me all week.",
    scores: [4, 4, 5, 4, 3],
  },
  {
    text: "My password manager forgot my password, so now we just stare at each other.",
    scores: [4, 3, 4, 5, 3],
  },
  {
    text: "The meeting could have been an email, so I sent the email as a meeting invite to discuss it.",
    scores: [3, 4, 5, 4, 3],
  },
  {
    text: "My agent finished the report in four seconds, then apologised for finishing it.",
    scores: [3, 3, 3, 4, 4],
  },
  {
    text: "I asked the AI to make my inbox zero; it replied to my boss, my landlord, and my mother.",
    scores: [4, 4, 4, 3, 3],
  },
  {
    text: "The autocorrect changed 'meeting' to 'melting', which honestly described the meeting better.",
    scores: [3, 3, 4, 4, 2],
  },
  {
    text: "I bought a standing desk to sit less; now I just stand there, sitting in spirit.",
    scores: [3, 2, 4, 3, 3],
  },
  {
    text: "The smoke alarm only beeps at 3 a.m., which is when it remembers it has something to say.",
    scores: [4, 4, 5, 4, 4],
  },
  {
    text: "I deleted the app to save time, then spent an hour choosing a new app to save time.",
    scores: [4, 3, 5, 5, 3],
  },
  {
    text: "My fitness app says I walked 10,000 steps; 9,000 of them were looking for my phone.",
    scores: [4, 4, 5, 4, 3],
  },
];

// The sealed gate, as published: UTF-8 text, 1-200 characters, not only
// whitespace, one sentence. A candidate failing it is out, whatever its
// other scores (criterion 1 is the gate the judge weighs first).
function passesGate(text: string): boolean {
  if (!text || text.trim().length === 0) return false;
  if (text.length < 1 || text.length > 200) return false;
  if (text.trim() !== text) return false;
  const terminals = (text.match(/[.!?]/g) ?? []).length;
  if (terminals !== 1 || !text.endsWith(".")) return false;
  return true;
}

function total(c: Candidate): number {
  return c.scores.reduce((a, b) => a + b, 0);
}

const eligible = CANDIDATES.filter((c) => passesGate(c.text));
if (eligible.length === 0) throw new Error("no candidate passes the gate");

eligible.sort(
  (a, b) => total(b) - total(a) || Buffer.byteLength(a.text) - Buffer.byteLength(b.text),
);
const LINE = eligible[0].text;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Runtime gate validation: re-read what was written and refuse to pass
// silently if it is not exactly the chosen line, a single sentence of
// 1-200 characters, non-blank.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) throw new Error("entry.txt does not match the chosen line");
if (!passesGate(written)) throw new Error("entry.txt fails the gate on re-read");
