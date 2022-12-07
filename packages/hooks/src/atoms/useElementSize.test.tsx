import { renderHook } from '@testing-library/react-hooks'
import useElementSize from './useElementSize'
import { act } from 'react-dom/test-utils'

describe('useElementSize', () => {
  const resize = (ref: React.MutableRefObject<Element>, width: number, height: number) => {
    return [
      jest.spyOn(ref.current, 'clientWidth', 'get').mockImplementation(() => width),
      jest.spyOn(ref.current, 'clientHeight', 'get').mockImplementation(() => height),
    ]
  }

  it('Should return the correct width and height values on resize', async () => {
    const elementRef = {
      current: document.createElement('div'),
    } as React.MutableRefObject<Element>

    resize(elementRef, 100, 100)

    const { result } = renderHook(() => useElementSize(elementRef))

    expect(result.current.width).toBe(100)
    expect(result.current.height).toBe(100)

    act(() => {
      resize(elementRef, 200, 200)
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current.width).toBe(200)
    expect(result.current.height).toBe(200)

    act(() => {
      resize(elementRef, 100, 200)
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current.width).toBe(100)
    expect(result.current.height).toBe(200)
  })
})
