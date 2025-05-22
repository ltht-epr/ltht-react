import { useEffect, useState } from 'react'

const useScrollRef = (elementRef: React.RefObject<HTMLElement>) => {
  const [scrollState, setScrollState] = useState<ScrollState>()
  const element = elementRef.current

  useEffect(() => {
    if (!element) {
      return
    }

    const getScrollState = (): ScrollState => ({
      scrollWidth: element?.scrollWidth ?? 0,
      scrollHeight: element?.scrollHeight ?? 0,
      currentXScroll: (element?.scrollLeft ?? 0) + (element?.clientWidth ?? 0),
      currentYScroll: (element?.scrollTop ?? 0) + (element?.clientHeight ?? 0),
    })

    const handleScroll = () => {
      setScrollState(getScrollState())
    }

    handleScroll() // Set initial scroll state

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
