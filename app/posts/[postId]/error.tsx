'use client' // Error components must ALWAYS be client components

import { useEffect } from 'react'

export default function Error({ error, reset}: { error: Error, reset: () => void }) {

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="p-4 flex-col gap-4 text-center flex items-center justify-center font-bold text-gray-400 h-screen">
      <h1 className="text-2xl">
        The requested blog post could not be found.
      </h1>
      <button 
        className="mb-4 p-4 bg-gray-500 text-white rounded-xl"
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}