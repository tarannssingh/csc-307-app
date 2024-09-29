// src/MyApp.jsx
import React from "react"; // need this 
import Table from "./table";

const characters = [
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
];

export default function MyApp() {
    return (
        <div className="container">
            <Table characterData={characters}/>
        </div>
    );
}