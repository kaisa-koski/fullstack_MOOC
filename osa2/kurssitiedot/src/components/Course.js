import React from 'react'

const Course = ({ course }) => {
    return (<div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
    )
}

const Header = ({ course }) => {
    return (
        <div>
            <h2>{course}</h2>
        </div>
    )
}

const Content = ({ parts }) => {
    return (
        parts.map(part => <Part key={part.id} part={part} />)
    )
}

const Part = ({ part }) => {
    return (
        <div>
            <p>{part.name} {part.exercises}</p>
        </div>
    )
}

const Total = ({ parts }) => {
    let total = parts.reduce(exercisesSum, 0)
    return <div><strong>total of {total} exercises </strong></div>
}

const exercisesSum = (p1, p2) => p1 + p2.exercises

export default Course