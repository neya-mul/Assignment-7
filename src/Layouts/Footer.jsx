import React from 'react'
import { CiFacebook } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'

export default function Footer() {
  return (
    <div className='bg-[#244D3F] p-20 h-auto text-center text-white space-y-3'>
      <h1 className='text-4xl font-bold text-white text-center'>KeenKeeper</h1>
      <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
      <p className='font-bold'>Social Links</p>
      <div className='flex justify-center gap-1'>
        <FaInstagram />
        <CiFacebook />
        <RiTwitterXFill />
      </div>
      <hr className='opacity-10 my-10' />
      <div className='lg:flex space-y-10 justify-between text-center'>
        <p>© 2026 KeenKeeper. All rights reserved.</p>
        <div className='flex flex-col lg:flex-row justify-between gap-4'>
          <span>Privacy Policy</span>
          <span>Terms and Service</span>
          <span>Cookies</span>
        </div>
      </div>
    </div>
  )
}
