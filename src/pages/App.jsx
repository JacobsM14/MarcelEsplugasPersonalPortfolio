import { useState } from 'react'
import logo from './../assets/logo.png'
import cv from "/SVG/links/cv.svg"
import github from "/SVG/links/github.svg"
import linkedin from "/SVG/links/linkedin.svg"
import medium from "/SVG/links/medium.svg"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
{/* <img src={viteLogo} className="logo" alt="Vite logo" /> */ }
import './../styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <header className='padding-starter grid grid-cols-17 gap-3 mx-auto items-center justify-items-center'>
          <nav className='grid col-span-17 grid-cols-11 gap-2'>
            <a className='col-span-2 text-center' href="">Home</a>
            <a className='col-span-3 text-center' href="">Experiences</a>
            <a className='col-span-3 text-center' href="">Technologies</a>
            <a className='col-span-3 text-center' href="">Projects</a>
          </nav>
          <div className='info-header-content grid grid-cols-17 col-span-13 col-start-2'>
            <div className="title-content grid col-span-7 grid-cols-7 col-start-3">
              <h1 className='col-span-7'>Hi,I’m Marcel.</h1>
              <p className='col-span-7'>I build websites.</p>
            </div>
            <div className='images-and-links grid col-span-6 grid-cols-6 col-start-12'>
              <img src={logo} alt="logo" className='col-span-6' />
              <div className="url-svg">
                <a href=""><img src={cv} alt="cv" /></a>
                <a href=""><img src={github} alt="github" /></a>
                <a href=""><img src={linkedin} alt="linkedin" /></a>
                <a href=""><img src={medium} alt="medium" /></a>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>

  )
}

export default App
