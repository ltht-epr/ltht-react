import { useEffect, useState } from 'react'

const useScrollRef = (elementRef: React.RefObject<HTMLElement>) => {
  const [scrollState, setScrollState] = useState<ScrollState>()
  const element = elementRef.current as HTMLElement

  useEffect(() => {
    const getScrollState = (): ScrollState => {
      const { scrollTop, scrollHeight, clientHeight, clientWidth, scrollWidth, scrollLeft } = element
      return {
        scrollWidth,
        scrollHeight,
        currentXScroll: scrollLeft + clientWidth,
        currentYScroll: scrollTop + clientHeight,
      }
    }

    const handleScroll = () => {
      setScrollState(getScrollState())
    }

    element?.addEventListener('scroll', handleScroll)

    return () => {
      element?.removeEventListener('scroll', handleScroll)
    }
  }, [element])

  return scrollState
}

export interface ScrollState {
  scrollWidth: number
  scrollHeight: number
  currentXScroll: number
  currentYScroll: number
}

export default useScrollRef
