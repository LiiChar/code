import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import BusketProvider from './context/useBusket.tsx'
import ModalProvider from './context/useModal.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <BusketProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </BusketProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
