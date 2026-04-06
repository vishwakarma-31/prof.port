import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { CaseStudies } from "@/components/CaseStudies";
import { Process } from "@/components/Process";
import { Trust } from "@/components/Trust";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <Process />
      <Trust />
      <About />
      <Footer />
    </main>
  );
}
