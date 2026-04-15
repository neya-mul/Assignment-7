import React from 'react'
import { IoHome } from 'react-icons/io5'
import { RiTimeLine } from 'react-icons/ri'
import { TfiStatsUp } from 'react-icons/tfi'
import { Link, NavLink } from 'react-router'

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm  mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <NavLink to='/' className={({ isActive }) => `${isActive ? 'bg-green-300' : ""} flex items-center btn text-gray-600 mx-1`}><IoHome />Home</NavLink>
            <NavLink to='/timeline' className={({ isActive }) => `${isActive ? 'bg-green-300' : ""} flex items-center btn text-gray-600 mx-1`}><RiTimeLine />
              Timeline</NavLink>
            <NavLink to='/stats' className={({ isActive }) => `${isActive ? 'bg-green-300' : ""} flex items-center btn text-gray-600 mx-1`}><TfiStatsUp />
              Stats</NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><span className='text-black'>Keen</span><span className='text-green-950'>Keeper</span></a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
           <NavLink to='/' className={({ isActive }) => `${isActive ? 'bg-green-300' : ""} flex items-center btn text-gray-600 mx-1`}><IoHome />Home</NavLink>
            <NavLink to='/timeline' className={({ isActive }) => `${isActive ? 'bg-green-300' : ""} flex items-center btn text-gray-600 mx-1`}><RiTimeLine />
              Timeline</NavLink>
            <NavLink to='/stats' className={({ isActive }) => `${isActive ? 'bg-green-300' : ""} flex items-center btn text-gray-600 mx-1`}><TfiStatsUp />
              Stats</NavLink>
        </ul>
      </div>

    </div>
  )
}
