import About from './components/About';
import ChapterHighlights from './components/ChapterHighlights';
import Community from './components/Community';
import Events from './components/Events';
import Hero from './components/Hero';
import Join from './components/Join';
import Team from './components/Team';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Community />
      <Events />
      <ChapterHighlights />
      <Team />
      <Join />
    </main>
  );
};

export default HomePage;
