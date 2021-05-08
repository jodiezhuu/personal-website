import React from 'react';
import '../../App.css';
import './About.css'
import Footer from '../Footer';

export default function about() {
    return (
     <>
     <h1 className='about'>ABOUT</h1>
    <h1 className='header'>MY LIFE</h1>
   <h3 className='header2'>Learn about my aspirations, hobbies, and the next chapter of my life.</h3>
   <img className='descriptionphoto'src="images/jodiecropped.jpg" alt="DescriptionPhoto"></img>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <p className='description'>Nice to meet you guys! I'm currently in my final year of the International Baccalaureate program and looking to pursue a degree in engineering/computer science! With digital news exponentially rising in social media, I want to learn how to develop effective AI solutions and use data curation to analyze information validity. Everywhere I go, I wish to learn from my workspace and critically engage with my peers. I'm highly ambitious and love to jump at any opportunity I can find!</p>
    <p className='description1'>If I'm not locked in my office, I spend my pastime playing chess. Even though I only began playing a few months ago, I found myself obsessed with this game and the problem-solving skills developed through playing. Feel free to add me on <strong className='description2'>chess.com:jodiezhuu!</strong> Some other hobbies include listening to music, playing volleyball, and doing pilates in my backyard!</p>
   
    

    <Footer />
    </>);
}