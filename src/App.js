import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.css';

const App = () => {
    return (
        <div className="App">
            <header className="header">
                <h1>Sergio Guerra - Portfolio</h1>
                <nav>
                    <a href="#/">Home</a>
                    <a href="#/about">About</a>
                    <a href="#/projects">Projects</a>
                    <a href="#/contact">Contact</a>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;