import React from 'react'



export const Works = ({ work, empresa, start, working }) => {
  return (
    <>
      <h4 className='col-span-5'>Works</h4>
      <div className='work-display'>
        <div className='flex justify-start items-center flex-wrap'>
          <div className="imagen-prueba"></div>
          <h5>{work}</h5>
          <div className='icons-arrow'>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 14l-5-5m0 0l-5 5" /></svg></button>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5m0 0l5-5"/></svg></button>
          </div>
        </div>
        <ul>
          <li><span>Worked on: </span> {empresa} </li>
          <li><span>Started on: </span>{start}</li>
          <li><span>{working == "true" ? "Currently Working" : "Finished"}</span></li>
        </ul>
      </div>
    </>
  )
}
