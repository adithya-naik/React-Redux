import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// this is primary css file
import './index.css'
// import bootstrap css file
import "bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
