'use client'
import { useEffect } from 'react'

export default function Error({ error, reset}: { error: Error, reset: () => void }) {

  useEffect(() => {
    console.error(error)
  }, [error])
  
  return (
    <div className="p-4 text-center flex flex-col items-center justify-center font-bold text-gray-400 h-screen">
      <h1 className="text-8xl">
        OOPS!
      </h1>
      <h2 className="text-4xl">
        Looks Like This Page Doesn&apos;t Exist.
      </h2>
    </div>
  )
}
