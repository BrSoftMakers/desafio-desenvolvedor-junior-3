import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from '../src/routes/routes'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
