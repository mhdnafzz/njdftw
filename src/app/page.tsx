import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import TheVault from "@/components/TheVault";
import Loadout from "@/components/Loadout";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <TheVault />
        <Loadout />
      </main>
      <Footer />
    </>
  );
}
