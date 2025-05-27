import { useState } from 'react'
import './App.css'

function App() {

  const [Counter,setCounter] = useState(10)

  // let Counter = 10
  const addValue = () => {
    setCounter(Counter+1)
    console.log(Counter);

  }

  return (
    <>
      <h1>Hello </h1>
      <h1>Counter value: {Counter}</h1>
      <button onClick={addValue}>Add Value</button>{" "}
      <button>Remove Value</button>
    </>
  )
}

export default App
