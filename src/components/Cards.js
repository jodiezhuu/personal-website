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
                        src={process.env.PUBLIC_URL+"/images/hobbies.jpg"}
                        text="Day in my life!"
                        label="Hobbies"
                        path="/About"
                        />
                        <CardItem 
                        src={process.env.PUBLIC_URL+"/images/IMG-2.jpg"}
                        text="Financial District Internship"
                        label="Work"
                        path="/Experience"
                        />
                        <CardItem 
                        src={process.env.PUBLIC_URL+"/images/IMG_6017.jpg"}
                        text="The Act4Impact Project"
                        label="Social Issues"
                        path="/Projects"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
