import React from 'react'

export default function SecondPart() {
  return (
    <div className='max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
      {/* cards */}
      
      <div className='text-[#244D3F] text-center bg-white w-[200px] py-15 mx-auto '>
        <h1 className='text-2xl font-bold'>10</h1>
        <p>Total Friends</p>
      </div>

      <div className='text-[#244D3F] text-center bg-white w-[200px] py-15 mx-auto '>
        <h1 className='text-2xl font-bold'>3</h1>
        <p>On Track</p>
      </div>

      <div className='text-[#244D3F] text-center bg-white w-[200px] py-15 mx-auto '>
        <h1 className='text-2xl font-bold'>6</h1>
        <p>Need Attention</p>
      </div>

      <div className='text-[#244D3F] text-center bg-white w-[200px] py-15 mx-auto '>
        <h1 className='text-2xl font-bold'>12</h1>
        <p>Interactions This Month</p>
      </div>

    </div>
  )
}
