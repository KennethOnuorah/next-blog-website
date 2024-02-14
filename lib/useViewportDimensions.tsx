import { useState, useEffect } from 'react'

function setter() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

const useViewportDimensions = () => {
  const [dimensions, setDimensions] = useState<Dimension>({width: 0, height: 0})

  useEffect(() => {
    function handleResize() {
      setDimensions(setter())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setDimensions(setter())
  }, [])

  return dimensions
}

export default useViewportDimensions