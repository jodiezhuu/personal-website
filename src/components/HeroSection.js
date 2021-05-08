import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="videos/video2.mp4" autoPlay loop muted />
            <h1>Welcome, everyone.</h1>
            <p>Get to know me!</p>
            <div className="hero-btns">
                <Button className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                onClick={()=>window.open('https://drive.google.com/file/d/1ZLzeZ-cvKfQDXx784JBQas-S9PO2lgXX/view?usp=sharing')}
                >
                    RESUME
                </Button>
        </div>
    </div>
    );
}

export default HeroSection
