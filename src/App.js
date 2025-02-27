import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <header className="header">
                    <h1>Sergio Guerra - Portfolio</h1>
                    <nav>
                        <a href="/portfolio-sergio/">Home</a>
                        <a href="/portfolio-sergio/about">About</a>
                        <a href="/portfolio-sergio/projects">Projects</a>
                        <a href="/portfolio-sergio/contact">Contact</a>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/portfolio-sergio/" element={<Home />} />
                        <Route path="/portfolio-sergio/about" element={<About />} />
                        <Route path="/portfolio-sergio/projects" element={<Projects />} />
                        <Route path="/portfolio-sergio/contact" element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;