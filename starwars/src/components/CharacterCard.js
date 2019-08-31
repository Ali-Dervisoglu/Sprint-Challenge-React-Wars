import React from 'react';
import './CharacterCard.scss';

function CharacterCard(props) {
    return (
        <div className="character-card">
            <h2>{props.name}</h2>
            <div>birth year: {props.birth_year}</div>
            <div>gender: {props.gender}</div>
            <div>hair color: {props.hair_color}</div>
            <div>eye color: {props.eye_color} </div>
            <div>skin color: {props.skin_color}</div>
        </div>
    );
}

export default CharacterCard;