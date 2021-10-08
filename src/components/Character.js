// Write your Character component here
import React from 'react';
import styled from 'styled-components';

// add EventListeners
// add preventDefault() on my h1

const CharacterName = styled.div`
    h1 {
        font-family: 'Poller One', cursive;
    }
    
`
const StyledCharacter = styled.div `
    border: 3px solid black;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
    margin: auto;
    margin-top: 2rem;
    width: 50%;
    font-family: 'Poller One', cursive;
    margin-bottom: 1rem;

    &:hover {
        background-color: #000000;
        opacity: 50%;
        color: #ffffff;
    }

    a {
        text-decoration:none;
    }
        
`

function Character({jediInfo}) {

    const [visible, setVisible] = React.useState(false);

    return (
        <StyledCharacter>

        <CharacterName 

        onClick={() => setVisible(!visible)}>
        <h1><a href='#/'>{jediInfo.name}</a></h1>
        {visible ? '**May The Force Be With You**' : ''}

        </CharacterName>

        {

        visible &&

        <div>
        <h3>Gender: {jediInfo.gender}</h3>
        <h3>Height: {jediInfo.height}</h3>
        <h3>Mass: {jediInfo.mass}</h3>
        <h3>Birth Year: {jediInfo.birth_year}</h3>
        <h3>Eye Color: {jediInfo.eye_color}</h3>
        <h3>Hair Color: {jediInfo.hair_color}</h3>
        <h3>Skin Color: {jediInfo.skin_color}</h3>
        </div>

        }

        </StyledCharacter>
        
    )
}

export default Character;