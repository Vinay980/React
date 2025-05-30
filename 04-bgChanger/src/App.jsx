import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex justify-center flex-wrap bottom-12 inset-x-0'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=> setColor("red")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-red-600'>Red</button>
          <button onClick={()=> setColor("green")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-green-600'>Green</button>
          <button onClick={()=> setColor("blue")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-blue-600'>Blue</button>
          <button onClick={()=> setColor("orange")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-orange-600'>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
