import { useEffect, useState } from 'react'

const useDimensionsRef = (myRef: React.RefObject<HTMLElement>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const getDimensions = () => ({
      width: (myRef && myRef.current && myRef.current.offsetWidth) || 0,
      height: (myRef && myRef.current && myRef.current.offsetHeight) || 0,
    })

    const handleResize = () => {
      setDimensions(getDimensions())
    }

    if (myRef.current) {
      setDimensions(getDimensions())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [myRef])

  return dimensions
}

export default useDimensionsRef
