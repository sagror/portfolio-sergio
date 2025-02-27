import React from 'react';

const Projects = () => {
    return (
        <div className="section projects">
            <h2>Projects</h2>
            <div className="project-item">
                <h3>Madden 23-25</h3>
                <p>UI Developer at Globant for Electronic Arts. Designed and maintained user interfaces using C++, ActionScript, and FrostED. Improved usability and implemented telemetry for data analysis.</p>
                <img src="/portfolio-sergio/Madden-NFL-23.png" alt="Madden UI Mockup" style={{ width: '300px', borderRadius: '5px' }} />
            </div>
            <div className="project-item">
                <h3>Side Project (Upcoming)</h3>
                <p>Developing a Unity game prototype to showcase modern UI design skills.</p>
            </div>
        </div>
    );
};

export default Projects;