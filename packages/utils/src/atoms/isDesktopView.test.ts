import { DESKTOP_BREAKPOINT } from '@ltht-react/styles'
import isDesktopView from './isDesktopView'

describe('isDesktopView', () => {
  it('Returns false when viewport is below desktop minimum size', () => {
    expect(isDesktopView(DESKTOP_BREAKPOINT.min - 1)).toEqual(false)
  })
  it('Returns true when viewport is equal to desktop minimum size', () => {
    expect(isDesktopView(DESKTOP_BREAKPOINT.min)).toEqual(true)
  })
  it('Returns true when viewport is within range of desktop breakpoint sizes', () => {
    const midpoint = (DESKTOP_BREAKPOINT.min + DESKTOP_BREAKPOINT.max) / 2
    expect(isDesktopView(midpoint)).toEqual(true)
  })
  it('Returns true when viewport is equal to desktop maximum size', () => {
    expect(isDesktopView(DESKTOP_BREAKPOINT.max)).toEqual(true)
  })
  it('Returns false when viewport is greater than desktop maximum size', () => {
    expect(isDesktopView(DESKTOP_BREAKPOINT.max + 1)).toEqual(false)
  })
})
