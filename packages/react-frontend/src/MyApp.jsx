// src/MyApp.jsx
import React from "react"; // need this 
import Table from "./table";
import { useState } from "react";
import Form from "./Form";

export default function MyApp() {
    const [characters, setCharacters] = useState(
        []
    )
    function removeOneCharacter(index) {
        setCharacters(characters.filter((character, i) => {
            return i !== index; 
        }))
    }
    function updateList(person) {
        setCharacters([...characters, person]) // add the person to the list of characters
    }

    return (
        <div className="container">
            <Table characterData={characters} removeCharacter={removeOneCharacter}/>
            <Form handleSubmit={updateList}/> 
            {/* For submitting we will send over the  */}
        </div>

    );
}