export default function sitemap() {
  const base = "https://vmesni-prostor.vercel.app";
  const routes = ["", "/blog", "/storitve", "/o-meni", "/kontakt"];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
