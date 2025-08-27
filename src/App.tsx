import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatBotComponent from './components/ChatBotComponent';
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <BrowserRouter>
      <ChatBotComponent />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;