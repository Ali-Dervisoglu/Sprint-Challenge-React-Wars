import React from 'react';

function CharacterCard(props) {
    return (
        <div className="character-card">
            <div>{props.name}</div>
            <h2>birth year: {props.birth_year}</h2>
        </div>
    );
}

export default CharacterCard;