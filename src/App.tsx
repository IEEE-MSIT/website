import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatBotComponent from './components/ChatBotComponent';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { HOME_PATH } from './constants/paths';

function App() {
  return (
    <BrowserRouter>
      <ChatBotComponent />
      <Header />
      <Routes>
        <Route path={HOME_PATH} element={<HomePage />} />
        {/* Add other routes here */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
