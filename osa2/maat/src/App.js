import React, { useState, useEffect } from "react"
import axios from 'axios'
import Filter from './components/Filter'
import Matches from './components/Matches'



const App = () => {

  const [countries, setCountries] = useState([])
  const [newSearch, setNewSearch] = useState('')
  const [showAll, setShowAll] = useState(true)
  //const [matchingCountries, setMatchingCountries] = useState([])

  useEffect(() => { 
    axios.get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountries(response.data)
      console.log(response.data)
    })
  }, [])

  const handleSearchChange = event => {
    setNewSearch(event.target.value)
    setShowAll(false)
  }

  const matchingCountries = showAll
    ? countries
    : countries.filter(country =>
      country.name.common.toLowerCase().includes(newSearch))

  return (
    <div>
      find countries
      <Filter filter={newSearch} handleFilterChange={handleSearchChange}/>
      <Matches matches={matchingCountries} />
    </div>
  )
}

export default App
