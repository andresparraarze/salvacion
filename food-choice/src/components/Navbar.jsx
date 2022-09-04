import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#13135a] text-white'>

        {/*Name*/}
        <div className='font-extrabold text-2xl'>
            <a href="/">I EAT</a>
        </div>
        <div className='font-bold'>
            <a href="/">Add Food Items</a>
        </div>
    </div>
  )
}

export default Navbar