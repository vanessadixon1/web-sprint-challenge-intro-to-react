// Write your Character component here
import React from 'react';
import Card from './Card'

function Character({character}) {
    return (
        <div>
            {character.map( char => {
                return <Card name={char.name} key={char.id} status={char.status} gender={char.gender} image={char.image} species={char.species}/>
            })}

        </div>
    )
}

export default Character;
