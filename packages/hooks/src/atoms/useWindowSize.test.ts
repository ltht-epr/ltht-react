import { renderHook, act } from '@testing-library/react-hooks'
import { useWindowSize } from './index'

interface IresizeWindow {
  width?: number
  height?: number
}

const resizeWindow = ({ width, height }: IresizeWindow) => {
  global.innerHeight = height || global.innerHeight
  global.innerWidth = width || global.innerWidth

  act(() => {
    global.dispatchEvent(new Event('resize'))
  })
}

describe('useWindowSize', () => {
  it('Should return the correct width and height values on resize', () => {
    const { result } = renderHook(() => useWindowSize())

    // Resize width only
    resizeWindow({ width: 500 })
    expect(result.current.width).toBe(500)

    // Resize height only
    resizeWindow({ height: 1000 })
    expect(result.current.width).toBe(500)
    expect(result.current.height).toBe(1000)

    // Resize both width and height
    resizeWindow({ width: 200, height: 200 })
    expect(result.current.width).toBe(200)
    expect(result.current.height).toBe(200)
  })
})
