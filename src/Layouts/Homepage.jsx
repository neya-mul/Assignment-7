import React from 'react'
import FirstPart from '../Components/FirstPart'
import SecondPart from '../Components/SecondPart'
import ThirdPart from '../Components/ThirdPart'

export default function Homepage() {
    return (
        <div className='bg-[#F8FAFC] py-10'>
            <FirstPart></FirstPart>
            <SecondPart></SecondPart>
            <ThirdPart></ThirdPart>
        </div>
    )
}
