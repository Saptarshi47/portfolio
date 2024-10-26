import React from 'react'
import about_image from '../../assets/about.png'
import './About.css';
const About = () => {
  return (
    <>
    <div className='about' id='about'>
        <div className='about-title'>
            <h1 className='about-heading'>About Me</h1>
        </div>
        <div className='about-section'>
            <div className='about-left'>
                <img src={about_image} className='about-image' alt="image" />
            </div>
            <div className="about-right">
                <div className="about-para">
                <p>I'm a passionate web developer focused on creating seamless, user-centered applications with the MERN stack. I love tackling challenges, learning new things, and delivering efficient, impactful solutions. My goal is to keep innovating and growing with every project I undertake.</p>


                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About