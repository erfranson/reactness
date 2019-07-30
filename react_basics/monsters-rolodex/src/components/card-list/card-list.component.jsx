import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component';

//handles all the cards that we have
export const CardList = (props) => {
    return <div className="card-list"> 
        {
          props.monsters.map(monster => (
          <Card key={monster.id} monster={monster}/>
        ))}    
    </div>;
}
