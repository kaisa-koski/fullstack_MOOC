import React, { useState } from 'react' 

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}> {text} </button>
)

const getRndInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) ) + min;
}

const App = () => {

  const anecdotes = [
    'Adding manpower to a late software project makes it later!',
    'The best way to get a project done faster is to start sooner',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Even the best planning is not so omniscient as to get it right the first time.',
    'How does a project get to be a year late?... One day at a time.',
    'Plan to throw one (implementation) away; you will, anyhow.'
  ]

  const [selected, setSelected] = useState(getRndInt(0, anecdotes.length))
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  console.log('Taulukko luotu', votes)
  
  const copyVotes = [...votes]
  
  const addVote = (monesko) => {
    console.log('Ennen ääntä votes:', votes )
    console.log('Ennen ääntä copyvotes:', copyVotes )
    copyVotes[monesko] += 1
    console.log('Jälkeen votes:', votes )
    console.log('Jälkeen copyvotes:', copyVotes )
    setVotes(copyVotes)
  }

  return (
    <div>
     <h4>{anecdotes[selected]}</h4>
     <Button handleClick={() =>addVote(selected)} text={'vote'} />
     <Button handleClick={()=>setSelected(getRndInt(0, anecdotes.length))}
      text={'next anecdote'} />
    </div>
  )
}

export default App;
