import Link from "next/link";
import TranslatorWidget from "../components/TranslatorWidget";
import QaForm from "../components/QaForm";
import { examples } from "../data/examples";
import { qaPosts } from "../data/qaPosts";

export default function HomePage() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <span className="eyebrow on-dusk">Psihološka podpora za starše</span>
              <h1>
                Otroci in najstniki govorijo v svojem jeziku. Pomagam vam <em>ga razumeti</em>.
              </h1>
              <p className="lede">
                Starševstvo je ena najbolj zahtevnih vlog, ki od nas zahteva ogromno veščin, znanja in
                čustvene prožnosti. Tako kot se naučimo hoditi in govoriti, se lahko naučimo tudi veščin,
                ki nas opolnomočijo v eni od najbolj zahtevnih vlog. Tukaj je varen prostor za starše, ki
                iščejo konkretne rešitve in si želijo bolje razumeti svoje otroke. Psihologija otrok in
                mladostnikov, prevedena v jezik vsakdanjih večerov.
              </p>
              <div className="hero-ctas">
                <a className="btn-primary" href="#vprasaj">
                  Vstopi v prevajalnik
                </a>
                <Link className="btn-ghost on-dusk" href="/storitve">
                  Poglej storitve
                </Link>
              </div>
            </div>
            <TranslatorWidget />
          </div>
        </div>
      </header>

      <section className="archive">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Brezplačno · nov prevod vsak teden</span>
            <h2>Prevajalnik vedenja otrok in najstnikov</h2>
            <p>
              Kratki zapisi, ki pogosto vedenje otrok in najstnikov prevajajo v razumljiv jezik za starše
              skozi razvojno psihologijo in druge relevantne vidike psihologije.
            </p>
          </div>

          <div className="archive-grid">
            {examples.map((ex) => (
              <div className="archive-card" key={ex.quote}>
                <div className="tag">{ex.tag}</div>
                <h3>{ex.quote}</h3>
                <p>{ex.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="ask-box">
            <div>
              <span className="eyebrow on-dusk">Zastavi vprašanje</span>
              <h2>Imaš svoje vprašanje ali dilemo?</h2>
              <p>
                Napiši splošno vprašanje ali dilemo — izbrana vprašanja javno obravnavam spodaj, brez
                razkritja tvojega imena. Za osebno, poglobljeno svetovanje si oglej{" "}
                <Link href="/storitve" style={{ color: "inherit", textDecoration: "underline" }}>
                  storitve
                </Link>
                .
              </p>
            </div>
            <div className="ask-note">
              <strong>Ta obrazec ne nadomešča nujne pomoči</strong>
              Če gre za akutno stisko, samopoškodovanje ali ogroženost, poglej kontaktne podatke za nujno
              pomoč na strani{" "}
              <Link href="/kontakt" style={{ color: "inherit", textDecoration: "underline" }}>
                Kontakt
              </Link>
              .
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Vprašaj</span>
            <h2>Pošlji vprašanje</h2>
          </div>
          <QaForm />
        </div>
      </section>

      <section className="archive">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Objavljeno</span>
            <h2>Vprašanja bralcev in odgovori</h2>
          </div>
          <div className="qa-list">
            {qaPosts.map((post, i) => (
              <div className="qa-post" key={i}>
                <span className="qa-date">{post.date}</span>
                <div className="qa-question">{post.question}</div>
                {post.answer.map((para, j) => (
                  <p className="qa-answer" key={j}>
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
