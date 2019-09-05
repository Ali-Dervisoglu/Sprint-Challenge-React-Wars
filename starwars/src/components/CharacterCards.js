import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterCards = props => {
    return (
        <div className = "character-card">
            {props.characters.map(character => {
                return <CharacterCard key={character.created} characterInfo={character} />;
            })}
        </div>
    )
}

export default CharacterCards;