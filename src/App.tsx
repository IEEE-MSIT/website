import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatBotComponent from './components/ChatBotComponent';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SEO from './components/SEO';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import HomePage from './pages/home/HomePage';
import FAQPage from './pages/FAQPage';
import NotFoundPage from './pages/NotFoundPage';
import { HOME_PATH, FAQ_PATH } from './constants/paths';

function App() {
  return (
    <BrowserRouter>
      <SEO />
      <ChatBotComponent />
      <Header />
      <Routes>
        <Route path={HOME_PATH} element={<HomePage />} />
        <Route path={FAQ_PATH} element={<FAQPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <PWAInstallPrompt />
    </BrowserRouter>
  );
}

export default App;
