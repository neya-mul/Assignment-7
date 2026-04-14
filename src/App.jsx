import { useState } from 'react'
import { Outlet } from 'react-router'
import Navbar from './Layouts/Navbar'
import Footer from './Layouts/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>

    </>
  )
}

export default App
