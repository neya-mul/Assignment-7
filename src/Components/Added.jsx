import React, { useContext } from 'react'
import audioImg from "../assets/call.png"
import msgImg from "../assets/text.png"
import vidoImg from "../assets/video.png"
import { FriendContext } from '../Context/FriendProvider'
// import { data } from 'react-router'

export default function Added({ add }) {
    const date = new Date()
    const { type, added, isAdded } = useContext(FriendContext)


    return (

        <div className='bg-white p-2 rounded-2xl flex gap-3 items-center'>
            <img src={add.type === 'audio' ? audioImg : add.type === 'message' ? msgImg : vidoImg} alt="" />
            <div>
                {
                    add.type === 'audio' ?
                        (<h1>Call with <span className='font-bold'>{add.name}</span></h1>) :
                        add.type === 'message' ?
                            (<h1>Chat with <span className='font-bold'>{add.name}</span></h1>)
                            :
                            (<h1>Video call with <span className='font-bold'>{add.name}</span></h1>)
                }
                <p>{date.toLocaleDateString()}</p>
            </div>
        </div>

    )
}
