import React, { useId, useState } from 'react'

export const Works = ({ img, work, empresa, start, working, final, active, setActive, img1, img2 }) => {

  // CHANGE VISIBILITY OF WORKS FT. YasaiPajas
  const [index, setWorkData] = useState({

  })
  const id = useId();

  const handleClick = () => {
    setActive(id);
  }

  const unsetActive = () => {
    setActive(null);
  }

  return (
    <>
      <div className='work-display'>
        <div className="cont-data-work">
          <div className='flex justify-between items-center flex-wrap'>
            <div className="img-title-works flex flex-start items-center">
              <img className="imagen-prueba" src={img} alt="" />
              <h5>{work}</h5>
            </div>
            <div className='icons-arrow flex'>
              <button style={{ display: `${active === id ? 'block' : 'none'}`}} onClick={unsetActive}><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 14l-5-5m0 0l-5 5" /></svg></button>
              <button style={{ display: `${active === id ? 'none' : 'block'}` }} onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5m0 0l5-5" /></svg></button>
            </div>
          </div>
          <div className="lista" style={{ display: `${active === id ? 'block' : 'none'}`, transition: "1s"}}>
            <ul>
              <li><span>Worked on: </span> {empresa} </li>
              <li><span>Started on: </span>{start}</li>
              {working == "true" ? <li><span>Currently Working</span></li> : <li><span>Finished on:</span>{final}</li>}
            </ul>
          </div>
        </div>
        <div className='logos flex flex-end' style={{ display: `${active === id ? 'flex' : 'none'}`, transition: "1s"}}>
          {img1 == "windows" ? <img src="Images/tech-logos/windows.png" alt="windows" /> : <img src="Images/tech-logos/odoo.png" alt="odoo" />}
          {img2 == "linux" ? <img src="Images/tech-logos/linux.png" alt="linux" /> : <img src="Images/tech-logos/python.webp" alt="python" />}

        </div>
      </div>
    </>
  )
}
