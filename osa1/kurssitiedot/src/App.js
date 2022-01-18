import React from 'react'

const App = () => {
  const course = 'Half Stack application developoment'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return (
    <>
      <Header course = {course} />
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
      <Total total={part1+part2+part3} />
    </>
  )
}

const Header = (props) => {
  return (
    <div>
    <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  <div>
    <p>{props.part} {props.exercises} </p>
  </div>
}

const Total = (props) => {
  <div>
    <p>Number of exercises {props.total}</p>
  </div>
}

export default App 