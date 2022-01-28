import React from 'react'

const Matches = ({ matches, handleClick }) => {
    if (matches.length > 10)
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    if (matches.length > 1)
        return (
            <ul>
                {matches.map(country =>
                    <li key={country.ccn3}>
                        {country.name.common}
                        <button onClick={()=>handleClick(country.name.common)}>
                            show </button>
                    </li>)}
            </ul>
        )
    if (matches.length === 1) {
        const country = matches[0]
        const languages = []
        for (const [key, value] of Object.entries(country.languages)) {
            languages.push(value)
        }
        return (
            <div>
                <h1>{country.name.common}</h1>
                <p>continent: {country.continents}</p>
                <p>capital: {country.capital}</p>
                <h2>languages</h2>
                <ul>
                    {languages.map(language =>
                        <li key={language}>{language}</li>)}
                </ul>
                <img src={country.flags.png} alt='Flag' />
            </div>
        )
    }
    else return (
        <div>
            No matches
        </div>
    )
}

export default Matches