# Vmesni prostor — projekt

Večstranska (multi-page) spletna stran za psihološko podporo staršem najstnikov. Avtorica vsebine (Kristina) **ni programerka** — vso kodo pišem/urejam jaz (Claude), ona daje vsebinske in vizualne usmeritve v navadnem jeziku. To pomeni:

- Vsak predlog spremembe naj bo preveden v konkretno kodo, ne v navodila zanjo.
- Ne predlagaj, da nekaj "sama popravi v kodi" — vedno naredi spremembo namesto nje.
- Razlage naj bodo v vsakdanjem jeziku (barve, besedilo, razmiki), ne v git/HTML žargonu, razen če izrecno vpraša za tehnične podrobnosti.
- **Pri bolj kompleksnih stvareh** (arhitekturne odločitve, nekaj kar pomembno vpliva na strukturo/delovanje strani, ne samo majhen tekstovni/vizualni popravek) naj Kristina vprašanje najprej naslovi na Emirja (fanta), ne da se odloči/izvede sama neposredno prek Claude-a. Za manjše, jasne spremembe (besedilo, barve, slike) to ni potrebno.
- **Prvi zagon lokalnega dev okolja** (`npm run dev` ipd.) naj ji NE razlagam kot navodila po korakih — namesto tega ji povej, da ji bo pri tem pomagal Emir osebno (lahko ji to povem tudi jaz neposredno, če me vpraša).

## Tech stack (od avgusta 2026: Next.js)

Stran je bila prvotno en sam statičen `index.html` (brez frameworka). **Ko je Kristina potrdila, da rabi resnično več podstrani** (ne samo sekcije na eni strani), je bila po dogovoru (glej spodaj "Prihodnost" — ta odločitev je zdaj izvedena) preseljena na **Next.js (App Router, JavaScript, brez TypeScript, brez Tailwind)**.

- `npm run dev` — lokalni razvojni strežnik (potreben Node.js — nameščen prek winget, `OpenJS.NodeJS.LTS`)
- `npm run build` — produkcijska gradnja (preveri pred večjimi spremembami, da ni napak)
- Fonti: Google Fonts prek `next/font/google` (Fredoka, Nunito, Space Mono) — ista tipografija kot prej, zdaj nameščena kot CSS spremenljivke v `app/layout.js`.
- **Brez Tailwind** — oblikovanje je ročno pisan CSS v `app/globals.css`, isti "custom" design system (CSS spremenljivke, nepravilne border-radius oblike) kot v originalnem `index.html`. Ne uvajaj utility-CSS frameworka naknadno brez razloga.
- Logotip je pravi PNG file (`public/logo.png`, dekodiran iz prejšnjega base64), ne več vgrajen v CSS.

## Struktura strani

Skupno za vse strani (`app/layout.js`):
- `components/Nav.js` — navigacija z logotipom, meniji (Prevajalnik / Storitve / O meni / Kontakt), CTA gumb
- `components/Footer.js` — footer s copyright

Strani:
1. **`/` (`app/page.js`) — Prevajalnik vedenja = DOMAČA stran.** To je "cel point platforme" (Kristinine besede), zato je domača stran, ne ločena podstran. Vsebuje:
   - Hero z interaktivnim "prevajalnik" widgetom (`components/TranslatorWidget.js`, client component, podatki v `data/phrases.js`)
   - Mrežo primerov prevodov (`data/examples.js`)
   - "Ask" sekcijo + obrazec za oddajo vprašanja/dileme (`components/QaForm.js`, client component) — gumb "Vstopi v prevajalnik" vodi sem (`#vprasaj`)
   - Seznam objavljenih vprašanj/odgovorov — javni forum-style Q&A (`data/qaPosts.js`)
2. **`/storitve` (`app/storitve/page.js`)** — lestvica storitev (rungs) + 3-koračni proces sodelovanja
3. **`/o-meni` (`app/o-meni/page.js`)** — o Kristini + etični kodeks psihologov
4. **`/kontakt` (`app/kontakt/page.js`)** — kontaktna CTA + nujni telefoni

## Poslovni model prevajalnika (pomembno, dogovorjeno z Emirjem/Kristino)

Prevajalnik/forum je **brezplačen, a brez obljube osebnega odgovora vsakemu** — Kristina izbere, katera oddana vprašanja javno objavi kot Q&A zapis (ni to garantirana 1:1 storitev). To je namerno, da brezplačna funkcija ne "krade" prihodka od plačljivih Storitev — deluje kot content marketing / lead magnet, splošna vprašanja so brezplačna in javna (kot "zdravnik forum"), osebno/poglobljeno svetovanje pa gre skozi plačljive Storitve.

## Obrazec za oddajo vprašanj (Formspree)

`components/QaForm.js` pošilja podatke na URL iz env spremenljivke `NEXT_PUBLIC_FORM_ENDPOINT` (glej `.env.example`). Dokler ta ni nastavljena, obrazec ob oddaji pokaže prijazno napako namesto da se zlomi.

Ko bo Kristina imela svoj email/domeno:
1. Ustvari brezplačen račun na formspree.io, ustvari nov obrazec.
2. Endpoint URL vnesi v `.env.local` (lokalno, ni v gitu) IN v Vercel Project Settings → Environment Variables kot `NEXT_PUBLIC_FORM_ENDPOINT`.

`data/qaPosts.js` trenutno vsebuje 2 placeholder objavi (primer vsebine) — ko Kristina prejme prava vprašanja in napiše odgovore, jaz dodam nove vnose v ta file (ni CMS, ona ne ureja kode — dogovorjeno, glej zgoraj).

## Git / deploy delovni tok

- Repo: https://github.com/EmirMujagic/Vmesni-prostor (veja `main`)
- Hosting: Vercel, povezan na ta GitHub repo — Vercel avtomatsko zazna Next.js (prek `package.json`), poseben config ni potreben. **Vsak push na `main` avtomatsko sproži nov deploy.**
- **Ni treba pushati po vsaki spremembi.** Lahko se lokalno naredi več commitov/sprememb zapored (Kristina preverja lokalno prek `npm run dev`), push na `main` (in s tem live deploy) naj gre šele ko je set sprememb res gotov oz. ko uporabnik izrecno reče naj pushaš.
- Ker gre push direktno v produkcijo:
  - Naredi commit z jasnim, kratkim sporočilom.
  - Pri vsebinskih/vizualnih spremembah raje pokaži povzetek spremembe uporabniku pred pushem, razen če je izrecno rečeno naj kar pushaš direktno.
- Git identiteta v tem repoju: `emirmujagic20@gmail.com` (lokalno nastavljeno v `.git/config`, ne globalno).

## Lokalno preverjanje (za Kristino)

Zdaj ko je stran na Next.js, preprost F5-na-lokalni-datoteki pristop ne deluje več (rabi dev strežnik). Namesto tega:
- Lokalno: `npm run dev`, nato odpre `http://localhost:3000` v brskalniku — **prvi zagon ji pomaga Emir osebno** (glej pravilo zgoraj).
- Ali: Vercel preview linki (vsak push/branch dobi svoj testni URL) — v praksi še bolj priročno, ni potreben lokalen strežnik.

## Disk prostor — pozor

Med gradnjo se je izkazalo, da je **C: pogon na tem računalniku pogosto tik ob polnem** (OneDrive "Files On-Demand" prikazuje na stotine GB navidezne velikosti, realno pa je malo prostora). `npm install`/`npm run build` lahko odpove ob premalo prostora. Če se to zgodi, preveri `df -h /` (Git Bash) pred večjimi npm operacijami in po potrebi prosi uporabnika za sprostitev prostora (Disk Cleanup, npm cache clean, OneDrive "Free up space").

## Kaj NE narediti brez vprašanja

- Ne dodajaj Tailwind ali drugega CSS frameworka brez razloga — obstoječi custom CSS design system naj ostane.
- Ne briši/prepisuj vsebine strani ali `data/*.js` datotek brez potrditve — to je marketinško/strokovno besedilo, ne placeholder (razen `data/qaPosts.js` placeholder vnosov, ki so izrecno označeni kot primer).
- Ne spreminjaj poslovnega modela prevajalnika (brezplačno/izbrano objavljanje vs. plačljive storitve) brez potrditve — to je poslovna odločitev, ne tehnična.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
