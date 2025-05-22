import { useEffect, useState } from 'react'

const useScrollRef = (elementRef: React.RefObject<HTMLElement>) => {
  const [scrollState, setScrollState] = useState<ScrollState>()

  const handleScroll = (e: HTMLElement) => {
    if (!e) return

    setScrollState({
      scrollWidth: e.scrollWidth ?? 0,
      scrollHeight: e.scrollHeight ?? 0,
      currentXScroll: (e.scrollLeft ?? 0) + (e.clientWidth ?? 0),
      currentYScroll: (e.scrollTop ?? 0) + (e.clientHeight ?? 0),
    })
  }

  useEffect(() => {
    const element = elementRef?.current

    if (element) {
      handleScroll(element) // Set initial scroll state
      element.addEventListener('scroll', () => handleScroll(element))
    }

    return () => {
      element?.removeEventListener('scroll', () => handleScroll(element))
    }
  }, [elementRef])

  return scrollState
}

export interface ScrollState {
  scrollWidth: number
  scrollHeight: number
  currentXScroll: number
  currentYScroll: number
}

export default useScrollRef
