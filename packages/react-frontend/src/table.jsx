// src/Table.jsx
import React from "react";

function TableHeader() {
    return (
        <thead>
            {/* table row */}
            <tr>
                {/* table header indv. */}
                <th>Name</th>
                <th>Job</th>
                <th>Remove Character</th>
            </tr>
        </thead>
    );
}

function TableBody(props) {
    let data = props.characterData
    //  to not mix html with js we are seperating logic for rows from return
    // index is used from maps to make a key for array 
    let rows = data.map((character, index) => {
        
        return (
            <tr key={index}>
                <td>{character.name}</td>
                <td>{character.job}</td>
                <td>
                    {/* set state wala pen is given here and edits that data */}
                    {/* The state data can be thought of as like a db that we are editing for the session */}
                    {/* But it is not a db */}
                    <button onClick={() => {props.removeCharacter(index)}}>
                        Remove
                    </button>
                </td>
            </tr>
        )
    })

    return (
        <tbody>
            {rows}
        </tbody>
    )
}

export default function Table(props) {
    return (
        // table (semantic)
        <table>
            {/* table header section */}
            <TableHeader/>
            {/* table body */}
            <TableBody characterData={props.characterData} removeCharacter={props.removeCharacter}/>
        </table>
    );
}

