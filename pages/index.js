import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import WAButton from "../components/WAButton";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Facilities from "../components/Facilities";
import Gallery from "../components/Gallery";
import Achievements from "../components/Achievements";
import News from "../components/News";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Profile />
      <Facilities />
           <Achievements />
      <Gallery />
 
      <News />


      {/* <div className="pt-20">
        <Section id="profil" title="Profil" />
        <Section id="fasilitas" title="Fasilitas" />
        <Section id="galeri" title="Galeri" />
        <Section id="prestasi" title="Prestasi" />
        <Section id="berita" title="Berita" />
      </div> */}
      <Footer />
      <WAButton />
    </>
  );
}