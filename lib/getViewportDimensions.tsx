import { useState, useEffect } from 'react'

function setter() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

const getViewportDimensions = () => {
  const [dimensions, setDimensions] = useState(setter())

  useEffect(() => {
    function handleResize() {
      setDimensions(setter())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return dimensions
}

export default getViewportDimensions