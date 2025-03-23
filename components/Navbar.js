import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <div>
        <div className='w-full h-20 bg-purple-800 text-white px-10 flex  items-center'>
            <h1 className='font-semibold  text-4xl'>Navbar</h1>
            <div className='ml-auto'>
            <Link href='/' className='mx-4 text-2xl font-semibold '>Home</Link>
            <Link href='/about' className='mx-4 text-2xl font-semibold '>About</Link>
                
            {/* <Link>More</Link> */}
            </div>
        </div>
    </div>
  )
}

export default navbar