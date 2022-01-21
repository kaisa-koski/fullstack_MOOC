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
  const [mostVoted, setMostVoted] = useState(0)
  const [mostVotes, setMostVotes] = useState(0)
  
  const copyVotes = [...votes]
  
  const addVote = (iNum) => { 
    copyVotes[iNum] += 1
    setVotes(copyVotes)
    console.log(votes, copyVotes)
    let voteAmount = copyVotes[iNum]
    if (voteAmount > mostVotes) {
        setMostVoted(iNum)
        setMostVotes(voteAmount)
      }
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p><strong>{anecdotes[selected]}</strong></p>
      <Button handleClick={() =>addVote(selected)} text={'vote'} />
      <Button handleClick={()=>setSelected(getRndInt(0, anecdotes.length))} text={'next anecdote'} />
      <h2>Anecdote with most likes</h2>
      <p><strong>{anecdotes[mostVoted]}</strong></p>
      <p>has {mostVotes} votes</p>
    </div>
  )
}

export default App;
