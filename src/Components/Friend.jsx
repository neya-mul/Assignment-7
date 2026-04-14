import React from 'react'
import { Link } from 'react-router'

export default function Friend({friend}) {
  return (
    <Link to={`details/${friend.id}`} className='p-7 text-center max-w-[300px] min-w-[300px] border mx-auto bg-white rounded-2xl border-gray-400 space-y-4'>
        <img src={friend.picture} alt=""  className='mx-auto rounded-full'/>
        <h1>{friend.name}</h1>
        <p>{friend.days_since_contact} Days ago</p>
        <p>{friend.tags.map((tag , ind)=> <span key={ind} className='mx-1 bg-green-300 p-2 rounded-2xl text-gray-700'>{tag}</span>)}</p>
        <p className={`rounded-2xl text-white w-[100px] mx-auto ${friend.status === 'overdue'? 'bg-red-600': friend.status=== "almost due" ? 'bg-yellow-500' :'bg-green-400' }`}>{friend.status}</p>
    </Link>
  )
}
