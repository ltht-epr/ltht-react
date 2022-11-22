import { useEffect, useState } from 'react'

const useDimensionsRef = (elementRef: React.RefObject<HTMLElement>) => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const getDimensions = () => ({
      width: (elementRef && elementRef.current && elementRef.current.offsetWidth) || 0,
      height: (elementRef && elementRef.current && elementRef.current.offsetHeight) || 0,
    })

    const handleResize = () => {
      setDimensions(getDimensions())
    }

    if (elementRef.current) {
      setDimensions(getDimensions())
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('updateDimensions', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('updateDimensions', handleResize)
    }
  }, [elementRef])

  return dimensions
}

export default useDimensionsRef
