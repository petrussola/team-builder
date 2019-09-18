import React from "react";
import styled from "styled-components";

export default function Form() {

  return (
    <form>
      <label>
        Name
        <input type="text" />
      </label>
      <label>
        Email
        <input type="text" />
      </label>
      <label>
        Position
        <input type="text" />
      </label>
    </form>
  );
}
