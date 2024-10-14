import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { CART } from './store/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={CART}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
