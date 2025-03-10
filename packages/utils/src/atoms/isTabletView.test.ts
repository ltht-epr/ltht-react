import { TABLET_BREAKPOINT } from '@ltht-react/styles'
import isTabletView from './isTabletView'

describe('isTabletView', () => {
  it('Returns false when viewport is below tablet minimum size', () => {
    expect(isTabletView(TABLET_BREAKPOINT.min - 1)).toEqual(false)
  })
  it('Returns true when viewport is equal to tablet minimum size', () => {
    expect(isTabletView(TABLET_BREAKPOINT.min)).toEqual(true)
  })
  it('Returns true when viewport is within range of tablet breakpoint sizes', () => {
    const midpoint = (TABLET_BREAKPOINT.min + TABLET_BREAKPOINT.max) / 2
    expect(isTabletView(midpoint)).toEqual(true)
  })
  it('Returns true when viewport is equal to tablet maximum size', () => {
    expect(isTabletView(TABLET_BREAKPOINT.max)).toEqual(true)
  })
  it('Returns false when viewport is greater than tablet maximum size', () => {
    expect(isTabletView(TABLET_BREAKPOINT.max + 1)).toEqual(false)
  })
})
