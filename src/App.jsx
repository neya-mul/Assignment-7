import { useState } from 'react'
import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Navbar</h1>
     <Outlet></Outlet>

   
    </>
  )
}

export default App
