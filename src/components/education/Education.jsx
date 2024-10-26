import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <div className="education-section" id='education'>
            <h1 className="education-title">Education</h1>
            <div className="education-cards">
                <div className="education-card">
                    <h2 className="degree">Bachelor of Computer Application (BCA)</h2>
                    <p className="institution">Gurunanak Institute of Technology</p>
                    <p className="year">2020 - 2023</p>
                </div>
                
                <div className="education-card">
                    <h2 className="degree">Masters of Computer Applications (MCA)</h2>
                    <p className="institution">Regent Education and Research Foundation</p>
                    <p className="year">2023 - 2025</p>
                </div>
            </div>
        </div>
    );
};

export default Education;
