import React, { useState, useEffect } from "react"
import axios from 'axios'
import Filter from './components/Filter'
import Matches from './components/Matches'



const App = () => {

  const [countries, setCountries] = useState([])
  const [newSearch, setNewSearch] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => { 
    axios.get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountries(response.data)
    })
  }, [])

  const handleSearchChange = event => {
    event.preventDefault()
    setNewSearch(event.target.value)
    setShowAll(false)
  }

  const showCountry = (maa) => {
    setNewSearch(maa)
  } 

  const matchingCountries = showAll
    ? countries
    : countries.filter(country =>
      country.name.common.toLowerCase().includes(newSearch.toLowerCase()))

  return (
    <div>
      find countries
      <Filter filter={newSearch} handleFilterChange={handleSearchChange}/>
      <Matches matches={matchingCountries} handleClick={showCountry} />
    </div>
  )
}

export default App
