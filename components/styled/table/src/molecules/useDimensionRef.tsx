import { useEffect, useState } from 'react'

const useDimensionsRef = (elementRef: React.RefObject<HTMLElement>, parentElementRef: React.RefObject<HTMLElement>) => {
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

    const parentElementResizeObserver = new ResizeObserver((_e: ResizeObserverEntry[]) => handleResize())

    if (parentElementRef?.current) {
      parentElementResizeObserver.observe(parentElementRef.current)
    }

    return () => {
      parentElementResizeObserver?.disconnect()
    }
  }, [elementRef, parentElementRef])

  return dimensions
}

export default useDimensionsRef
