import React from 'react';
import './card.style.css';

//individual cards 
export const Card = (props) => {
    return (
        <div className='card-container'>
            <img alt="robot" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
            <h2> {props.monster.name} </h2>
            <p> {props.monster.email}</p>
        </div>
    );
};
