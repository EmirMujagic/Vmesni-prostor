import PageHeroAccent from "../../components/PageHeroAccent";

export const metadata = {
  title: "Kontakt — Vmesni prostor",
  description: "Začnimo s kratkim, brezplačnim pogovorom.",
};

export default function KontaktPage() {
  return (
    <section>
      <div className="wrap">
        <div className="contact-box">
          <PageHeroAccent />
          <div>
            <span className="eyebrow on-dusk">Kontakt</span>
            <h2>Začnimo s kratkim, brezplačnim pogovorom.</h2>
            <p>Napišite nekaj besed o tem, kaj vas trenutno skrbi — odgovorim osebno, brez avtomatiziranih predlog.</p>
            <div className="contact-details">
              <a href="mailto:vmesniprostor@gmail.com">vmesniprostor@gmail.com</a>
            </div>
          </div>
          <div className="contact-note">
            <strong>Ta stran ne nadomešča nujne pomoči</strong>
            Če gre za akutno stisko, samopoškodovanje ali ogroženost, pokličite 112 (nujna medicinska
            pomoč), TOM telefon za otroke in mladostnike (116 111, vsak dan 12.–20. ure), Klic v duševni
            stiski (01 520 99 00, 19.–7. ure) ali Zaupni telefon Samarijan (116 123, 24 ur).
          </div>
        </div>
      </div>
    </section>
  );
}
