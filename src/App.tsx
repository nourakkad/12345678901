import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import OurStory from './components/OurStory';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Cocktails from './components/Cocktails';
import WhereToBuy from './components/WhereToBuy';
import AgeVerification from './components/AgeVerification';
import { getLangFromPath } from './utils/i18n';

function DirectionSetter() {
  const location = useLocation();
  useEffect(() => {
    const lang = getLangFromPath(location.pathname);
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.body.classList.toggle('rtl', dir === 'rtl');
  }, [location.pathname]);
  return null;
}

function App() {
  const [isAgeVerified, setIsAgeVerified] = useState(false); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [showAgeVerification, setShowAgeVerification] = useState(true);

  useEffect(() => {
    const verified = localStorage.getItem('ageVerified');
    if (verified === 'true') {
      setIsAgeVerified(true);
      setShowAgeVerification(false);
    }
  }, []);

  const handleAgeVerification = (isOver18: boolean) => {
    if (isOver18) {
      setIsAgeVerified(true);
      setShowAgeVerification(false);
      localStorage.setItem('ageVerified', 'true');
    } else {
      // Redirect to a different page or show message
      alert('You must be 18 or over to view this content.');
    }
  };

  if (showAgeVerification) {
    return <AgeVerification onVerify={handleAgeVerification} />;
  }

  return (
    <Router>
      <DirectionSetter />
      <div className="App">
        <Navigation />
        <Routes>
          {/* Non-prefixed routes (backward compatibility) */}
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/cocktails" element={<Cocktails />} />
          <Route path="/where-to-buy" element={<WhereToBuy />} />

          {/* Language-prefixed routes */}
          <Route path=":lang/" element={<Home />} />
          <Route path=":lang/our-story" element={<OurStory />} />
          <Route path=":lang/gallery" element={<Gallery />} />
          <Route path=":lang/blog" element={<Blog />} />
          <Route path=":lang/blog/:id" element={<BlogPost />} />
          <Route path=":lang/cocktails" element={<Cocktails />} />
          <Route path=":lang/where-to-buy" element={<WhereToBuy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
