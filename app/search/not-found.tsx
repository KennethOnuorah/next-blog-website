"use client"

import { useState, useEffect } from "react";

export default function NotFound() {
  const [width, setWidth] = useState(window.innerWidth)
   
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }
  }, [])

  return (
    <div 
      className="p-4 text-center flex flex-col items-center justify-center font-bold text-gray-400"
      style={{
        height: `calc(100vh - ${width >= 640 ? 84 : 168}px)`
      }}
    >
      <h1 className="text-8xl">
        404
      </h1>
      <h2 className="text-4xl">
        Not Found
      </h2>
    </div>
  )
}
