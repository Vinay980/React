
import Card from './components/Card'

function App() {
  
  let newArr=[1,2,3,4,5,6,7]

  return (
    <>

      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-3xl text-center font-bold bg-green-600 p-3 rounded-b-md text-white'>Vite with the Tailwind</h1>

      </div>
      <div className='flex justify-around'>
        <Card username="Vinay" post='Software Developer'/>
        <Card username='JSON' myArr={newArr} />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default App
