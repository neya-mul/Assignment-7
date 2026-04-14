import React, { use, useContext } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { BsCameraVideo } from 'react-icons/bs'
import { FaBell } from 'react-icons/fa'
import { FaBoxArchive } from 'react-icons/fa6'
import { FiArchive } from 'react-icons/fi'
import { IoCallOutline } from 'react-icons/io5'
import { LuMessageSquareText } from 'react-icons/lu'
import { Link, useParams } from 'react-router'
import call from "../assets/call.png"
import video from "../assets/video.png"
import msg from "../assets/text.png"
import { FriendContext } from '../Context/FriendProvider'
const friendsPromise = fetch("/friends.json")
    .then(res => res.json())

export default function Details() {
    const {
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
    } = useContext(FriendContext)
    // console.log(obj);



    const friends = use(friendsPromise)
    // console.log(friends);
    const { id } = useParams()
    const expectedFriend = friends.find(friend => friend.id == id)
    const { name, status, picture, email, bio, next_due_date, tags, days_since_contact, goal } = expectedFriend
    // console.log(expectedFriend);
    const callButton = () => {
        setAudio(true)
        setType('audio')
        isAdded([...added, {...expectedFriend, type:"audio"}])
    }
    // console.log(added);

    const messageButton = () => {
        setMessage(true)
        setType('message')

        isAdded([...added,  {...expectedFriend, type:"message"}])
    }
    const videoButton = () => {
        setVideo(true)
        setType('video')

        isAdded([...added,  {...expectedFriend, type:"video"}])
    }


    return (
        <div className='container mx-auto my-10 flex flex-col md:flex-row gap-10 justify-between p-2'>
            {/* left side */}
            <div className='space-y-2 md:max-w-[500px] flex-1 '>
                <div className='text-center bg-white p-6 border border-gray-300 rounded-2xl'>
                    <img src={picture} alt="" className='mx-auto rounded-full' />
                    <h1 className='text-2xl font-bold'>{name}</h1>
                    <p className={`w-fit mx-auto p-2 rounded-2xl text-gray-900 ${status === 'overdue' ? "bg-red-300" : status === 'on-track' ? "bg-green-400" : "bg-yellow-300"}`}> {status}</p>
                    <p> {tags} </p>
                    <p>{email}</p>
                </div>
                <div className='space-y-2'>
                    <div className='text-center border rounded-2xl overflow-hidden border-gray-300'><button className='flex w-full items-center justify-center p-2 bg-white'><FaBell /> Snooze 2 weeks</button> </div>
                    <div className='text-center border rounded-2xl overflow-hidden border-gray-300'><button className='flex w-full items-center justify-center p-2 bg-white'><FaBoxArchive /> Archive</button> </div>
                    <div className='text-center border rounded-2xl overflow-hidden border-gray-300'><button className='flex w-full text-red-600 items-center justify-center p-2 bg-white'><AiFillDelete /> Delete</button> </div>
                </div>

            </div>
            {/* right side */}
            <div className='flex-2 space-y-3'>
                <div className='text-center gap-3 grid grid-cols-1 md:grid-cols-3' >
                    <div className=' p-5 lg:py-10 bg-white  rounded-2xl border border-gray-300'>
                        <h1 className='text-3xl font-bold'>{days_since_contact}</h1>
                        <p>Days since contact</p>
                    </div>
                    <div className=' p-5 lg:py-10 bg-white  rounded-2xl border border-gray-300'>
                        <h1 className='text-3xl font-bold'>{goal}</h1>
                        <p>Goal</p>
                    </div>
                    <div className=' p-5 lg:py-10 bg-white  rounded-2xl border border-gray-300'>
                        <h1 className='text-3xl font-bold'>{next_due_date}</h1>
                        <p>Next due data</p>
                    </div>
                </div>

                <div className='bg-white p-5 flex justify-between rounded-2xl border border-gray-300'>
                    <div className='space-y-7'>
                        <h1>Relationship Goal</h1>
                        <p>Connect every <span className='font-bold'>{days_since_contact} days</span></p>
                    </div>
                    <button className='btn'>Edit</button>
                </div>

                <div className='bg-white p-4 rounded-2xl border border-gray-300'>
                    <h1 className='text-3xl font-bold my-2'>Quick Check-In</h1>
                    <div className='text-center gap-3 grid grid-cols-1 lg:grid-cols-3 ' >
                        <Link onClick={() => callButton()} to="/stats" className=' p-10 bg-[#F8FAFC]  rounded-2xl border border-gray-300 btn flex-col'>
                            <img src={call} alt="" />
                            <p>Call</p>
                        </Link>
                        <Link onClick={() => messageButton()} to="/stats" className=' p-10 bg-[#F8FAFC]   rounded-2xl border border-gray-300 btn flex-col'>
                            <img src={msg} alt="" />
                            <p>Messege</p>
                        </Link>
                        <Link onClick={() => videoButton()} to="/stats" className=' p-10 bg-[#F8FAFC]   rounded-2xl border border-gray-300 btn flex-col'>
                            <img src={video} alt="" />
                            <p>Video</p>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
