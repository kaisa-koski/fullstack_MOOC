import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      id: 1
    }
  ])
  const [newName, setNewName] = useState('')

  const addNewName = (event) => {
    event.preventDefault()
    const newNameObject = { name: newName, id: persons.length + 1 }
    setPersons(persons.concat(newNameObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName}
            onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <li style={{ listStyleType: "none" }} key={person.id} >
            {person.name}
          </li>)
        }
      </ul>
    </div >
  )

}

export default App