import React from 'react'
import { Link } from 'react-router'

export default function Error() {
  return (
    <div className='container mx-auto p-20 text-center'>
        <h1 className='text-[10rem]'>404</h1>
        <p className='text-[3rem]'>Page not found</p>
        <p>Ooops! The page you are looking for doesn't exist or have been removed</p>
        <Link to='/' className='btn bg-green-800 text-white mt-3'>Go Home</Link>
    </div>
  )
}
