import React, { useState } from 'react';
import './Skills.css';
import cpp from '../../assets/c++_image.png';
import html from '../../assets/html_image.png';
import css from '../../assets/css_image.png';
import js from '../../assets/javascript_image.png';
import react from '../../assets/react_image.png';
import express from '../../assets/express_js.png';
import node_js from '../../assets/node_js.jpg';
import mongo from '../../assets/mongo_image.png';
import post from '../../assets/postman.jpg';
import git from '../../assets/git.png';
import sql_image from '../../assets/sql_image.png'
import boot_image from '../../assets/bootstrap_image.png'

const Skills = () => {
    const [data, setData] = useState([cpp, html, css, js]);

    const language = () => {
        setData([cpp, html, css, js]);
    }

    const framework = () => {
        setData([boot_image ,react, express, node_js]);
    }

    const database = () => {
        setData([mongo, sql_image]);
    }

    const tools = () => {
        setData([post, git]);
    }

    return (
        <>
            <div className='skills' id='skills'>
                <div className='skills-title'>
                    <h1 className='skills-heading'>Skills</h1>
                </div>

                <div className='skills-section'>
                    <div className="skills-name">
                        <button className="skills-button" onClick={language}>Languages</button>
                        <button className="skills-button" onClick={framework}>Frameworks and Libraries</button>
                        <button className="skills-button" onClick={database}>Database</button>
                        <button className="skills-button" onClick={tools}>Tools</button>
                    </div>
                    
                        <div className='skills-icon'>
                            {data.map((val, key) => {
                                return (
                                    <img className='skill-image' src={val} alt='skill' key={key}  />
                                )
                            })}
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;
