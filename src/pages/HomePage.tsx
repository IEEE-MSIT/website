import About from "../components/sections/About";
import ChapterHighlights from "../components/sections/ChapterHighlights";
import Community from "../components/sections/Community";
import Contact from "../components/sections/Contact";
import Events from "../components/sections/Events";
import Footer from "../components/sections/Footer";
import Hackathons from "../components/sections/Hackathons";
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import Join from "../components/sections/Join";
import Team from "../components/sections/Team";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F3] overflow-x-hidden z-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Community />
        <Events />
        <ChapterHighlights />
        <Hackathons />
        <Team />
        <Join />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;