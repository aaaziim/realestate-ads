import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import RouterPaths from './Routers/RouterPaths/RouterPaths.jsx'
import AuthProvider from './providers/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <AuthProvider>
    <RouterPaths></RouterPaths>
    </AuthProvider>
  </StrictMode>,
)
