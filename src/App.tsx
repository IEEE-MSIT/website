import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Chat from './components/Chat';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SEO from './components/SEO';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import PageLoader from './components/common/PageLoader';
import { HOME_PATH, FAQ_PATH, TEAM_PATH, EVENTS_PATH } from './constants/paths';

const HomePage = lazy(() => import('./pages/home/HomePage'));
const FAQPage = lazy(() => import('./pages/faq/FAQPage'));
const TeamPage = lazy(() => import('./pages/team/TeamPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const EventsPage = lazy(() => import('./pages/events/EventsPage'));
const WiePage = lazy(() => import('./pages/chapters/WiePage'));
const PesPage = lazy(() => import('./pages/chapters/PesPage'));
const CsPage = lazy(() => import('./pages/chapters/CsPage'));
const RasPage = lazy(() => import('./pages/chapters/RasPage'));

function App() {
  return (
    <BrowserRouter>
      <SEO />
      <ErrorBoundary>
        <Chat />
      </ErrorBoundary>
      <Header />
      <ScrollToTop />
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
      </ErrorBoundary>
      <Footer />
      <PWAInstallPrompt />
    </BrowserRouter>
  );
}

export default App;
