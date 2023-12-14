import { useState } from 'react'
import './styles/page.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={"header flexCont"}>
        <div className={"headerTitle desktopTitle"}>
          <h1>Hi! I'm Marcel Esplugas</h1>
          <h4>I build Websites</h4>
        </div>
        <div className={"headerTitle mobileTitle"}>
          <h1>Marcel Esplugas</h1>
        </div>
        <div className={"imageShow"}>
          <img
            src="/Images/Logos/logo.png"
            alt="Picture of the author"
            style={{
              width: 2000,
              height: 2000
            }}
            width={2000}
            height={2000}
          />
          <div className={"links"}>
            <a href="https://www.linkedin.com/in/marcelesplugas/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="146"
                height="166.85714285714286"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48zm98.88 133.234c19.636 0 37.082 6.789 49.929 16.971c11.88 9.452 17.444 18.907 22.298 27.393l-33.923 16.949c-2.427-5.565-5.347-11.387-12.846-17.682c-8.248-6.552-16.478-8.484-23.524-8.484c-27.626 0-42.17 25.693-42.17 54.287c0 37.573 19.161 56.22 42.17 56.22c22.3 0 31.278-15.51 37.08-25.435L219.6 302.66c-6.315 9.926-12.374 19.635-25.95 29.069c-7.262 5.09-23.977 15.037-47.736 15.037C100.586 346.766 64 313.81 64 255.87c0-50.636 34.415-90.637 82.88-90.637zm75.483 5.328h45.565L303.31 292.24l35.125-121.678H384l-59.379 171.112H281.01l-58.647-171.111z"
                />
              </svg>
            </a>
            <a href="https://github.com/JacobsM14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="146"
                height="146"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/m-esplugas/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="146"
                height="146"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/marcelesplugas/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="146"
                height="146"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4.001 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm13.3 12.94c-.1-.05-.15-.2-.15-.301V8.006c0-.1.05-.25.15-.351l.955-1.105V6.5h-3.415l-2.56 6.478L9.367 6.5H5.852v.05l.904 1.256c.201.2.251.502.251.753v5.523c.05.302 0 .653-.15.954L5.5 16.894v.05h3.616v-.05L7.76 15.087c-.15-.302-.201-.603-.15-.954V9.11c.05.1.1.1.15.301l3.414 7.633h.05L14.54 8.76c-.05.3-.05.652-.05.904v5.925c0 .15-.05.25-.15.351l-1.005.954v.05h4.921v-.05l-.954-.954Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App