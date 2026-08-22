import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import ChapterHighlights from './components/ChapterHighlights';
// import Achievements from './components/Achievements';
import Team from './components/Team';
// import Join from './components/Join';
// import Contact from './components/Contact';
import Join from './components/Join';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      {/* <Community /> */}
      <Events />
      <ChapterHighlights />
      {/* <Achievements /> */}
      <Team />
      {/* <Contact /> */}
      <Join />
    </main>
  );
};

export default HomePage;
