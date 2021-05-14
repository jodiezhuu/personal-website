import React from 'react';
import '../../App.css';
import './Projects.css';
import Footer from '../Footer';

export default function Projects() {
    return (
    <>
    <h1 className='projects'>PROJECTS</h1>
    <h2 className='projheader'>Here, you can get to know a little bit about my finished projects as well as any ongoing ones!</h2>
    <div className='container'>
        <img className='projectphoto' src={process.env.PUBLIC_URL+"/images/projectcambodia.jpg"} alt="ProjectPhoto"></img>
        <div className='column3'>
            <h3 className='act'>Act 4 Impact</h3>
            <p className='projdesc'>Since January 2018, I have co-founded and co-run a non-profit organization, Act4Impact, that dedicates itself in supporting smaller charities. In less than two years, this club has raised over $2000 in funds to support a local homeless shelter and SALEKEMPRAM Primary S chool in Cambodia. I am extremely humbled and enthusiastic to carry Act4Impact with me in the future!</p>
            <p className='font'>Since 2018, Act4Impact has:</p>
                <li className='font2'>Donated $400 to Homesfirst, a homeless shelter for women</li>
                <li className='font2'>Donated over $1000 worth of school supplies to SALEKEMPRAM Primary School</li>
                <li className='font2'>Donated and spread awareness about the Black Lives Matter movement</li>
                <li className='font2'>Donated masks to Sunnybrook Hospital</li>
        </div>
        <div className='column4'>
            <h3 className='neuro'>The Neurostrength Project</h3>
            <p className='neurodesc'>Since distance learning has been a relatively recent integration into the educational system, not all students and staff are equipped to successfully navigate the demands of online learning and teaching. Thus, Neurostrength is a research project conducted to outline the benefactors of relationships between students, parents, as well as teachers, in order to encourage the importance of mental health in secondary education.</p>
        </div>
        <img className='neurophoto' src={process.env.PUBLIC_URL+"/images/brains.jpg"} alt="NeuroPhoto"></img>
    </div>

    <Footer />
    </>);
}