import React, { useState } from "react";

export default function Form() {
    const [person, setPerson] = useState({
        name: "",
        job: ""
    });
    
    function handleChange(event) {
        const {name, value} = event.target;
        if (name === "job") {
            setPerson({ name: person["name"], job: value})
        } else {
            setPerson({ name: value, job: person["job"]})
        }
    }

    return (
        <Form>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                value={person.name} 
                onChange={handleChange}>
            </input>
            <label htmlFor="job">Job</label>
            <input 
                type="text"
                name="job"
                id="job"
                value={person.job}
                onChange={handleChange}>
            </input>
        </Form>
    )
}