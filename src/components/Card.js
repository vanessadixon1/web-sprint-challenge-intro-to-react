import React from 'react';

const Card = ({id, name, status,  gender, image, species}) => {
    return (
        <div id={id}>
            <h1>{name}</h1>
            <img src={image} alt='character' />
            <h3>Status: {status}</h3>
            <h3>Gender: {gender}</h3>
            <h3>Species: {species}</h3>
        </div>
    )
}

export default Card;