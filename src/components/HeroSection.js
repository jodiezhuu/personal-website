import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={process.env.PUBLIC_URL+"/videos/video2.mp4"} autoPlay loop muted />
            <h1>J O D I E   Z H U</h1>
            <div className="hero-btns">
                <Button className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                onClick={()=>window.open('https://drive.google.com/file/d/1fcqrTaREt3QUI5ltQlPT7pKnchi-Pd79/view?usp=sharing')}
                >
                    RESUME
                </Button>
        </div>
    </div>
    );
}

export default HeroSection
