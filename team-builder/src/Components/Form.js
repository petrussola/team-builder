import React from "react";
import styled from "styled-components";

export default function Form(props) {
  const { onNameChange, onEmailChange, onPositionChange, onSubmitForm } = props;
  const { name, email, position } = props.personForm;
  const isDisabled = () => {
    if (!name || !email || !position) {
      return true;
    }
    return false;
  };

  const StyledForm = styled.form`
    background: #CCCCCC;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem;
    label {
        padding: 0.5rem;
    }
    input {
        display: block;
        margin-left: 10px;
        height: 2rem;
    }
    button {
        margin: 0 auto;
    }
  `;

  return (
    <StyledForm>
      <label>
        Name
        <input value={name} type="text" onChange={onNameChange} />
      </label>
      <label>
        Email
        <input value={email} type="email" onChange={onEmailChange} />
      </label>
      <label>
        Position
        <input value={position} type="text" onChange={onPositionChange} />
      </label>
      <button disabled={isDisabled()} onClick={onSubmitForm}>
        Add Developer
      </button>
    </StyledForm>
  );
}
