import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const Inc = () => {
    setCount(count + 1)
  }

  return (
    <>

      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-3xl text-center font-bold bg-green-600 p-3 rounded-b-md text-white'>Vite with the Tailwind</h1>

      </div>
      <div className='flex justify-around'>
        <Card username="Vinay"/>
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default App
