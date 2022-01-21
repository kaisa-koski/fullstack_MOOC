import React, { useState } from 'react' 

const Button = ({handleClick, text}) => (
  <div>
    <button onClick={handleClick}> {text} </button>
  </div>
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

  const [selected, setSelected] = useState(0)

  

  return (
    <div>
     <h4>{anecdotes[selected]}</h4>
     <Button handleClick={()=>setSelected(getRndInt(0, anecdotes.length))}
      text={'next anecdote'} />
    </div>
  )
}

export default App;
