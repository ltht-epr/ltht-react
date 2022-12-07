import { useEffect, useState } from 'react'

const useElementSize = (elementRef?: React.MutableRefObject<Element | null>) => {
  const [state, setState] = useState<IElementSizeState>({ width: 0, height: 0 })
  const element = elementRef?.current

  useEffect(() => {
    const getDimensions = () => ({
      width: element?.clientWidth ?? 0,
      height: element?.clientHeight ?? 0,
    })

    const updateState = () => setState(getDimensions())

    if (element) {
      updateState()
      window.addEventListener('resize', () => updateState())
    }

    return () => window.removeEventListener('resize', updateState)
  }, [element])

  return state
}

interface IElementSizeState {
  width: number
  height: number
}

export default useElementSize
