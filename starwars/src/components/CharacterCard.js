import React from 'react';
import './CharacterCard.scss';

function CharacterCard(props) {
    return (
        <div className="character-card">
            <h2>{props.characterInfo.name}</h2>
            <div>birth year: {props.characterInfo.birth_year}</div>
            <div>gender: {props.characterInfo.gender}</div>
            <div>hair color: {props.characterInfo.hair_color}</div>
            <div>eye color: {props.characterInfo.eye_color} </div>
            <div>skin color: {props.characterInfo.skin_color}</div>
        </div>
    );
}

export default CharacterCard;