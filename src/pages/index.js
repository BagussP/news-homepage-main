import Nav from "./components/navigasi";
import Hero from "./components/hero";
import New from "./components/new";
import Popular from "./components/popular";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
    className={`p-7 tablet:p-4 ${inter.className}`}
    >
      <Nav />
      <div className="grid grid-cols-[2fr_1fr] gap-5 gap-y-10 tablet:flex flex-col">
        <Hero/>
        <New />
        <Popular />
      </div>
    </main>
  );
}
