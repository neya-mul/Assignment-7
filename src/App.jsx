import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import Navbar from './Layouts/Navbar'
import Footer from './Layouts/Footer'

function App() {
  const {pathname} = useLocation()
useEffect(()=>{
  document.documentElement.scrollTo({
    top:0,
    left:0,
    // behavior:'smooth'
  })
}, [pathname])

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>

    </>
  )
}

export default App
