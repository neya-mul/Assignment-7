import React, { useContext } from 'react'
import audioImg from "../assets/call.png"
import msgImg from "../assets/text.png"
import vidoImg from "../assets/video.png"
import { FriendContext } from '../Context/FriendProvider'

export default function Added({ add }) {
    const { type } = useContext(FriendContext)
    // const { message,
    //     setMessage,
    //     audio,
    //     setAudio,
    //     isVideo,
    //     setVideo,
    //     added,
    //     isAdded } = useContext(FriendContext)
    return (
        <div>
            <img src={add.type === 'audio' ? audioImg : add.type === 'message' ? msgImg : vidoImg} alt="" />
            <h1>Meetup with {add.name}</h1>
        </div>
    )
}
