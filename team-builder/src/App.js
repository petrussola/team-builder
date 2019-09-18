import React, { useState, useEffect } from "react";
import "./App.css";
import uuid from "uuid";
import Form from "./Components/Form";
import List from "./Components/List";
import styled from "styled-components";

const initialPersonList = [
  { id: uuid(), name: "Brad Pitt", email: "brad@pitt.com", position: "intern" },
  {
    id: uuid(),
    name: "Tom Cruise",
    email: "tom@cruise.com",
    position: "junior developer"
  },
  {
    id: uuid(),
    name: "Pierce Brosnan",
    email: "pierce@brosnan.com",
    position: "senior developer"
  }
];

const initialPersonForm = {
  name: "",
  email: "",
  position: ""
};

const StyledDiv = styled.div`
  width: 75vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [personList, setPersonList] = useState(initialPersonList);
  const [personForm, setPersonForm] = useState(initialPersonForm);

  // STATE FOR PERSON BEING EDITED AND ITS SETTER

  const [memberToEdit, setMemberToEdit] = useState(initialPersonForm);

  const onNameChange = e => {
    setPersonForm({
      name: e.target.value,
      email: personForm.email,
      position: personForm.position
    });
  };

  const onEmailChange = e => {
    setPersonForm({
      name: personForm.name,
      email: e.target.value,
      position: personForm.position
    });
  };

  const onPositionChange = e => {
    setPersonForm({
      name: personForm.name,
      email: personForm.email,
      position: e.target.value
    });
  };

  const onSubmitForm = e => {
    e.preventDefault();
    setPersonList(personList.concat({ ...personForm, id: uuid() }));
  };

  // SETTER TO MEMBER BEING EDITED

  const editSelectedMember = (e, person) => {
    e.preventDefault();
    setMemberToEdit(person);
  };

  useEffect( () => {
    setPersonForm(memberToEdit)
  }, [memberToEdit])

  // EDIT MEMBER

  return (
    <StyledDiv className="App">
      <Form
        className="form"
        onNameChange={onNameChange}
        onEmailChange={onEmailChange}
        onPositionChange={onPositionChange}
        onSubmitForm={onSubmitForm}
        personForm={personForm}
      />
      <List
        className="person-card"
        personList={personList}
        editSelectedMember={editSelectedMember}
      />
    </StyledDiv>
  );
}

export default App;
