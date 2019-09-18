import React, { useState } from 'react';
import './App.css';
import uuid from 'uuid';
import Form from './Components/Form';
import List from './Components/List';

const initialPersonList = [
  {id: uuid(), name: 'Brad Pitt', email: 'brad@pitt.com', position: 'intern'},
  {id: uuid(), name: 'Tom Cruise', email: 'tom@cruise.com', position: 'junior developer'},
  {id: uuid(), name: 'Pierce Brosnan', email: 'pierce@brosnan.com', position: 'senior developer'}
]

const initialPersonForm = {
  name: '',
  email: '',
  position: '',
}

function App() {

  const [personList, setPersonList] = useState(initialPersonList);
  const [personForm, setPersonForm] = useState(initialPersonForm);

  return (
    <div className="App">
      <Form />
      <List personList={personList} />
    </div>
  );
}

export default App;
