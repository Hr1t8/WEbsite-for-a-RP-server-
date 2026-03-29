import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './sections/TopBar';
import Header from './sections/Header';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import News from './sections/News';
import Documents from './sections/Documents';
import Organizations from './sections/Organizations';
import Contacts from './sections/Contacts';
import Footer from './sections/Footer';
import MedicalExaminations from './pages/MedicalExaminations';
import './App.css';

function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <TopBar />
      <Header />
      <Navigation isSticky={isScrolled} />
      <main>
        <Hero />
        <Services />
        <News />
        <Documents />
        <Organizations />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profosmotry" element={<MedicalExaminations />} />
      </Routes>
    </Router>
  );
}

export default App;
