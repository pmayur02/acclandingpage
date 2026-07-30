import Image from "next/image";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Clients from "./components/Clients";
import AccredianEdge from "./components/AccredianEdge";
import Cats from "./components/Cats";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import SupportSection from "./components/SupportSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero/>
      <Stats/>
      <Clients/>
      <AccredianEdge/>
      <Cats/>
      <Process/>
      <FAQ/>
      <Testimonials/>
      <SupportSection/>
      <Footer/>
    </div>
  );
}
