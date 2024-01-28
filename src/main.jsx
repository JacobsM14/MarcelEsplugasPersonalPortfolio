import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './styles/index.css'
// import { createApp } from 'vue'
// import App from './App.vue'
// import './index.css'

// createApp(App).mount('#app')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
