export const metadata = {
  title: "O meni — Vmesni prostor",
  description: "Kristina Cvetković, mag. psihologije — kdo je z vami v Vmesnem prostoru.",
};

export default function OMeniPage() {
  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <span className="eyebrow on-dusk">O meni</span>
          <h1>Kdo je z vami?</h1>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="about-grid">
            <div className="about-card">
              <div className="role">Kristina Cvetković, mag. psihologije</div>
              <p>
                Diplomirala in magistrirala sem na Oddelku za psihologijo Filozofske fakultete Univerze v
                Ljubljani. Zaposlena sem v šolstvu, kjer sem v vsakdanjem stiku z mladostniki — s tem, kar
                jih dejansko obremenjuje, veseli in oblikuje. Delo opravljam pod supervizijo v okviru
                projekta Superpsiholog, trenutno se usposabljam za pridobitev certifikata EuroPsy, sem pa
                že licencirana trenerka programa COOL kids.
              </p>
            </div>
            <div className="about-copy">
              <span className="eyebrow">Zakaj ta prostor obstaja</span>
              <p>
                Starši pogosto nimajo kam iti s &quot;srednje velikimi&quot; skrbmi — tistimi, ki niso
                kriza, a vseeno tarejo. Prostor med &quot;vse je v redu&quot; in &quot;rabimo terapijo&quot;
                je večinoma prazen.
              </p>
              <p>
                Ta prostor je nastal, ker starši redko dobijo konkretno rešitev. Teorije je na voljo veliko
                — člankov, nasvetov, razlag. Teorija je potrebna, vendar ne zadostna. Potreben je most od
                razumevanja do dejanskega koraka, ki ga lahko naredite še danes.
              </p>
              <p>
                Starševstvo ne pozna družbenih slojev — stiske in vprašanja imajo vsi starši, zato si želim,
                da je ta platforma dostopna prav vsem.
              </p>
              <p>
                Ta prostor ne nadomešča psihoterapije. Je podpora in svetovanje — prostor za razumevanje in
                konkretne korake, ne za diagnostiko ali zdravljenje.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Etika in odgovornost</span>
            <h2>Etični kodeks psihologov</h2>
            <p>Etični kodeks psihologov je moje glavno vodilo in temeljno načelo pri vodenju svetovalne prakse.</p>
          </div>
          <div className="ethics-card">
            <p>
              Zavezana sem Etičnemu kodeksu psihologov Slovenije, ki zagotavlja zaupnost, spoštovanje meja
              stroke in odgovorno, strokovno ravnanje v vsakem pogovoru.
            </p>
            <p>Ta zaveza ni formalnost — je temelj zaupanja med nama, na katerega se lahko zanesete pri vsakem koraku.</p>
          </div>
        </div>
      </section>
    </>
  );
}
