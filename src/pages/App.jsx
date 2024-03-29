import { useState } from 'react'
import logo from './../assets/logo.png'
import logo_bkc from './../assets/bkc2.png'
import './../styles/App.css'
import { Works } from '../components/works_component/Works'
import cv from './../assets/cv.pdf'


function App() {
  const [active, setActive] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAlt, setSelectedAlt] = useState(null);

  const handleClick = (e) => {
    setSelectedImage(e.target.src);
    setSelectedAlt(e.target.alt);
  };

  const email = "marcel.esplu@gmail.com";

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
  };

  return (
    <>
      <div className="all-cont">
        {/* HEADER */}
        <header className='padding-starter' id='header-porfolio'>
          <nav className='flex justify-around'>
            <a href="#header-portfolio">Home</a>
            <a href="#presentation-section">Experiences</a>
            <a href="#technologies-i-use">Technologies</a>
            <a href="#projects">Projects</a>
          </nav>
          <div className='info-header-content flex justify-between'>
            <div className="title-content flex flex-column">
              <h1 className='desktop-title'>Hi,I’m Marcel.</h1>
              <h1 className='mobile-title'>Marcel Esplugas</h1>
              <p>I build websites.</p>

            </div>
            <div className='images-and-links flex flex-column justify-center'>
              <img src={logo} alt="logo" />
              <div className="url-svg flex flex-end">
                <a className="cv-hover" href={cv}><svg xmlns="http://www.w3.org/2000/svg" width="112" height="128" viewBox="0 0 448 512"><path d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm98.88 133.234c19.636 0 37.082 6.789 49.929 16.971c11.88 9.452 17.444 18.907 22.298 27.393l-33.923 16.949c-2.427-5.565-5.347-11.387-12.846-17.682c-8.248-6.552-16.478-8.484-23.524-8.484c-27.626 0-42.17 25.693-42.17 54.287c0 37.573 19.161 56.22 42.17 56.22c22.3 0 31.278-15.51 37.08-25.435L219.6 302.66c-6.315 9.926-12.374 19.635-25.95 29.069c-7.262 5.09-23.977 15.037-47.736 15.037C100.586 346.766 64 313.81 64 255.87c0-50.636 34.415-90.637 82.88-90.637m75.483 5.328h45.565L303.31 292.24l35.125-121.678H384l-59.379 171.112H281.01z" /></svg></a>
                <a className="github-hover" href="https://github.com/JacobsM14"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.28 9.28 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10" /></svg></a>
                <a className="linkedin-hover" href="https://www.linkedin.com/in/m-esplugas/"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" /></svg></a>
                <a className="medium-hover" href="https://medium.com/@jacobsm14"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 1024 1024"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M768 317.7l-40.8 39.1c-3.6 2.7-5.3 7.1-4.6 11.4v287.7c-.7 4.4 1 8.8 4.6 11.4l40 39.1v8.7H566.4v-8.3l41.3-40.1c4.1-4.1 4.1-5.3 4.1-11.4V422.5l-115 291.6h-15.5L347.5 422.5V618c-1.2 8.2 1.7 16.5 7.5 22.4l53.8 65.1v8.7H256v-8.7l53.8-65.1a26.1 26.1 0 0 0 7-22.4V392c.7-6.3-1.7-12.4-6.5-16.7l-47.8-57.6V309H411l114.6 251.5l100.9-251.3H768z" /></svg></a>
              </div>
            </div>
          </div>
        </header>
        <div className='wave-down'>
          <svg id="visual" viewBox="0 0 2000 200" width="2000" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 159L47.7 139C95.3 119 190.7 79 285.8 68.7C381 58.3 476 77.7 571.2 98.8C666.3 120 761.7 143 857 147C952.3 151 1047.7 136 1143 121.8C1238.3 107.7 1333.7 94.3 1428.8 100.2C1524 106 1619 131 1714.2 129.8C1809.3 128.7 1904.7 101.3 1952.3 87.7L2000 74L2000 0L1952.3 0C1904.7 0 1809.3 0 1714.2 0C1619 0 1524 0 1428.8 0C1333.7 0 1238.3 0 1143 0C1047.7 0 952.3 0 857 0C761.7 0 666.3 0 571.2 0C476 0 381 0 285.8 0C190.7 0 95.3 0 47.7 0L0 0Z" fill="#191825" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
        </div>
        {/* ABOUTE ME SECTION */}
        <div id='presentation-section'>
          <h2>ABOUT MY EXPERIENCES</h2>
          <div id='presentation-section-global' className='flex justify-between'>
            <div id='row-works'>
              <h4>Works</h4>
              <Works img="Images/work-images/infinitum.webp" work="Web Developer" empresa="Infinitum Projects" start="11/2023" working="true" final="" active={active} setActive={setActive} img1="odoo" img2="python"/>
              <Works img="Images/work-images/safa.png" work="IT Technician" empresa="Escola Sagrada Familia" start="07/2021" working="false" final="12/2021" active={active} setActive={setActive} img1="windows" img2="linux"/>
            </div>
            <div className="vertical-line">
              <div id='superior-line'></div>
              <div id="line"></div>
            </div>
            <div className="about-me">
              <div className="info-about-me">
                <img src={logo_bkc} alt="mid" />
                <h4>HELLO!</h4>
                <p>I’m Marcel, I studied DAW and SMX on Jaume Viladoms. I am a Web developer specialized on Front-End and with some Back-End knowledge. I’m always practicing, improving and learning new technologies to use in my projects.</p>
              </div>
            </div>
          </div>
        </div>
        {/* TECHNOLOGIES SECTION */}
        <div className="wave-up flex flex-column">
          <svg id="visual" viewBox="0 0 2000 200" width="2000" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 103L47.7 97.2C95.3 91.3 190.7 79.7 285.8 87.8C381 96 476 124 571.2 123.3C666.3 122.7 761.7 93.3 857 90.2C952.3 87 1047.7 110 1143 125.5C1238.3 141 1333.7 149 1428.8 140.5C1524 132 1619 107 1714.2 102C1809.3 97 1904.7 112 1952.3 119.5L2000 127L2000 201L1952.3 201C1904.7 201 1809.3 201 1714.2 201C1619 201 1524 201 1428.8 201C1333.7 201 1238.3 201 1143 201C1047.7 201 952.3 201 857 201C761.7 201 666.3 201 571.2 201C476 201 381 201 285.8 201C190.7 201 95.3 201 47.7 201L0 201Z" fill="#191825" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
        </div>
        <div id="technologies-i-use" className='black-background'>
          <h2>I USE</h2>
          <div className="icons-roulete">
            <div className="circle-images flex align-center justify-center flex-column">
              {!selectedImage && <h4>Click on the logos to see more</h4>}
              {selectedImage && <img id="not-animated" src={selectedImage} alt="selected" />}
              {selectedImage && <h4>{selectedAlt}</h4>}
            </div>
            <img src="Images/tech-logos/html.png" alt="HTML" onClick={handleClick} />
            <img src="Images/tech-logos/react.png" alt="React" onClick={handleClick} />
            <img src="Images/tech-logos/PHP.png" alt="PHP" onClick={handleClick} />
            <img src="Images/tech-logos/cpp.png" alt="C++" onClick={handleClick} />
            <img src="Images/tech-logos/java.png" alt="Java" onClick={handleClick} />
            <img src="Images/tech-logos/mariadb.png" alt=" " onClick={handleClick} />
            <img src="Images/tech-logos/nextjs.png" alt="NextJs" onClick={handleClick} />
            <img src="Images/tech-logos/node.png" alt="Node" onClick={handleClick} />
            <img src="Images/tech-logos/tailwind.png" alt="Tailwind" onClick={handleClick} />
            <img src="Images/tech-logos/typescript.png" alt="TypeScript" onClick={handleClick} />
            <img src="Images/tech-logos/javascript.png" alt="JavaScritp" onClick={handleClick} />
            <img src="Images/tech-logos/css.png" alt="CSS" onClick={handleClick} />
          </div>
        </div>
        <div className="wave-down">
          <svg id="visual" viewBox="0 0 2000 200" width="2000" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 159L47.7 139C95.3 119 190.7 79 285.8 68.7C381 58.3 476 77.7 571.2 98.8C666.3 120 761.7 143 857 147C952.3 151 1047.7 136 1143 121.8C1238.3 107.7 1333.7 94.3 1428.8 100.2C1524 106 1619 131 1714.2 129.8C1809.3 128.7 1904.7 101.3 1952.3 87.7L2000 74L2000 0L1952.3 0C1904.7 0 1809.3 0 1714.2 0C1619 0 1524 0 1428.8 0C1333.7 0 1238.3 0 1143 0C1047.7 0 952.3 0 857 0C761.7 0 666.3 0 571.2 0C476 0 381 0 285.8 0C190.7 0 95.3 0 47.7 0L0 0Z" fill="#191825" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
        </div>
        {/* PROJECTS SECTION */}
        <div id="projects">
          <h2>MY PROJECTS</h2>
          <div id="projects-cont" className='flex w-80'>
            {/* HORIZONTAL CAGE */}
            <div id="project-width70" className='flex flex-wrap w-90'>
              {/* LARGE PROJECT */}
              <div className="project w-100 flex project1-color justify-between wrap-responsive-project">
                {/* TEXT */}
                <div className="text-project">
                  <h3>
                    Jacob's Manual
                  </h3>
                  <div className="project-logos flex flex-start">
                    <img src="Images/tech-logos/node.png" alt="" />
                    <img src="Images/tech-logos/react.png" alt="" />
                  </div>
                  <p>Here, you can discover numerous tips and exercises to help you learn programming.</p>
                </div>
                {/* IMAGE */}
                <div className="images-project w-40 flex align-end" id='img1-project1'>
                  <img src="Images/project-images/image1.png" alt="img1" />
                </div>
              </div>
              {/* SHORT PROJECTS CONT */}
              <div className="w-100 flex justify-between short-projects">
                {/* SHORT PROJECT */}
                <div className="project flex flex-column w-50 project2-color justify-between">
                  {/* TEXT */}
                  <div className="text-project w-90">
                    <h3>
                      JacobFitness
                    </h3>
                    <div className="project-logos flex flex-start">
                      <img src="Images/tech-logos/node.png" alt="" />
                      <img src="Images/tech-logos/react.png" alt="" />
                    </div>
                    <p className='w-80 little-project'>Welcome to JacobFitness, where you can manage your workout routine and track gym goals interactively.</p>
                  </div>
                  {/* IMAGE */}
                  <div className="flex flex-end images-project w-100 align-end" id='img2-project2'>
                    <img src="Images/project-images/image2.png" alt="img2" />
                  </div>
                </div>
                {/* SHORT PROJECT */}
                <div className="project flex flex-column w-50 project3-color justify-between">
                  {/* TEXT */}
                  <div className="text-project little-project w-90">
                    <h3>
                      Jacob’s Calendar
                    </h3>
                    <div className="project-logos flex flex-start">
                      <img src="Images/tech-logos/node.png" alt="" />
                      <img src="Images/tech-logos/react.png" alt="" />
                    </div>
                    <p>A fantastic app, free for everyone! It allows you to manage your own calendars.</p>
                  </div>
                  {/* IMAGE */}
                  <div className="images-project w-100 flex flex-end align-end justify-between" id='img3-project3'>
                    <img src="Images/project-images/image3.png" alt="" />
                  </div>
                </div>

              </div>
            </div>
            {/* VERTICAL CAGE */}
            <div id='project-width30' className='flex flex-wrap w-30 wrap-responsive-project'>
              <div className="project flex flex-column project4-color">
                {/* TEXT */}
                <div className="text-project w-90">
                  <h3>
                    Jacob’s Store
                  </h3>
                  <div className="project-logos flex flex-start">
                    <img src="Images/tech-logos/node.png" alt="" />
                    <img src="Images/tech-logos/react.png" alt="" />
                  </div>
                  <p>Explore my store for a variety of products from Jacobs Products Industries that suit your needs perfectly. Enjoy a personalized shopping experience!</p>
                </div>
                {/* IMAGE */}
                <div className="images-project w-100 flex flex-end align-end" id='img4-project4'>
                  <img src="Images/project-images/image1.png" alt="img1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FOOTER SECTION */}
        <div className="wave-up flex flex-column">
          <svg id="visual" viewBox="0 0 2000 200" width="2000" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 103L47.7 97.2C95.3 91.3 190.7 79.7 285.8 87.8C381 96 476 124 571.2 123.3C666.3 122.7 761.7 93.3 857 90.2C952.3 87 1047.7 110 1143 125.5C1238.3 141 1333.7 149 1428.8 140.5C1524 132 1619 107 1714.2 102C1809.3 97 1904.7 112 1952.3 119.5L2000 127L2000 201L1952.3 201C1904.7 201 1809.3 201 1714.2 201C1619 201 1524 201 1428.8 201C1333.7 201 1238.3 201 1143 201C1047.7 201 952.3 201 857 201C761.7 201 666.3 201 571.2 201C476 201 381 201 285.8 201C190.7 201 95.3 201 47.7 201L0 201Z" fill="#191825" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
        </div>
        <footer className='black-background'>
          <h3>My Social Media</h3>
          <div className="link-media flex justify-center">
            <a className="cv-hover" href={cv}><svg xmlns="http://www.w3.org/2000/svg" width="112" height="128" viewBox="0 0 448 512"><path d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm98.88 133.234c19.636 0 37.082 6.789 49.929 16.971c11.88 9.452 17.444 18.907 22.298 27.393l-33.923 16.949c-2.427-5.565-5.347-11.387-12.846-17.682c-8.248-6.552-16.478-8.484-23.524-8.484c-27.626 0-42.17 25.693-42.17 54.287c0 37.573 19.161 56.22 42.17 56.22c22.3 0 31.278-15.51 37.08-25.435L219.6 302.66c-6.315 9.926-12.374 19.635-25.95 29.069c-7.262 5.09-23.977 15.037-47.736 15.037C100.586 346.766 64 313.81 64 255.87c0-50.636 34.415-90.637 82.88-90.637m75.483 5.328h45.565L303.31 292.24l35.125-121.678H384l-59.379 171.112H281.01z" /></svg></a>
            <a className="stackoverflow-hover" href="https://stackoverflow.com/users/22908225/jacobo"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 15v6H5v-6m11 2H8m7.913-2.337L8.087 13m8.626-.62L9.463 9m8.71 1.642L12.044 5.5m7.99 3.304L15.109 2.5" /></svg></a>
            <a className="github-hover" href="https://github.com/JacobsM14"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.28 9.28 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10" /></svg></a>
            <a className="email-hover" onClick={handleEmailClick} href=""><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" /></svg></a>
            <a className="linkedin-hover" href="https://www.linkedin.com/in/m-esplugas/"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" /></svg></a>
            <a className="medium-hover" href="https://medium.com/@jacobsm14"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 1024 1024"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M768 317.7l-40.8 39.1c-3.6 2.7-5.3 7.1-4.6 11.4v287.7c-.7 4.4 1 8.8 4.6 11.4l40 39.1v8.7H566.4v-8.3l41.3-40.1c4.1-4.1 4.1-5.3 4.1-11.4V422.5l-115 291.6h-15.5L347.5 422.5V618c-1.2 8.2 1.7 16.5 7.5 22.4l53.8 65.1v8.7H256v-8.7l53.8-65.1a26.1 26.1 0 0 0 7-22.4V392c.7-6.3-1.7-12.4-6.5-16.7l-47.8-57.6V309H411l114.6 251.5l100.9-251.3H768z" /></svg></a>
          </div>
        </footer>
      </div>
    </>

  )
}

export default App
