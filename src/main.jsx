import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { LanguagesProvider } from './context/LanguagesContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguagesProvider>
    <App />
    </LanguagesProvider>
  </React.StrictMode>,
)
