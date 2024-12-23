import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import RouterPaths from './Routers/RouterPaths/RouterPaths.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterPaths></RouterPaths>
  </StrictMode>,
)
