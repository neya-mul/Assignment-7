import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { RouterProvider } from 'react-router/dom'
import { router } from './Router/router.jsx'
import { RouterProvider } from 'react-router/dom'
import FriendProvider from './Context/FriendProvider.jsx'
// import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router} />
    </FriendProvider>



  </StrictMode>,
)
