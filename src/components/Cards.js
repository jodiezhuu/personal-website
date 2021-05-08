import React from 'react'
import CardItem from "./Carditem";
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Click below to learn more about me!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/hobbies.jpg"
                        text="Day in my life!"
                        label="Hobbies"
                        path="/About"
                        />
                        <CardItem 
                        src="images/IMG-2.jpg"
                        text="Financial District Internship"
                        label="Work"
                        path="/Experience"
                        />
                        <CardItem 
                        src="images/IMG_6017.jpg"
                        text="The Act4Impact Project"
                        label="Social Issues"
                        path="/Projects"
                        />
                        <CardItem 
                        src="images/IMG_6337.jpg"
                        text="Get in touch with me!"
                        label="Network"
                        path="/Contact"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
