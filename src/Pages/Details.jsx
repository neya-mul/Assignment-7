import React, { use } from 'react'
import { useParams } from 'react-router'
const friendsPromise = fetch("/friends.json")
    .then(res => res.json())

export default function Details() {
    const friends = use(friendsPromise)
    // console.log(friends);
    const { id } = useParams()
    const expectedFriend = friends.find(friend => friend.id == id)
    console.log(expectedFriend);
    


    return (
        <div>{expectedFriend.name}</div>
    )
}
