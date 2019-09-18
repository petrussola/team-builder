import React from 'react';
import styled from 'styled-components';
import Personcard from './Personcard';

export default function List (props) {
    const {personList, editMember} = props;

    const StyledDiv = styled.div`
        padding: 2rem 0;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;
    `;
    return (
        <StyledDiv>
            {
                personList.map( person => (
                    <Personcard person={person} editMember={editMember} />
                ))
            }
        </StyledDiv>
    )
}