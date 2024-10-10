// src/MyApp.jsx
import React from "react"; // need this 
import Table from "./table";
import { useState, useEffect} from "react";
import Form from "./Form";


export default function MyApp() {
    function fetchUsers() {
        const promise = fetch("http://localhost:8000/users")
        return promise
    }
    
    function postUser(user) {
        // do a post call with the person in the body
        const promise = fetch("http://localhost:8000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        return promise
    }

    function deleteUser(user) {
        const promise = fetch(`http://localhost:8000/users/${user.id}`, {
            method: "DELETE",
        })
        return promise
    }
    
    function removeOneCharacter(index) {
        let c = {}
        setCharacters(characters.filter((character, i) => {
            if (i === index) {
                c = character
            }
            return i !== index; 
        }))
        deleteUser(c)
            .then(response => {
                if (response.status == 404) {
                    throw new Error("User was not found. Could not delete")
                } else if (response.status !== 204) {
                    throw new Error("Error in deleting user. Try again.")
                }
            })
            .catch(error => console.log(error))
    }

    function updateList(person) {
        postUser(person)
            // .then(promise => promise.json()) Don't need as when the event is a success it won't go to catch and we know it worked if it goes into the then
            .then((response) => {
                if (response.status !== 201) {
                    throw new Error("User not created")
                }
                return response.json()
            })
            .then((json) => setCharacters([...characters, json.user]) ) // add the person to the list of characters
            .catch(error => console.log(error))
    }

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

    return (
        <div className="container">
            <Table characterData={characters} removeCharacter={removeOneCharacter}/>
            <Form handleSubmit={updateList}/> 
            {/* For submitting we will send over the  */}
        </div>

    );
}