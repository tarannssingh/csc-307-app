// src/Table.jsx
import React from "react";

export default function Table() {
    return (
        // table (semantic)
        <table>
            {/* table header section */}
            <thead>
                {/* table row */}
                <tr>
                    {/* table header indv. */}
                    <th>Name</th>
                    <th>Job</th>
                </tr>
            </thead>
            {/* table body */}
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
        </table>
    );
}