import { useState, useEffect } from 'react'

const useWindowSize = (): IWindowSizeState => {
  const [windowSize, setWindowSize] = useState<IWindowSizeState>({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleWindowResize)

    // CLEANUP
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return {
    width: windowSize.width,
    height: windowSize.height,
  }
}

interface IWindowSizeState {
  width: number
  height: number
}

export default useWindowSize
