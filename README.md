# Language Quest — a Spanish + Farsi adventure

A calm, game-like learning app for a 9-year-old. Home shows ONE big door for today's language (the parent sets the week's
mix; default alternate days) and a small "bonus" link to the other. Each door opens a Hyrule Field map with 20 places, and
one big button starts a 15-20 minute daily quest, speaking first:
**mentor greeting → review (≤12, mic-first) → Kaepora's owl story → new words → Kokiri sword training (movement) →
grammar / letters / writing → boss conversation → treasure chest + home mission**. If time runs out, the quest skips straight
to the boss and the chest, so every session ends on a win. Parent information lives only in the Parent corner.

## For Sina (parent quick start)
1. **First visit to the Parent corner** (gear on the home screen): type 0000, then choose your own 4-digit PIN (this can't be skipped).
   A short setup follows:
   - **Allow the microphone** (one tap). Your son answers by talking; if the mic is ever blocked, he simply taps answers, and
     the fix is in Parent corner → Install & help → Microphone.
   - **Which language when?** Spanish every day + Farsi bonus (default), alternate days, Farsi every day + Spanish bonus,
     or choose per weekday. Home shows one big door for today's language (Spanish by default) and a smaller "Bonus: Farsi"
     door below it. The Farsi placement runs the first time he opens the Farsi bonus.
   - Daily quest length (10 / 15 / 20 minutes).
2. **Week mix later:** Parent corner → Settings → "Language of the day" (pick "Choose per weekday" to set Sun–Sat).
3. **Farsi recording queue:** Parent corner → Family voices → "Record the most-used Farsi lines". Each tap records one line and
   stops by itself when you pause; 20 lines per batch (about 300 lines in all). Your recordings replace the computer voice and are
   included in backups.
4. **Ear check:** Family voices → "Ear check (30 clips)": listen, thumbs up or down; every thumbs-down goes into your recording queue.
5. **Weekly card:** Parent corner → This week (minutes, new "I can" goals, a clip of his voice, a phrase for dinner).
6. **Backups:** Parent corner → Backup (download weekly; import asks before replacing).
7. **Farsi spot-check sheet** (for a native speaker; a separate file, not part of this site). Tick rows, add notes, then
   "Export my notes".

**Opening it:** use the GitHub Pages site, or double-click `index.html` in the downloaded folder (everything, including
pictures and Farsi audio, also works from a file on disk; only "install as an app" and offline caching need the website).
**If something looks wrong:** Parent corner → Install & help → Diagnostics lists any file that failed to load. Adding
`?debug=1` to the address shows the same list on screen. The kid's screens never show error messages.
**AI partner:** Parent corner → AI partner → Save key or **Test key** picks the newest available fast (Haiku) model and shows it.

**First Steps (Primeros pasos), new in v7:** the Spanish door now starts with "🌱 It's new to me" (the default) or
"🧭 Test me". First Steps is one learning path of 16 tiny lessons (about 5 minutes, 3–4 new words or one chunk each) in
6 mini-units with "I can" goals: greetings, please/thank you, how are you, my name, numbers 1–10, colors, pets, family,
school things, food, me gusta, tengo ___ años, a review chat, and a champion celebration. Each lesson: 2 quick review
items, meet the words (picture, audio, 🐢 slow, a gesture to do), listen and tap, match, say it (the mic is optional,
Skip is always there), build it (type with letter tiles or tap "Choose instead"), a mini chat, and stars. The big
**🧚 Help** button is always visible (hear it slowly → English → first letter or fewer choices → Type/Choose → the
answer); after 2 misses the answer appears, and that counts as practice. The test can skip ahead; the Hyrule Field map
and the units come after First Steps.

**Family Wallet (shared with Math Arena, Code Quest and Music Quest on this browser):** Language Quest earns Courage
shards (time spent learning, finished lessons and quests, bosses, comebacks, Gold Skulltulas) and shared rupees. A
reward costs a full Triforce (by default 3 shards from each app); claim it in the Treasure Wallet (the mini Triforce in
the top bar) and approve it with your PIN. Spend rupees in the Hyrule Market (the Shop button). Parent corner → Rewards
has the wallet settings, costs, ledger, weekly report and tickets. The shared module is `src/family-wallet.js`
(copied unchanged; its own tests are in `tests/wallet/`).

**Secret Treasures:** 18 hidden Gold Skulltula tokens (golden beetles in the Starlit Grove look): 6 hidden things to find
and 12 hero challenges (most of them in Spanish, including "Finish First Steps" and "Use Help and still finish a lesson").
Each one gives +1 Courage shard in the Family Wallet. The House of Skulltula is the wallet's second tab.

## What it teaches
- **Spanish** (new language, Latin American by default, Spain optional): 20 units, 904 words + 300 phrases,
  ACTFL Novice Mid → Novice High (California World Languages Standards). Grammar sequence: estar for feelings, hay,
  gender/articles, plurals, adjective agreement, ser vs estar, -ar / -er / -ir verbs (singular), tener expressions, gustar,
  hacer for weather, question words, ir a + infinitive, ir, poder, querer; stretch: reflexive routines, preterite, comparatives.
- **Farsi** (understands some, can't read yet): spoken Tehrani first, then standard written forms. 20 units, 705 words +
  260 phrases. Every item has Persian script + transliteration, and the written form whenever it differs from speech
  (mikhâm / mikhâham, khune / khâne). Grammar sequence: pronouns, "is" (-e / ast / hast), personal endings, counting with tâ,
  SOV, present tense with mi-, negation, ezafe, plurals -hâ/-ân, possessive endings, question words; stretch: simple past.
- **Persian letters track**: 13 lessons grouped by shape family (alef/be/pe/te/se, the "lonely" non-connecting letters,
  sin/shin, the cup letters…), positional forms (alone/start/middle/end), which letters connect, optional short-vowel
  marks, tracing with a finger or mouse, reading words he already knows by ear, typing on an on-screen Persian keyboard.
- Levels: Sprout (K-2, units 1-5), Explorer (grade 3, 6-10), Grade 4 core (11-16), Grade 4+ stretch (17-20).
  A 5-minute game-like placement recommends the start; the parent can change it.

## Speaking first, scored kindly
- He answers out loud by default (Chrome speech recognition; hold Space to talk on a Mac). "Tap instead" is always there.
- Kind matching: digits = number words, accents/capitals/¿¡ ignored, every alternative Chrome returns is checked, Farsi
  ی/ي, ک/ك and half-space are normalized, and both the spoken and the written form are accepted.
- A miss is "Navi heard 'X'. Once more?" (choices appear). After 2 misses: "Sounds close! Listen and compare" (Navi, then his own
  recording) and the quest moves on with no penalty. The recognizer never makes him fail.
- Owl story: one story per unit that grows each day (yesterday's part retold + 1-2 new sentences with 2-3 new words, pictures),
  then 3 voice questions (yes/no, either/or, one word) and "Want to hear that again?".
- Farsi as a home language: new words are tested first ("You already knew this one ⭐"), placement celebrates the words he
  already knows, spoken and written forms are both right, Persian script appears only for words made of letters he has
  learned ("You can read 14 words!"), with short-vowel marks while he learns the letters.

## Teaching rules built in
Why? reason chips on about 1 grammar item in 3, and "What was the clue?" after a miss · hints: Navi's question and clue, then one
wrong choice disappears, then Navi plays the answer · after 2 misses the answer is shown with its one-line reason and the item
comes back later as a "comeback" for bonus rupees · Navi says one sentence at a time (tap to skip) · keys 1-4 answer, Enter = next,
tap play twice for 0.7× speed · mistake types tallied for the parent (gender,
verb ending, word order, spelling/accent, wrong word, listening, pronunciation) · adaptive difficulty that moves both ways
(no ratchet) · spaced repetition (Leitner boxes; missed items come back) · a boss per unit (temple bosses give spiritual
stones and medallions) · "I can" map with 3 stars per unit · a certificate per level · weekly "show your family" task ·
a parent report after every quest.

## More to play (inside the map screen)
Rupee shop (the keeper speaks only the target language: he buys by saying "Quiero el escudo, por favor" / "separ ro mikhâm,
lotfan"), Ocarina songbook (each unit's key phrase has its own original 5-8 note tune; play it on the keys, then sing the line to
open the temple door), call-and-response chants with one gesture per line, the free-play ocarina (it recognizes, but never plays,
a few classic songs he may know), power phrases (core chunks like quiero un / me gusta el / mikhâm / dâram recycled with 6-10
hand-picked concrete objects per unit from one shared whitelist in `src/nouns.js`; Spanish uses un/una with want/have/need
and el/la with like/where/look/love), seasonal quests (Shab-e Yalda in December, Nowruz in March), and a weekly "show your family" task.

## Audio
- Spanish: the browser's voices (Chrome on Mac: Google es-US/es-MX; iPhone: Paulina/Mónica; Spain option uses es-ES).
- Farsi: about 3,900 pre-generated clips (every Farsi word, phrase, example sentence, grammar/boss/role-play/song line, owl story,
  greeting, movement command, shop line, power phrase and letter name) with the Piper `fa_IR-ganji-medium` voice, packed into
  MP3 packs of at most 3.3 MB (32 kbps mono).
- Parent tools: a guided recording queue for the ~300 most-used Farsi lines (20 at a time, one tap per line: it stops by itself
  when you pause) and an "ear check" (30 clips, thumbs up/down; thumbs-down lines go into the recording queue).
- Family voices (Parent corner): record any word or phrase; recordings play instead of the computer voice and are included
  in backups.
- Speaking: Chrome speech recognition (es-MX / es-ES / fa-IR) with scoring; elsewhere (e.g. Farsi on iPhone) record-and-compare
  with a self-check.

## Pictures
About 270 painted vocabulary pictures (the team's picture pack, keyed by item) replace emoji for those concepts; emoji stay as the
fallback, and two pictures of the same concept never share a choice set.

## Theme
Zelda: Ocarina of Time remake look from the team's Hyrule kit (Link, Navi, the Great Deku Tree, Saria, Zelda, Impa, Darunia,
Ruto, Malon, Kaepora Gaebora, the temple bosses and Ganondorf; Kokiri Forest hub, Hyrule Field map; rupees, heart containers,
chests, the ocarina). All music is original; the 5-note ocarina is a reward toy with two original secret songs.
The Parent corner "Look" setting switches to the kit's original "Starlit Grove" skin.
*Fan art inspired by The Legend of Zelda: Ocarina of Time. Not affiliated with or endorsed by Nintendo.*

## Install
- iPhone (Safari): Share → Add to Home Screen. Mac (Chrome): install icon in the address bar → Install.
- Works offline after the first load (service worker precaches the app, the kit pack and the Farsi audio packs).

## Data and privacy
All progress stays in this browser: localStorage keys `langQuest.*` (schema version 3, with migrations) and IndexedDB
`langQuest.voices` for family recordings. Save failures show a warning. Parent corner: PIN (the first-visit PIN 0000 must be
changed), reports, settings, family voices, backup download (weekly reminder) and import with confirmation.
The optional AI villager (off by default) uses the shared family key `familyApps.anthropicKey.v1` (plain string), a daily cap
and a usage meter; it calls Anthropic directly from the browser with a kid-safe system prompt. Everything works without it.
In a sandboxed preview frame (no storage) the app runs from memory and says "Preview mode".

## Files
`index.html`, `app.js`, `app.css`, `manifest.webmanifest`, `sw.js`, `icons/`, `fonts/` (OFL fonts from the kit),
`kit/kitpack-1.bin`, `kit/kitpack-2.bin` + `kit/kitpack.json` (kit images), `audio/fa-1..4.mp3pack` + `audio/fa-index.json`
(Farsi audio), `vocabpics/vocabpics_pack1-3.js` (painted vocabulary pictures), `README.md`, `source.zip` (full source, unit and
story JSON, build script, tests, TTS/content tools, translation reviews). 30 files, every file at most 3.5 MB. The build also writes a separate light "preview" variant for the Meta artifact viewer
(static script-tag copies of a smaller kit pack and of the units 1-2 audio, fonts inlined); it is not part of this folder.

## Build from source
```
npm install esbuild react@18 react-dom@18 playwright-core @sparticuz/chromium @fontsource/noto-color-emoji
node build.mjs                      # dist/ (GitHub Pages) + /tmp/lq/preview (artifact-viewer preview build)
node tests/e2e.mjs dist shots/      # headless Chromium walkthrough at 1440x900 and 390x844, screenshots + results.json
python3 tools/build_audio.py --items items_fa.json --out audio/fa   # Farsi audio packs (Piper fa_IR-ganji-medium)
```
