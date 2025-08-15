import { useState, useCallback, useEffect, MutableRefObject, useRef } from 'react'
import screenfull from 'screenfull'

const useFullScreen = <T extends HTMLElement>(elementRef?: MutableRefObject<T | null>) => {
  const [isFullscreen, setIsFullscreen] = useState(() => (screenfull.isEnabled ? screenfull.isFullscreen : false))
  const [error, setError] = useState<string | null>(null)

  // Track if component is mounted to prevent state updates after unmount
  const isMountedRef = useRef(true)

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  const exitFullScreen = useCallback(async (): Promise<void> => {
    if (!screenfull.isEnabled) {
      setError('Fullscreen is not supported in this browser')
      return
    }

    try {
      clearError()
      await screenfull.exit()
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to exit fullscreen'
      if (isMountedRef.current) {
        setError(errorMessage)
      }
    }
  }, [clearError])

  const toggleFullScreen = useCallback(async (): Promise<void> => {
    if (!screenfull.isEnabled) {
      setError('Fullscreen is not supported in this browser')
      return
    }

    if (!elementRef?.current) {
      setError('No element reference provided')
      return
    }

    try {
      clearError()
      await screenfull.toggle(elementRef.current)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to toggle fullscreen'
      if (isMountedRef.current) {
        setError(errorMessage)
      }
    }
  }, [elementRef, clearError])

  const requestFullScreen = useCallback(async (): Promise<void> => {
    if (!screenfull.isEnabled) {
      setError('Fullscreen is not supported in this browser')
      return
    }

    if (!elementRef?.current) {
      setError('No element reference provided')
      return
    }

    try {
      clearError()
      await screenfull.request(elementRef.current)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to request fullscreen'
      if (isMountedRef.current) {
        setError(errorMessage)
      }
    }
  }, [elementRef, clearError])

  useEffect(() => {
    isMountedRef.current = true

    if (!screenfull.isEnabled) {
      // eslint-disable-next-line no-console
      console.warn(
        'Full screen mode is not supported in this browser. ' +
          'If your page is inside an <iframe> you will need to add allowfullscreen, ' +
          'webkitallowfullscreen and mozallowfullscreen attributes. ' +
          'Full screen mode is only available in browsers that support the Screenfull.js library.'
      )
      return undefined
    }

    const changeHandler = () => {
      if (isMountedRef.current) {
        setIsFullscreen(screenfull.isFullscreen)
      }
    }

    const errorHandler = (_: Event) => {
      if (isMountedRef.current) {
        setError('Fullscreen operation failed')
      }
    }

    // Set initial state
    changeHandler()

    // Add event listeners
    screenfull.on('change', changeHandler)
    screenfull.on('error', errorHandler)

    return () => {
      isMountedRef.current = false
      screenfull.off('change', changeHandler)
      screenfull.off('error', errorHandler)
    }
  }, [])

  // Cleanup on unmount
  useEffect(
    () => () => {
      isMountedRef.current = false
    },
    []
  )

  return {
    isFullscreen,
    isEnabled: screenfull.isEnabled,
    error,
    toggleFullScreen,
    requestFullScreen,
    exitFullScreen,
    clearError,
  }
}

export default useFullScreen
