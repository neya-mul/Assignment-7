import React from 'react'

export default function Friend({friend}) {
  return (
    <div className='p-7 text-center max-w-[300px] min-w-[300px] border mx-auto bg-white rounded-2xl border-gray-400'>

        <img src={friend.picture} alt=""  className='mx-auto rounded-full'/>
        <h1>{friend.name}</h1>
        <p>{friend.days_since_contact} Days ago</p>
        <p>{friend.status}</p>
    </div>
  )
}
