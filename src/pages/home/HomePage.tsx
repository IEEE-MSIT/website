import About from "./components/About";
import ChapterHighlights from "./components/ChapterHighlights";
import Community from "./components/Community";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Hackathons from "./components/Hackathons";
import Hero from "./components/Hero";
import Join from "./components/Join";
import Team from "./components/Team";

const HomePage = () => {
  return (
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
  );
};

export default HomePage;
