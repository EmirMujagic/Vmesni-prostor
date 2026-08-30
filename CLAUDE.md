# Vmesni prostor — projekt

Enostranska (single-page) marketinška/landing stran za psihološko podporo staršem najstnikov. Avtorica vsebine (Kristina) **ni programerka** — vso kodo pišem/urejam jaz (Claude), ona daje vsebinske in vizualne usmeritve v navadnem jeziku. To pomeni:

- Vsak predlog spremembe naj bo preveden v konkretno kodo, ne v navodila zanjo.
- Ne predlagaj, da nekaj "sama popravi v kodi" — vedno naredi spremembo namesto nje.
- Razlage naj bodo v vsakdanjem jeziku (barve, besedilo, razmiki), ne v git/HTML žargonu, razen če izrecno vpraša za tehnične podrobnosti.
- **Pri bolj kompleksnih stvareh** (arhitekturne odločitve, nekaj kar pomembno vpliva na strukturo/delovanje strani, ne samo majhen tekstovni/vizualni popravek) naj Kristina vprašanje najprej naslovi na Emirja (fanta), ne da se odloči/izvede sama neposredno prek Claude-a. Za manjše, jasne spremembe (besedilo, barve, slike) to ni potrebno.
- **Prvi zagon lokalnega dev okolja** (npr. ko bo treba prvič pognati `npm run dev` / lokalni strežnik, recimo ob prehodu na Next.js) naj ji NE razlagam kot navodila po korakih — namesto tega ji povej, da ji bo pri tem pomagal Emir osebno.

## Tech stack — namerno preprost

- **En sam `index.html`** — brez build orodij, brez frameworka, brez npm/node odvisnosti. To je namerna odločitev: stran mora ostati preprosta za deploy in vzdrževanje brez tehničnega znanja.
- Vse CSS je inline v `<style>` v `<head>`; vse JS je v enem `<script>` na dnu pred `</body>`.
- Fonti: Google Fonts (Fredoka, Nunito, Space Mono) prek `<link>`.
- Logotip je vgrajen kot base64 PNG v CSS (`.eyebrow::before`) in kot `<img>` v navigaciji — ni ločenih slikovnih datotek.
- **Ne uvajaj build koraka** (Vite, bundler, npm paketov ipd.) brez izrecne prošnje — s tem bi se podrl namen "en file, deploy in teče".

## Struktura strani (`index.html`)

Barvna shema in oblikovanje sta definirana kot CSS spremenljivke v `:root` (vrstice ~10–27) — pri spreminjanju barv **vedno spreminjaj tam**, ne posamezne barve po strani.

Sekcije po vrstnem redu (id atributi v oklepaju):
1. `nav` — glava z logotipom in menijem
2. `.hero` (~415–441) — naslovna sekcija + "prevajalnik" widget (interaktiven, glej JS spodaj)
3. `.pillars` (~442–463) — dva "stebra": Prevajalnik vedenja / Storitve
4. `#prevajalnik` (~464–521) — sekcija s primeri prevodov najstniških fraz
5. `#storitve` (~522–557) — lestvica storitev (kratek posvet / spremljanje / podporna skupina), verjetno s cenami
6. `#o-meni` (~558–579) — o avtorici/terapevtki
7. `#etika` (~580–593) — etični kodeks psihologov
8. `#proces` (~594–619) — 3-koračni proces sodelovanja
9. `.contact` `#kontakt` (~620–635) — kontaktni CTA
10. `footer` (~636–641) — copyright

**Interaktivni "prevajalnik" widget**: besedila fraz/pomenov so podvojena na dveh mestih — statično v HTML (sekcija `#prevajalnik`, prikazane kartice) IN v JS `phrases[]` array (dno datoteke, ~vrstica 644), ki poganja hero widget. To sta **ločena seznama** — če se doda/spremeni fraza, preveri ali jo je treba urediti na obeh mestih namensko (hero prikazuje samo prve 4 iz JS arraya, spodnja sekcija prikazuje drug, širši nabor primerov).

## Git / deploy delovni tok

- Repo: https://github.com/EmirMujagic/Vmesni-prostor (veja `main`)
- Hosting: Vercel, povezan na ta GitHub repo — **vsak push na `main` avtomatsko sproži nov deploy**. To pomeni: ko je sprememba potrjena in pushana, je v nekaj minutah živa na produkciji brez dodatnega koraka.
- **Ni treba pushati po vsaki spremembi.** Lahko se lokalno naredi več commitov/sprememb zapored (Kristina preverja lokalno prek F5), push na `main` (in s tem live deploy) naj gre šele ko je set sprememb res gotov oz. ko uporabnik izrecno reče naj pushaš.
- Ker gre push direktno v produkcijo:
  - Naredi commit z jasnim, kratkim sporočilom (kaj se je spremenilo, v slovenščini ali angleščini, ni pomembno).
  - Pri vsebinskih/vizualnih spremembah raje pokaži povzetek spremembe uporabniku pred pushem, razen če je izrecno rečeno naj kar pushaš direktno.
- Git identiteta v tem repoju: `emirmujagic20@gmail.com` (lokalno nastavljeno v `.git/config`, ne globalno).

## Prihodnost: kdaj preiti z enega HTML-ja na framework

Trenutno je stran namerno en sam statičen `index.html` (glej zgoraj). To drži **dokler Kristina ne potrdi, da dejansko rabi več podstrani** (npr. ločen blog/arhiv z več objavami, ločene strani za storitve ipd., ne samo sekcije na eni strani).

Ko se to zgodi:
- **Jaz (Claude) izberem način kodiranja** ob tistem trenutku, glede na takratne dejanske zahteve — ni treba spraševati uporabnika za tehnično odločitev, samo izvedi.
- Trenutna smer razmišljanja (lahko se ob dejanski odločitvi ponovno presodi): **Next.js**, ker Vercel je zanj optimiziran, skupni layout (nav/footer) reši težavo s podvajanjem kode po straneh, deploy ostane enako preprost (push → live).
- Ob selitvi bo treba na tem računalniku najprej namestiti **Node.js** (trenutno ni nameščen).
- Netehnično lokalno preverjanje sprememb (glej zgoraj: F5 na lokalni datoteki) se ob selitvi zamenja z **Vercel preview linki** (vsak push/branch dobi svoj testni URL) — to je za Kristino v praksi enako ali bolj priročno kot lokalna datoteka, ni potreben lokalen dev server.

## Kaj NE narediti brez vprašanja

- Ne spreminjaj imena glavne datoteke (`index.html`) — Vercel jo servira na root URL.
- Ne dodajaj build/paketnega sistema.
- Ne briši/prepisuj vsebine sekcij brez potrditve — to je marketinško besedilo, ne placeholder.
