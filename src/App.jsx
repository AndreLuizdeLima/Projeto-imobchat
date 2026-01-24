import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect } from 'react';
import Home from "./pages/Home.jsx";
import Planos from "./pages/Planos.jsx";
import Contato from "./pages/Contato.jsx";
import PoliticaEPrivacidade from "./pages/PoliticaEPrivacidade.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path='/' element={<PageWrapper><Home /></PageWrapper>} />
          <Route path='/planos' element={<PageWrapper><Planos /></PageWrapper>} />
          <Route path='/contato' element={<PageWrapper><Contato /></PageWrapper>} />
          <Route path='/politica-de-privacidade' element={<PageWrapper><PoliticaEPrivacidade /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App
