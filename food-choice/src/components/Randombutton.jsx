import React from 'react'
const dishes = ['Biryani', 'Pasta Alfredo', 'Chicken and Pasta', 'Chicken with Rice and Salad', 'Chicken Sandwich'];

const Randombutton = () => {
  return (
    <div className='w-full h-screen'>
        <div className='max-w-[2000px] mx-auto px-8 flex justify-center items-center h-full pt-[170px] pb-[130px]'>
            <button className='text-extrabold text-3xl border rounded-[35px] p-8 bg-[#13135a] text-white'>
                Get a Dish
            </button>
        </div> 
    </div>
  )
}

export default Randombutton