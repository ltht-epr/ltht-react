import { useEffect, useState } from 'react'

const useScrollRef = (elementRef: React.RefObject<HTMLElement>) => {
  const [scrollState, setScrollState] = useState<ScrollState>()

  if (!elementRef) {
    return undefined
  }

  useEffect(() => {
    const getScrollState = (): ScrollState => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
        clientWidth,
        scrollWidth,
        scrollLeft,
      } = elementRef.current as HTMLElement
      return {
        scrollWidth: scrollWidth,
        scrollHeight: scrollHeight,
        currentXScroll: scrollLeft + clientWidth,
        currentYScroll: scrollTop + clientHeight,
      }
    }

    const handleScroll = () => {
      setScrollState(getScrollState())
    }

    elementRef.current?.addEventListener('scroll', handleScroll)

    return () => {
      elementRef.current?.removeEventListener('scroll', handleScroll)
    }
  }, [elementRef])

  return scrollState
}

interface ScrollState {
  scrollWidth: number
  scrollHeight: number
  currentXScroll: number
  currentYScroll: number
}

export default useScrollRef
