import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import TheVault from "@/components/TheVault";
import RatingSection from "@/components/RatingSection";
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
        <RatingSection />
        <Loadout />
      </main>
      <Footer />
    </>
  );
}
