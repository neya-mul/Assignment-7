


import React, { useContext, useState } from 'react'
import { FriendContext } from '../Context/FriendProvider'

import Added from '../Components/Added'
export default function Timeline() {
  const { added } = useContext(FriendContext)
  const [filter, setFilter] = useState('all')
  const display = filter === 'all' ? added : added.filter(a => a.type === filter)

  const textButton = () => {
    setFilter('message')
  }
  const audioButton = () => {
    setFilter('audio')
  }
  const videoButton = () => {
    setFilter('video')
  }


  return (
    <div className='container mx-auto space-y-5 my-10 min-h-[37vh]'>
      <div>
        <h1 className='text-3xl font-bold'>Timeline</h1>
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn m-1 bg-white" >Filter timeline</div>
          <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
       
            <button onClick={textButton} className='btn'><a>Text</a></button>
            <button onClick={audioButton} className='btn'><a>Audio</a></button>
            <button onClick={videoButton} className='btn'><a>Video</a></button>
          </ul>
        </div>

      </div>
      <div>
        <div className=' p-2 rounded-2xl space-y-2'>
          {
            display.length === 0 ? <div className='flex justify-center items-center pt-30'><h2 className='font-bold text-2xl'>No friend to show</h2></div>

              : display.map(add => <Added add={add} key={add.id}></Added>)

          }
        </div>
      </div>

    </div>
  )

}