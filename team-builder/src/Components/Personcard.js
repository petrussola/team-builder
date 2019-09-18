import React from "react";
import styled from "styled-components";

export default function PersonCard(props) {
  const { name, email, position, id } = props.person;
  const { editSelectedMember } = props;

  const StyledDiv = styled.div`
    border: 1px dashed #cccccc;
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    width: 40%;
    height: auto;
    box-shadow: 0.5rem 0.5rem #cccccc;
  `;

  return (
    <StyledDiv>
      <p>{name}</p>
      <p>{email}</p>
      <p>{position}</p>
      <p>{id}</p>
      <button onClick={e => editSelectedMember(e, props.person)}>Edit</button>
    </StyledDiv>
  );
}
