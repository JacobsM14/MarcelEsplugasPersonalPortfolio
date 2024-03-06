import { useState } from 'react'
import logo from './../assets/logo.png'
import logo_bkc from './../assets/bkc2.png'
// import './../styles/App.css'
import './../styles/App2.css'

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
        <header id='header-porfolio'>
          <nav>
            <a href="#header-portfolio">Home</a>
            <a href="#presentation-section">Experiences</a>
            <a href="#technologies-i-use">Technologies</a>
            <a href="#projects">Projects</a>
          </nav>
          <div className='info-header-content'>
            <div className="title-content">
              <h1 className='desktop-title'>Hi,I’m Marcel.</h1>
              <h1 className='mobile-title'>Marcel Esplugas</h1>
              <p>I build websites.</p>
            </div>
            <div className='images-and-links'>
              <img src={logo} alt="logo" />
              <div className="url-svg">
                <a className="cv_icon" href={cv}><svg xmlns="http://www.w3.org/2000/svg" width="112" height="128" viewBox="0 0 448 512"><path d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm98.88 133.234c19.636 0 37.082 6.789 49.929 16.971c11.88 9.452 17.444 18.907 22.298 27.393l-33.923 16.949c-2.427-5.565-5.347-11.387-12.846-17.682c-8.248-6.552-16.478-8.484-23.524-8.484c-27.626 0-42.17 25.693-42.17 54.287c0 37.573 19.161 56.22 42.17 56.22c22.3 0 31.278-15.51 37.08-25.435L219.6 302.66c-6.315 9.926-12.374 19.635-25.95 29.069c-7.262 5.09-23.977 15.037-47.736 15.037C100.586 346.766 64 313.81 64 255.87c0-50.636 34.415-90.637 82.88-90.637m75.483 5.328h45.565L303.31 292.24l35.125-121.678H384l-59.379 171.112H281.01z" /></svg></a>
                <a className="git_icon" href="https://github.com/JacobsM14"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.28 9.28 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10" /></svg></a>
                <a className="linkedin_icon" href="https://www.linkedin.com/in/m-esplugas/"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" /></svg></a>
                <a className="medium_icon" href="https://medium.com/@jacobsm14"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 1024 1024"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M768 317.7l-40.8 39.1c-3.6 2.7-5.3 7.1-4.6 11.4v287.7c-.7 4.4 1 8.8 4.6 11.4l40 39.1v8.7H566.4v-8.3l41.3-40.1c4.1-4.1 4.1-5.3 4.1-11.4V422.5l-115 291.6h-15.5L347.5 422.5V618c-1.2 8.2 1.7 16.5 7.5 22.4l53.8 65.1v8.7H256v-8.7l53.8-65.1a26.1 26.1 0 0 0 7-22.4V392c.7-6.3-1.7-12.4-6.5-16.7l-47.8-57.6V309H411l114.6 251.5l100.9-251.3H768z" /></svg></a>
              </div>
            </div>
          </div>
        </header>
        {/* SECTION GRADIENT */}
        <div className="background-gradient">
          {/* WAVE DOWN */}
          <div className="wave-down">
            {/* 500px */}
            <svg className='wave-500' id="visual" viewBox="0 0 500 100" width="500" height="100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 46L16.7 44C33.3 42 66.7 38 100 43.3C133.3 48.7 166.7 63.3 200 68.2C233.3 73 266.7 68 300 58.8C333.3 49.7 366.7 36.3 400 31.8C433.3 27.3 466.7 31.7 483.3 33.8L500 36L500 0L483.3 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z" fill="#191825" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
            {/* 900px */}
            <svg className='wave-900' id="visual" viewBox="0 0 900 200" width="900" height="200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 125L18.8 113.2C37.7 101.3 75.3 77.7 112.8 67.5C150.3 57.3 187.7 60.7 225.2 76.3C262.7 92 300.3 120 337.8 119.8C375.3 119.7 412.7 91.3 450.2 77.5C487.7 63.7 525.3 64.3 562.8 77C600.3 89.7 637.7 114.3 675.2 119.8C712.7 125.3 750.3 111.7 787.8 101.5C825.3 91.3 862.7 84.7 881.3 81.3L900 78L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z" fill="#191825" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
            {/* 4000px */}
            <svg className='wave-4000' id="visual" viewBox="0 0 4000 300" width="4000" height="300" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 205L60.7 194.2C121.3 183.3 242.7 161.7 363.8 156.3C485 151 606 162 727.2 162.2C848.3 162.3 969.7 151.7 1091 162.3C1212.3 173 1333.7 205 1454.8 199.7C1576 194.3 1697 151.7 1818.2 149.5C1939.3 147.3 2060.7 185.7 2181.8 185.2C2303 184.7 2424 145.3 2545.2 123.3C2666.3 101.3 2787.7 96.7 2909 99.2C3030.3 101.7 3151.7 111.3 3272.8 135.7C3394 160 3515 199 3636.2 209.3C3757.3 219.7 3878.7 201.3 3939.3 192.2L4000 183L4000 0L3939.3 0C3878.7 0 3757.3 0 3636.2 0C3515 0 3394 0 3272.8 0C3151.7 0 3030.3 0 2909 0C2787.7 0 2666.3 0 2545.2 0C2424 0 2303 0 2181.8 0C2060.7 0 1939.3 0 1818.2 0C1697 0 1576 0 1454.8 0C1333.7 0 1212.3 0 1091 0C969.7 0 848.3 0 727.2 0C606 0 485 0 363.8 0C242.7 0 121.3 0 60.7 0L0 0Z" fill="#191825" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
          </div>
          {/* ABOUTE ME SECTION */}
          <div id='info-section'>
            <h2>ABOUT MY EXPERIENCES</h2>
            <div id='info-section-global'>
              <div id='row-works'>
                <h4>Works</h4>
                <Works img="Images/work-images/infinitum.webp" work="Web Developer" empresa="Infinitum Projects" start="11/2023" working="true" final="" active={active} setActive={setActive} img1="odoo" img2="python" />
                <Works img="Images/work-images/safa.png" work="IT Technician" empresa="Escola Sagrada Familia" start="07/2021" working="false" final="12/2021" active={active} setActive={setActive} img1="windows" img2="linux" />
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
          {/* WAVE UP */}
          <div className="wave-up">
            {/* 4000px */}
            <svg className='wave-4000' id="visual" viewBox="0 0 4000 300" width="4000" height="300" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 72L60.7 74C121.3 76 242.7 80 363.8 107.8C485 135.7 606 187.3 727.2 187.5C848.3 187.7 969.7 136.3 1091 135.8C1212.3 135.3 1333.7 185.7 1454.8 204.7C1576 223.7 1697 211.3 1818.2 190.8C1939.3 170.3 2060.7 141.7 2181.8 130.8C2303 120 2424 127 2545.2 129.8C2666.3 132.7 2787.7 131.3 2909 147.8C3030.3 164.3 3151.7 198.7 3272.8 187.8C3394 177 3515 121 3636.2 93.3C3757.3 65.7 3878.7 66.3 3939.3 66.7L4000 67L4000 301L3939.3 301C3878.7 301 3757.3 301 3636.2 301C3515 301 3394 301 3272.8 301C3151.7 301 3030.3 301 2909 301C2787.7 301 2666.3 301 2545.2 301C2424 301 2303 301 2181.8 301C2060.7 301 1939.3 301 1818.2 301C1697 301 1576 301 1454.8 301C1333.7 301 1212.3 301 1091 301C969.7 301 848.3 301 727.2 301C606 301 485 301 363.8 301C242.7 301 121.3 301 60.7 301L0 301Z" fill="#191825" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
            {/* 900px */}
            <svg className='wave-900' id="visual" viewBox="0 0 900 200" width="900" height="200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 81L18.8 93.8C37.7 106.7 75.3 132.3 112.8 134.3C150.3 136.3 187.7 114.7 225.2 110.5C262.7 106.3 300.3 119.7 337.8 126C375.3 132.3 412.7 131.7 450.2 121.3C487.7 111 525.3 91 562.8 86.2C600.3 81.3 637.7 91.7 675.2 91C712.7 90.3 750.3 78.7 787.8 74.8C825.3 71 862.7 75 881.3 77L900 79L900 201L881.3 201C862.7 201 825.3 201 787.8 201C750.3 201 712.7 201 675.2 201C637.7 201 600.3 201 562.8 201C525.3 201 487.7 201 450.2 201C412.7 201 375.3 201 337.8 201C300.3 201 262.7 201 225.2 201C187.7 201 150.3 201 112.8 201C75.3 201 37.7 201 18.8 201L0 201Z" fill="#191825" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
            {/* 500px */}
            <svg className='wave-500' id="visual" viewBox="0 0 500 100" width="500" height="100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 24L16.7 30.3C33.3 36.7 66.7 49.3 100 50C133.3 50.7 166.7 39.3 200 34C233.3 28.7 266.7 29.3 300 38.3C333.3 47.3 366.7 64.7 400 64.2C433.3 63.7 466.7 45.3 483.3 36.2L500 27L500 101L483.3 101C466.7 101 433.3 101 400 101C366.7 101 333.3 101 300 101C266.7 101 233.3 101 200 101C166.7 101 133.3 101 100 101C66.7 101 33.3 101 16.7 101L0 101Z" fill="#191825" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
          </div>
        </div>
        {/* TECHNOLOGIES SECTION */}
        <div id="technologies-i-use" className='black-background'>
          <h2>I USE</h2>
          <div className="icons-roulete">
            <div className="circle-images flex align-center justify-center flex-column">
              {!selectedImage && <h4>Click on the logos to see more</h4>}
              {selectedImage && <img id="not-animated" src={selectedImage} alt="selected" />}
              {selectedImage && selectedAlt != "MariaDB" && <h4>{selectedAlt}</h4>}
            </div>
            <img src="Images/tech-logos/html.png" alt="HTML" onClick={handleClick} />
            <img src="Images/tech-logos/react.png" alt="React" onClick={handleClick} />
            <img src="Images/tech-logos/PHP.png" alt="PHP" onClick={handleClick} />
            <img src="Images/tech-logos/cpp.png" alt="C++" onClick={handleClick} />
            <img src="Images/tech-logos/java.png" alt="Java" onClick={handleClick} />
            <img src="Images/tech-logos/mariadb.png" alt="MariaDB" onClick={handleClick} />
            <img src="Images/tech-logos/nextjs.png" alt="NextJs" onClick={handleClick} />
            <img src="Images/tech-logos/node.png" alt="Node" onClick={handleClick} />
            <img src="Images/tech-logos/tailwind.png" alt="Tailwind" onClick={handleClick} />
            <img src="Images/tech-logos/typescript.png" alt="TypeScript" onClick={handleClick} />
            <img src="Images/tech-logos/javascript.png" alt="JavaScritp" onClick={handleClick} />
            <img src="Images/tech-logos/css.png" alt="CSS" onClick={handleClick} />
          </div>
        </div>
        {/* SECTION GRADIENT */}
        <div className="background-gradient">
          {/* WAVE DOWN */}
          <div className="wave-down">
            {/* 500px */}
            <svg className='wave-500' id="visual" viewBox="0 0 500 100" width="500" height="100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 46L16.7 44C33.3 42 66.7 38 100 43.3C133.3 48.7 166.7 63.3 200 68.2C233.3 73 266.7 68 300 58.8C333.3 49.7 366.7 36.3 400 31.8C433.3 27.3 466.7 31.7 483.3 33.8L500 36L500 0L483.3 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z" fill="#191825" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
            {/* 900px */}
            <svg className='wave-900' id="visual" viewBox="0 0 900 200" width="900" height="200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 125L18.8 113.2C37.7 101.3 75.3 77.7 112.8 67.5C150.3 57.3 187.7 60.7 225.2 76.3C262.7 92 300.3 120 337.8 119.8C375.3 119.7 412.7 91.3 450.2 77.5C487.7 63.7 525.3 64.3 562.8 77C600.3 89.7 637.7 114.3 675.2 119.8C712.7 125.3 750.3 111.7 787.8 101.5C825.3 91.3 862.7 84.7 881.3 81.3L900 78L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z" fill="#191825" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
            {/* 4000px */}
            <svg className='wave-4000' id="visual" viewBox="0 0 4000 300" width="4000" height="300" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 205L60.7 194.2C121.3 183.3 242.7 161.7 363.8 156.3C485 151 606 162 727.2 162.2C848.3 162.3 969.7 151.7 1091 162.3C1212.3 173 1333.7 205 1454.8 199.7C1576 194.3 1697 151.7 1818.2 149.5C1939.3 147.3 2060.7 185.7 2181.8 185.2C2303 184.7 2424 145.3 2545.2 123.3C2666.3 101.3 2787.7 96.7 2909 99.2C3030.3 101.7 3151.7 111.3 3272.8 135.7C3394 160 3515 199 3636.2 209.3C3757.3 219.7 3878.7 201.3 3939.3 192.2L4000 183L4000 0L3939.3 0C3878.7 0 3757.3 0 3636.2 0C3515 0 3394 0 3272.8 0C3151.7 0 3030.3 0 2909 0C2787.7 0 2666.3 0 2545.2 0C2424 0 2303 0 2181.8 0C2060.7 0 1939.3 0 1818.2 0C1697 0 1576 0 1454.8 0C1333.7 0 1212.3 0 1091 0C969.7 0 848.3 0 727.2 0C606 0 485 0 363.8 0C242.7 0 121.3 0 60.7 0L0 0Z" fill="#191825" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
          </div>
          {/* PROJECTS SECTION */}
          <div id="projects">
            <h2>MY PROJECTS</h2>
            <div id="projects-cont" className='flex w-70'>
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
                  <div className="images-project w-40 flex align-end flex-end" id='img1-project1'>
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
          {/* WAVE UP */}
          <div className="wave-up">
            {/* 4000px */}
            <svg className='wave-4000' id="visual" viewBox="0 0 4000 300" width="4000" height="300" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 72L60.7 74C121.3 76 242.7 80 363.8 107.8C485 135.7 606 187.3 727.2 187.5C848.3 187.7 969.7 136.3 1091 135.8C1212.3 135.3 1333.7 185.7 1454.8 204.7C1576 223.7 1697 211.3 1818.2 190.8C1939.3 170.3 2060.7 141.7 2181.8 130.8C2303 120 2424 127 2545.2 129.8C2666.3 132.7 2787.7 131.3 2909 147.8C3030.3 164.3 3151.7 198.7 3272.8 187.8C3394 177 3515 121 3636.2 93.3C3757.3 65.7 3878.7 66.3 3939.3 66.7L4000 67L4000 301L3939.3 301C3878.7 301 3757.3 301 3636.2 301C3515 301 3394 301 3272.8 301C3151.7 301 3030.3 301 2909 301C2787.7 301 2666.3 301 2545.2 301C2424 301 2303 301 2181.8 301C2060.7 301 1939.3 301 1818.2 301C1697 301 1576 301 1454.8 301C1333.7 301 1212.3 301 1091 301C969.7 301 848.3 301 727.2 301C606 301 485 301 363.8 301C242.7 301 121.3 301 60.7 301L0 301Z" fill="#191825" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
            {/* 900px */}
            <svg className='wave-900' id="visual" viewBox="0 0 900 200" width="900" height="200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 81L18.8 93.8C37.7 106.7 75.3 132.3 112.8 134.3C150.3 136.3 187.7 114.7 225.2 110.5C262.7 106.3 300.3 119.7 337.8 126C375.3 132.3 412.7 131.7 450.2 121.3C487.7 111 525.3 91 562.8 86.2C600.3 81.3 637.7 91.7 675.2 91C712.7 90.3 750.3 78.7 787.8 74.8C825.3 71 862.7 75 881.3 77L900 79L900 201L881.3 201C862.7 201 825.3 201 787.8 201C750.3 201 712.7 201 675.2 201C637.7 201 600.3 201 562.8 201C525.3 201 487.7 201 450.2 201C412.7 201 375.3 201 337.8 201C300.3 201 262.7 201 225.2 201C187.7 201 150.3 201 112.8 201C75.3 201 37.7 201 18.8 201L0 201Z" fill="#191825" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
            {/* 500px */}
            <svg className='wave-500' id="visual" viewBox="0 0 500 100" width="500" height="100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 24L16.7 30.3C33.3 36.7 66.7 49.3 100 50C133.3 50.7 166.7 39.3 200 34C233.3 28.7 266.7 29.3 300 38.3C333.3 47.3 366.7 64.7 400 64.2C433.3 63.7 466.7 45.3 483.3 36.2L500 27L500 101L483.3 101C466.7 101 433.3 101 400 101C366.7 101 333.3 101 300 101C266.7 101 233.3 101 200 101C166.7 101 133.3 101 100 101C66.7 101 33.3 101 16.7 101L0 101Z" fill="#191825" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
          </div>
        </div>
        {/* FOOTER */}
        <footer className='black-background'>
          <h3>My Social Media</h3>
          <div className="link-media flex justify-center">
            <a className="cv_icon" href={cv}><svg xmlns="http://www.w3.org/2000/svg" width="112" height="128" viewBox="0 0 448 512"><path d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm98.88 133.234c19.636 0 37.082 6.789 49.929 16.971c11.88 9.452 17.444 18.907 22.298 27.393l-33.923 16.949c-2.427-5.565-5.347-11.387-12.846-17.682c-8.248-6.552-16.478-8.484-23.524-8.484c-27.626 0-42.17 25.693-42.17 54.287c0 37.573 19.161 56.22 42.17 56.22c22.3 0 31.278-15.51 37.08-25.435L219.6 302.66c-6.315 9.926-12.374 19.635-25.95 29.069c-7.262 5.09-23.977 15.037-47.736 15.037C100.586 346.766 64 313.81 64 255.87c0-50.636 34.415-90.637 82.88-90.637m75.483 5.328h45.565L303.31 292.24l35.125-121.678H384l-59.379 171.112H281.01z" /></svg></a>
            <a className="stackoverflow_icon" href="https://stackoverflow.com/users/22908225/jacobo"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 15v6H5v-6m11 2H8m7.913-2.337L8.087 13m8.626-.62L9.463 9m8.71 1.642L12.044 5.5m7.99 3.304L15.109 2.5" /></svg></a>
            <a className="git_icon" href="https://github.com/JacobsM14"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.28 9.28 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10" /></svg></a>
            <a className="email_icon" onClick={handleEmailClick} href=""><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" /></svg></a>
            <a className="linkedin_icon" href="https://www.linkedin.com/in/m-esplugas/"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" /></svg></a>
            <a className="medium_icon" href="https://medium.com/@jacobsm14"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 1024 1024"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M768 317.7l-40.8 39.1c-3.6 2.7-5.3 7.1-4.6 11.4v287.7c-.7 4.4 1 8.8 4.6 11.4l40 39.1v8.7H566.4v-8.3l41.3-40.1c4.1-4.1 4.1-5.3 4.1-11.4V422.5l-115 291.6h-15.5L347.5 422.5V618c-1.2 8.2 1.7 16.5 7.5 22.4l53.8 65.1v8.7H256v-8.7l53.8-65.1a26.1 26.1 0 0 0 7-22.4V392c.7-6.3-1.7-12.4-6.5-16.7l-47.8-57.6V309H411l114.6 251.5l100.9-251.3H768z" /></svg></a>
          </div>
        </footer>
      </div>
    </>

  )
}

export default App
