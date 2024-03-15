import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DarkContextProvider from './Dark.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DarkContextProvider>
    <App />
  </DarkContextProvider>
)
