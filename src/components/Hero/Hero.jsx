import React from 'react'
import './Hero.css'
import image from '../../assets/hero.jpg'
const Hero = () => {
  return (
    <>
    <div className='hero' id='home'>
        <img src={image} className='hero-image'alt="image" />
        <h1> <span className='span-text'>I'm Saptarshi Rajan Das,</span> web developer based in India</h1>
        <p className='desc'>I can make web application using React, Mongo, Express and node.</p>
        {/* <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, nostrum.</p> */}
        <div className="hero-action">
            <div className="hero-connect">Let's connect</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
    </>
  )
}

export default Hero