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
    <div className='container mx-auto space-y-10'>
      <div>
        <h1>Timeline</h1>
      </div>
      <div>
        <div className=' p-3 rounded-2xl space-y-2'>
          {
            added.map(add => <Added add={add} key={add.id}></Added>)
              
          }
        </div>
      </div>

    </div>
  )
}
