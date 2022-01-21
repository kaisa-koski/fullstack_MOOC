import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
) 

const Statistics = ({good, neutral, bad}) => {
  let sum = total(good, neutral, bad)
  if (sum === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
  <div>
    <StatisticLine text={'good'} value={good} />
    <StatisticLine text={'neutral'} value={neutral} />
    <StatisticLine text={'bad'} value={bad} />  
    <StatisticLine text={'all'} value={sum} />
    <StatisticLine text={'average'} value={average(good,neutral,bad)} />  
    <StatisticLine text={'positive'} value={positive(good,neutral,bad)} extra={'%'} />
    </div>)
}

const StatisticLine =({text, value, extra}) => (
    <p>{text} {value} {extra}</p>
)

const total = (p1, p2, p3) => (p1 + p2 + p3)

const average = (p1, p2, p3) => {
  let good = p1 * 1
  let neutral = p2 * 0
  let bad = p3 * (-1)
  let sum = total(p1, p2, p3)
  if (sum === 0) return 0
  return (good + neutral + bad) / sum
}

const positive = (p1, p2, p3) => {
  let sum = total(p1, p2, p3)
  if (sum === 0) return 0
  return (p1 / sum) * 100
}

const App = () => {

const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text={'good'} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={'neutral'} />
      <Button handleClick={() => setBad(bad + 1)} text={'bad'} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
