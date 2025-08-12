import { useState, useCallback, RefObject, useEffect } from 'react'
import screenfull from 'screenfull'

const useFullScreen = <T extends HTMLElement>(elementRef: RefObject<T>) => {
  const [isFullscreen, setIsFullscreen] = useState(screenfull.isFullscreen)

  const toggleFullScreen = useCallback(async () => {
    if (elementRef.current && screenfull.isEnabled) {
      await screenfull.toggle(elementRef.current)
    }
    setIsFullscreen(screenfull.isFullscreen)
  }, [elementRef])

  const requestFullScreen = useCallback(async () => {
    if (elementRef.current && screenfull.isEnabled) {
      await screenfull.request(elementRef.current)
    }
    setIsFullscreen(screenfull.isFullscreen)
  }, [elementRef])

  useEffect(() => {
    if (!screenfull.isEnabled) return undefined

    const changeHandler = () => setIsFullscreen(screenfull.isFullscreen)
    screenfull.on('change', changeHandler)

    return () => {
      screenfull.off('change', changeHandler)
    }
  }, [])

  if (!screenfull.isEnabled) {
    // eslint-disable-next-line no-console
    console.warn(
      `Full screen mode is not supported in this browser. 
      If your page is inside an <iframe> you will need to add a allowfullscreen attribute 
      (+ webkitallowfullscreen and mozallowfullscreen).
      Full screen mode is only available in browsers that support the Screenfull.js library. (https://www.npmjs.com/package/screenfull/v/5.2.0)`
    )
  }

  return {
    isFullscreen,
    isEnabled: screenfull.isEnabled,
    toggleFullScreen,
    requestFullScreen,
    exitFullScreen: screenfull.exit,
  }
}

export default useFullScreen
