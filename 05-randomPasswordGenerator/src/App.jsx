import { useState, useCallback } from 'react'


function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "1234567890"
    if (charAllowed) str += "!@#$%^&*()_+"

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3 text-2xl'>Password Generator</h1>

        {/* Top Row: Input + Copy Button */}
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            Copy
          </button>
        </div>

        {/* Bottom Row: Range Slider and Label */}
        <div className='flex items-center gap-x-2 text-sm mb-2'>
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length: {length}</label>
          <input type="checkbox" defaultChecked={numberAllowed} onChange={() => {
            setNumberAllowed((prev) => { !prev })
          }} name="" id="" />
          <label htmlFor="number">Numbers</label>
          <input type="checkbox" defaultChecked={charAllowed} onChange={() => {
            setCharAllowed((prev) => { !prev })
          }} name="" id="" />
          <label htmlFor="character">Characters </label>
        </div>
      </div>
    </>
  );

}

export default App
