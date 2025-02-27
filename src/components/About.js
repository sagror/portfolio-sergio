import React from 'react';

const About = () => {
    return (
        <div className="section about">
            <img src="/portfolio-sergio/profile-picture.png" alt="Sergio Guerra" style={{ width: '150px', borderRadius: '50%' }} />
            <h2>About Me</h2>
            <p>Passionate UI Developer with 4+ years in AAA game development at Globant, contributing to Madden 23-25. I love crafting intuitive interfaces and learning new technologies.</p>
            <h3>Technical Experience</h3>
            <div className="skills-container">
                <span className="skill-button">C++</span>
                <span className="skill-button">C#</span>
                <span className="skill-button">JavaScript</span>
                <span className="skill-button">MVC</span>
                <span className="skill-button">ActionScript</span>
                <span className="skill-button">FrostED</span>
                <span className="skill-button">Unreal</span>
                <span className="skill-button">Unity</span>
                <span className="skill-button">Python</span>
            </div>
            <a href="/portfolio-sergio/CV-Sergio-Guerra.pdf" download>Download CV</a>
        </div>
    );
};

export default About;