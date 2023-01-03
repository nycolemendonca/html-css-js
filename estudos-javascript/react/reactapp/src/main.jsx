import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home/index'
import './pages/Home/style.css'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
