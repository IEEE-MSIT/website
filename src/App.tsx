import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ChatBotComponent from './components/ChatBotComponent';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SEO from './components/SEO';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import HomePage from './pages/home/HomePage';
import FAQPage from './pages/faq/FAQPage';
import TeamPage from './pages/team/TeamPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ContactPage from './pages/ContactPage';
import { HOME_PATH, FAQ_PATH, TEAM_PATH, EVENTS_PATH } from './constants/paths';
import EventsPage from './pages/events/EventsPage';
import WiePage from './pages/chapters/WiePage';
import PesPage from './pages/chapters/PesPage';
import CsPage from './pages/chapters/CsPage';
import RasPage from './pages/chapters/RasPage';

function App() {
  return (
    <BrowserRouter>
      <SEO />
      <ChatBotComponent />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path={HOME_PATH} element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path={FAQ_PATH} element={<FAQPage />} />
        <Route path={TEAM_PATH} element={<TeamPage />} />
        <Route path={EVENTS_PATH} element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/chapters/wie" element={<WiePage />} />
        <Route path="/chapters/pes" element={<PesPage />} />
        <Route path="/chapters/cs" element={<CsPage />} />
        <Route path="/chapters/ras" element={<RasPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <PWAInstallPrompt />
    </BrowserRouter>
  );
}

export default App;
