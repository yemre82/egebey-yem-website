import { useState, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/animations/ScrollProgress';
import PageTransition from './components/animations/PageTransition';
import LoadingScreen from './components/animations/LoadingScreen';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Production from './pages/Production';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/hakkimizda" element={<PageTransition><About /></PageTransition>} />
            <Route path="/urunler" element={<PageTransition><Products /></PageTransition>} />
            <Route path="/uretim" element={<PageTransition><Production /></PageTransition>} />
            <Route path="/iletisim" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
