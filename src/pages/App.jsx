import { useState } from 'react'
import logo from './../assets/logo.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
{/* <img src={viteLogo} className="logo" alt="Vite logo" /> */ }
import './../styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <header className='grid grid-cols-17 mx-auto flex items-center'>
          <nav className='col-span-17'>
            <ul className='grid grid-cols-11 gap-3 justify-center'>
              <li className='col-span-2 text-center'><a href="#">Home</a></li>
              <li className='col-span-2 text-center'><a href="#">Experiences</a></li>
              <li className='col-span-2 text-center'><a href="#">Technologies</a></li>
              <li className='col-span-2 text-center'><a href="#">Projects</a></li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  )
}

export default App
