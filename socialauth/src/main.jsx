import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId='374278538598-3j00vurigkghph3n4qi1me6m90cqr1rn.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider >
  </StrictMode>,
)
