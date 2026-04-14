import React, { use } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { FaBell } from 'react-icons/fa'
import { FaBoxArchive } from 'react-icons/fa6'
import { FiArchive } from 'react-icons/fi'
import { useParams } from 'react-router'
const friendsPromise = fetch("/friends.json")
    .then(res => res.json())

export default function Details() {
    const friends = use(friendsPromise)
    // console.log(friends);
    const { id } = useParams()
    const expectedFriend = friends.find(friend => friend.id == id)
    const { name, status, picture, email, bio, next_due_date, tags, days_since_contact, goal } = expectedFriend
    console.log(expectedFriend);



    return (
        <div className='container mx-auto my-10 flex flex-col md:flex-row gap-10 justify-between border p-2'>
            {/* left side */}
            <div className='space-y-2 md:max-w-[500px] flex-1 '>
                <div className='text-center bg-white p-6 border border-gray-300 rounded-2xl'>
                    <img src={picture} alt="" className='mx-auto rounded-full'/>
                    <h1>{name}</h1>
                    <p> {status}</p>
                    <p> {tags} </p>
                    <p>{email}</p>
                </div>
                <div  className='space-y-2'>
                    <div className='text-center border rounded-2xl overflow-hidden border-gray-300'><button className='flex w-full items-center justify-center p-2 bg-white'><FaBell /> Snooze 2 weeks</button> </div>
                    <div className='text-center border rounded-2xl overflow-hidden border-gray-300'><button className='flex w-full items-center justify-center p-2 bg-white'><FaBoxArchive /> Archive</button> </div>
                    <div className='text-center border rounded-2xl overflow-hidden border-gray-300'><button className='flex w-full items-center justify-center p-2 bg-white'><AiFillDelete /> Delete</button> </div>
                </div>

            </div>
            {/* right side */}
            <div className='flex-2'>
                <div className='text-center gap-3 grid grid-cols-1 lg:grid-cols-3' >
                    <div className='mix-w-[200px] p-10 bg-white  rounded-2xl border border-gray-500'>
                        <h1 className='text-3xl font-bold'>{days_since_contact}</h1>
                        <p>Days since contact</p>
                    </div>
                    <div className='mix-w-[200px] p-10 bg-white  rounded-2xl border border-gray-500'>
                        <h1 className='text-3xl font-bold'>{goal}</h1>
                        <p>Goal</p>
                    </div>
                    <div className='mix-w-[200px] p-10 bg-white  rounded-2xl border border-gray-500'>
                        <h1 className='text-3xl font-bold'>{next_due_date}</h1>
                        <p>Next due data</p>
                    </div>
                </div>

                <div>

                </div>
            </div>

        </div>
    )
}
