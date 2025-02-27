import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.css';

const App = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
                <header className="header">
                    <h1>Sergio Guerra - Portfolio</h1>
                    <nav>
                        <a href={`${process.env.PUBLIC_URL}/`}>Home</a>
                        <a href={`${process.env.PUBLIC_URL}/about`}>About</a>
                        <a href={`${process.env.PUBLIC_URL}/projects`}>Projects</a>
                        <a href={`${process.env.PUBLIC_URL}/contact`}>Contact</a>
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
        </Router>
    );
};

export default App;