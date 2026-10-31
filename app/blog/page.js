import QaList from "../../components/QaList";
import PageHeroAccent from "../../components/PageHeroAccent";

export const metadata = {
  title: "Blog — Vmesni prostor",
  description: "Vprašanja bralcev in odgovori — psihološka podpora staršem najstnikov.",
};

export default function BlogPage() {
  return (
    <>
      <div className="page-hero">
        <PageHeroAccent />
        <div className="wrap">
          <span className="eyebrow on-dusk">Blog</span>
          <h1>Vprašanja bralcev in odgovori</h1>
          <p>
            Nekatera vprašanja in odgovore objavljam javno, ker si želim, da je Vmesni prostor dostopen
            prav vsem staršem — ne le tistim, ki si lahko privoščijo individualno svetovanje. Tako lahko
            od enega vprašanja koristi marsikdo, ki se znajde v podobni situaciji.
          </p>
        </div>
      </div>

      <section className="archive">
        <div className="wrap">
          <QaList />
        </div>
      </section>
    </>
  );
}
