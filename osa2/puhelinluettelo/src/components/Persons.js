import React from 'react'

const Persons = ({ persons }) => {
    return (
        <ul>
            {persons.map(person =>
                <li style={{ listStyleType: "none" }} key={person.id} >
                    {person.name} {person.number}
                </li>)
            }
        </ul>
    )
}

export default Persons