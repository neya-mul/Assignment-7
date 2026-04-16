import React, { useContext } from 'react'
import { Legend, Pie, PieChart, Tooltip } from 'recharts'
import { FriendContext } from '../Context/FriendProvider'

export default function Stats() {
  const { added } = useContext(FriendContext)
  const data = [
    { name: "audio", value: added.filter(a => a.type === 'audio').length, fill: '#32B2ED' },
    { name: "message", value: added.filter(a => a.type === 'message').length, fill: '#A0E362' },
    { name: "video", value: added.filter(a => a.type === 'video').length, fill: '#ED8F32 ' },

  ]
  return (
    <div className='flex flex-col justify-center container mx-auto my-10'>
      <h1 className='text-3xl font-bold text-center lg:text-left'>Friendship Analytics</h1>


      <div className='bg-white p-5 mt-10'>
        <p>By Interaction Type</p>


        <div className=' flex justify-center flex-col min-h-[37vh]'>
          {added.length === 0 ? <div className='flex justify-center items-center'> <h1 className='text-3xl font-bold'>NO data to show</h1></div> :
            <PieChart className='p-10 rounded-2xl mx-auto mt-20' style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>

              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#8884d8"
                // fill2="#8884r8"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
              // isAnimationActive={isAnimationActive}
              />
              {/* <RechartsDevtools /> */}

              <Legend />

              <Tooltip />
            </PieChart>

          }

        </div>
      </div>

    </div>
  )
}

