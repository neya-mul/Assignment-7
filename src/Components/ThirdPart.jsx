import React, { use } from 'react'
import Friend from './Friend';
const friendsPromise = fetch("/friends.json")
  .then(res => res.json())

export default function ThirdPart() {
  const friends = use(friendsPromise)
  // console.log(friends);

  return (
    <div className='container mx-auto'>
      <div>
        <h1 className='text-2xl text-center lg:text-left'>Your Friends</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10'>
        {
          friends.map(friend => <Friend friend={friend} key={friend.id}></Friend>)
        }
      </div>



    </div>
  )
}
