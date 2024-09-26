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
            </tr>
        </thead>
    );
}

function TableBody() {
    return (
        <tbody>
            {/* table row */}
            <tr>
                {/* table data */}
                <td>Charlie</td>
                <td>Janitor</td>
            </tr>
            <tr>
                <td>Mac</td>
                <td>Bouncer</td>
            </tr>
            <tr>
                <td>Dee</td>
                <td>Aspiring actress</td>
            </tr>
            <tr>
                <td>Dennis</td>
                <td>Bartender</td>
            </tr>
        </tbody>
    )
}

export default function Table() {
    return (
        // table (semantic)
        <table>
            {/* table header section */}
            <TableHeader/>
            {/* table body */}
            <TableBody/>
        </table>
    );
}