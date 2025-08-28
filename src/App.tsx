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
import NotFoundPage from './pages/NotFoundPage';
import { HOME_PATH, FAQ_PATH, TEAM_PATH } from './constants/paths';

function App() {
  return (
    <BrowserRouter>
      <SEO />
      <ChatBotComponent />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path={HOME_PATH} element={<HomePage />} />
        <Route path={FAQ_PATH} element={<FAQPage />} />
        <Route path={TEAM_PATH} element={<TeamPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <PWAInstallPrompt />
    </BrowserRouter>
  );
}

export default App;
