import React, { useContext } from 'react'
import { FriendContext } from '../Context/FriendProvider'

import Added from '../Components/Added'
export default function Stats() {
  const { message,
    setMessage,
    audio,
    setAudio,
    isVideo,
    setVideo,
    added,
    isAdded } = useContext(FriendContext)
  // console.log(setAudio);
  console.log(added);


  return (
    <div className='container mx-auto space-y-5 my-5'>
      <div>
        <h1 className='text-3xl font-bold'>Timeline</h1>
      </div>
      <div>
        <div className=' p-2 rounded-2xl space-y-2'>
          {
            added.map(add => <Added add={add} key={add.id}></Added>)
              
          }
        </div>
      </div>

    </div>
  )
}
