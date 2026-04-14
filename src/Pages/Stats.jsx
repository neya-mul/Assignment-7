import React, { useContext } from 'react'
import { FriendContext } from '../Context/FriendProvider'
import audioImg from "../assets/call.png"
import msgImg from "../assets/text.png"
import vidoImg from "../assets/video.png"
export default function Stats() {
  const { message,
    setMessage,
    audio,
    setAudio,
    isVideo,
    setVideo } = useContext(FriendContext)
  // console.log(setAudio);

  return (
    <div className='container mx-auto space-y-10'>
      <div>
        <h1>Timeline</h1>
      </div>
      <div>
        <div>
          <img src={`${audio ? audioImg : message ? msgImg : isVideo ? vidoImg : null}`} alt="" />
        </div>
      </div>

    </div>
  )
}
