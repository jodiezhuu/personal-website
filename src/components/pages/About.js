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
   <img className='descriptionphoto' src={process.env.PUBLIC_URL + "/images/IMG_6337.jpg"} alt="DescriptionPhoto"></img>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <p className='description'>Nice to meet you guys! I'm a first year student at University of Waterloo looking to pursue a degree in Computer Science and Finance. With digital news exponentially rising in social media, I want to learn how to develop effective AI solutions and use data curation to analyze information validity. Currently, I am <b className='bold'>seeking 2022 Summer Internships;</b> everywhere I go, I wish to learn from my workspace and critically engage with my peers. I'm highly ambitious and love to jump at any opportunity I can find!</p>
    <p className='description1'> Some other hobbies include listening to music, playing volleyball, and doing pilates in my backyard!</p>
   
    

    <Footer />
    </>)
}