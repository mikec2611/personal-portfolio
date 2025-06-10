import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

import Skills from './components/Skills';
import Projects from './components/Projects';



function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}

export default App; 