import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Stat = ({value, text}) => {
  if (text == 'positive') {
    return (
      <div>
        {text} {value} %
    </div>
    )
  }
  return (
    <div>
      {text} {value}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / all
  const positive = good / all

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />
      <h1>statistics</h1>
      <Stat value={good} text='good' />
      <Stat value={neutral} text='neutral' />
      <Stat value={bad} text='bad' />
      <Stat value={all} text='all' />
      <Stat value={average} text='average' />
      <Stat value={positive} text='positive' />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
  )