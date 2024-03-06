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
          <div className="img-title-works">
            <img src={img} alt="" />
            <h5>{work}</h5>
          </div>
          <div className='icons-arrow'>
            <a style={{ display: `${active === id ? 'block' : 'none'}` }} onClick={unsetActive}><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path d="m12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"/></svg></a>
            <a style={{ display: `${active === id ? 'none' : 'block'}` }} onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"/></svg></a>
          </div>
        </div>
        <div className="lista" style={{ display: `${active === id ? 'block' : 'none'}`, transition: "1s" }}>
          <ul>
            <li><span>Worked at: </span> {empresa} </li>
            <li><span>Started at: </span>{start}</li>
            {working == "true" ? <li><span>Currently Working</span></li> : <li><span>Finished on:</span>{final}</li>}
          </ul>
        </div>
        <div className='logos' style={{ display: `${active === id ? 'flex' : 'none'}`, transition: "1s" }}>
          {img1 == "windows" ? <img src="Images/tech-logos/windows.png" alt="windows" /> : <img src="Images/tech-logos/odoo.png" alt="odoo" />}
          {img2 == "linux" ? <img src="Images/tech-logos/linux.png" alt="linux" /> : <img src="Images/tech-logos/python.webp" alt="python" />}

        </div>
      </div>
    </>
  )
}
