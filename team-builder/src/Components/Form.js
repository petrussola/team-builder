import React from "react";
import styled from "styled-components";

export default function Form(props) {
    const {onNameChange, onEmailChange, onPositionChange} = props;
  return (
    <form>
      <label>
        Name
        <input type="text" onChange={onNameChange} />
      </label>
      <label>
        Email
        <input type="text" onChange={onEmailChange}/>
      </label>
      <label>
        Position
        <input type="text" onChange={onPositionChange}/>
      </label>
    </form>
  );
}
