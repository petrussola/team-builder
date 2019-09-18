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

  return (
    <form>
      <label>
        Name
        <input value={name} type="text" onChange={onNameChange} />
      </label>
      <label>
        Email
        <input value={email} type="text" onChange={onEmailChange} />
      </label>
      <label>
        Position
        <input value={position} type="text" onChange={onPositionChange} />
      </label>
      <button disabled={isDisabled()} onClick={onSubmitForm}>
        Add Developer
      </button>
    </form>
  );
}
