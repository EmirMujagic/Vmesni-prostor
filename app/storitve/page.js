export const metadata = {
  title: "Storitve — Vmesni prostor",
  description: "Od hitrega odgovora do rednega spremljanja — psihološko svetovanje za starše najstnikov.",
};

const rungs = [
  {
    tag: "Enkratno",
    title: "Kratek posvet",
    text: "45-minutni video pogovor za eno konkretno dilemo — kadar želite razmisliti na glas in dobiti usmeritev.",
  },
  {
    tag: "Redno",
    title: "Spremljanje skozi obdobje",
    text: "3–5 sej za izzive, ki se ne rešijo v enem pogovoru — sprememba vedenja, daljši konflikt, prehodno obdobje.",
  },
  {
    tag: "Skupinsko",
    title: "Podporna skupina za starše",
    text: "Manjša, redno se sestajajoča skupina staršev — prostor za izmenjavo izkušenj in skupno delo skozi daljše obdobje, pod mojim strokovnim vodstvom.",
  },
];

const steps = [
  {
    eyebrow: "Pogovor",
    title: "Kratek uvodni klepet",
    text: "Na kratko opišete, s čim se soočate. Brezplačno, brez zaveze — namen je razumeti, ali in kako lahko pomagam.",
  },
  {
    eyebrow: "Presoja",
    title: "Skupaj izberemo pravi korak",
    text: "Glede na situacijo predlagam ustrezno stopnjo — pisen odgovor, kratek posvet ali daljše spremljanje. Kadar gre za nujno stisko, vas usmerim k ustrezni strokovni pomoči.",
  },
  {
    eyebrow: "Delo",
    title: "Dejansko svetovanje",
    text: "Rezervirate termin, plačate preko strani, in dobite konkretno, prilagojeno podporo — ne splošnih nasvetov.",
  },
];

export default function StoritvePage() {
  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <span className="eyebrow on-dusk">Plačljivo · svetovanje</span>
          <h1>Od hitrega odgovora do rednega spremljanja</h1>
          <p>Ni nujno, da začnete z največjo zavezo. Vsaka stopnja je samostojna — uporabite tisto, ki ustreza vaši trenutni situaciji.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="services-ladder">
            {rungs.map((r) => (
              <div className="rung" key={r.title}>
                <div className="rung-tag">{r.tag}</div>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Kako poteka</span>
            <h2>Preprosto, brez zapletenega postopka</h2>
          </div>
          <div className="process-grid">
            {steps.map((s) => (
              <div className="process-step" key={s.title}>
                <span className="eyebrow">{s.eyebrow}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
