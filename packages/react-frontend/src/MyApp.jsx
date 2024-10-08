// src/MyApp.jsx
import React from "react"; // need this 
import Table from "./table";
import { useState, useEffect} from "react";
import Form from "./Form";

function fetchUsers() {
    const promise = fetch("http://localhost:8000/users")
    return promise
}

export default function MyApp() {
    const [characters, setCharacters] = useState(
        []
    )

    useEffect(() => {
        fetchUsers()
            .then(promise => {
                if (!promise.ok) {
                    throw new Error("failed to properly fetch")
                }
                return promise.json()})
            .then(json => 
                setCharacters(json["users_list"]))
            .catch(error => {
                console.log(error);
                setCharacters([])
            })
    }, [])

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