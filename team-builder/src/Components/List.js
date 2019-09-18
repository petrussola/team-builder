import React from 'react';
import styled from 'styled-components';

export default function List (props) {
    const {personList} = props;

    const StyledDiv = styled.div`
        padding: 2rem 0;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;
        div {
            border: 1px dashed #CCCCCC;
            padding: 1rem;
            margin: 0.5rem;
            border-radius: 0.5rem;
            width: 40%;
            height: 5rem;
            box-shadow: 0.5rem 0.5rem #cccccc;
        }
    `;
    return (
        <StyledDiv>
            {
                personList.map( person => (
                    <div>{`${person.name}, ${person.email}, ${person.position} with id of ${person.id}`}</div>
                ))
            }
        </StyledDiv>
    )
}