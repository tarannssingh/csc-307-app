// src/MyApp.jsx
import React from "react"; // need this 
import Table from "./table";
import { useState } from "react";

export default function MyApp() {
    const [characters, setCharacters] = useState(
        [
            {
                name: "Charlie",
                job: "Janitor"
            }, 
            {
                name: "Mac",
                job: "Bouncer"
            },
            {
                name: "Dee",
                job: "Aspiring actress"
            },
            {
                name: "Dennis",
                job: "Bartender"
            }
        ]
    )
    function removeOneCharacter(index) {
        setCharacters(characters.filter((character, i) => {
            return i !== index; 
        }))
    }

    return (
        <div className="container">
            <Table characterData={characters} removeCharacter={removeOneCharacter}/>
        </div>
    );
}