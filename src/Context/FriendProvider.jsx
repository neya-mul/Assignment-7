import React, { createContext, useState } from 'react'
export const FriendContext = createContext()


export default function FriendProvider({ children }) {
    const [added, isAdded] = useState([])
    const [type, setType] = useState("")
    const [message, setMessage] = useState(false)
    const [audio, setAudio] = useState(false)
    const [isVideo, setVideo] = useState(false)
    const obj = {
        message,
        setMessage,
        audio,
        setAudio,
        isVideo,
        setVideo,
        added,
        isAdded,
        type,
        setType
    }
    return (
        <FriendContext.Provider value={obj}>
            {children}

        </FriendContext.Provider>
    )
}
