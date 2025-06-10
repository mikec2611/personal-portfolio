import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <WorkHistory />
        <Education />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App; 