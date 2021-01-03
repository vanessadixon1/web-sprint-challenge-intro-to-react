import React from 'react';
import styled from 'styled-components';



const Card = ({id, name, status,  gender, image, species}) => {

    const WrapperDiv = styled.div`
       display: inline-block;
        width: 20%;
        margin: 0 4%;
        padding: 0 1%;
    `

    return (
        <WrapperDiv id={id}>
            <h1>{name}</h1>
            <img src={image} alt='character' />
            <h3>Status: {status}</h3>
            <h3>Gender: {gender}</h3>
            <h3>Species: {species}</h3>
        </WrapperDiv>
    )
}

export default Card;