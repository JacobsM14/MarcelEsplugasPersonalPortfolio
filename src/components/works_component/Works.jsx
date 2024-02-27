import React from 'react'



export const Works = ({ work, empresa, start, working }) => {
  return (
    <>
      <div className='work-display'>
        <div className="cont-data-work">
          <div className='flex justify-between items-center flex-wrap'>
            <div className="img-title-works flex flex-start items-center">
              <div className="imagen-prueba"></div>
              <h5>{work}</h5>
            </div>
            <div className='icons-arrow flex'>
              <button><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 14l-5-5m0 0l-5 5" /></svg></button>
              <button className='button-work-none'><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5m0 0l5-5" /></svg></button>
            </div>
          </div>
          <div className="lista">
            <ul>
              <li><span>Worked on: </span> {empresa} </li>
              <li><span>Started on: </span>{start}</li>
              <li><span>{working == "true" ? "Currently Working" : "Finished"}</span></li>
            </ul>
          </div>
        </div>
          <div className='logos flex flex-end '>
            <img src="Images/tech-logos/node.png" alt="" />
            <img src="Images/tech-logos/react.png" alt="" />

          </div>
      </div>
    </>
  )
}
