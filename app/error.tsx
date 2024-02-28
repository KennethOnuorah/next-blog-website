'use client'

import { useEffect } from 'react'

export default function Error({ error,}: { error: Error, }) {
  useEffect(() => {
    console.error(error)
  }, [error])
  
  return (
    <div className="p-4 text-center flex flex-col items-center justify-center font-bold text-gray-400 h-screen">
      <h2 className="text-4xl">
        Something went wrong.
      </h2>
      <a 
        className='transition-all mt-8 font-semibold text-white bg-gray-500 p-4 rounded-md hover:bg-gray-600'
        href='/'
      >
        Return Home
      </a>
    </div>
  )
}
