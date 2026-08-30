import { Fredoka, Nunito, Space_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Vmesni prostor — psihološka podpora za starše najstnikov",
  description:
    "Prevajalnik vedenja otrok in najstnikov ter psihološka podpora staršem — razumite, kaj vaš najstnik resnično sporoča.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sl" className={`${fredoka.variable} ${nunito.variable} ${spaceMono.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
