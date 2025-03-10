import { MOBILE_BREAKPOINT } from '@ltht-react/styles'
import isMobileView from './isMobileView'

describe('isMobileView', () => {
  it('Returns true when viewport is equal to mobile minimum size', () => {
    expect(isMobileView(MOBILE_BREAKPOINT.min)).toEqual(true)
  })
  it('Returns true when viewport is within range of mobile breakpoint sizes', () => {
    const midpoint = (MOBILE_BREAKPOINT.min + MOBILE_BREAKPOINT.max) / 2
    expect(isMobileView(midpoint)).toEqual(true)
  })
  it('Returns true when viewport is equal to mobile maximum size', () => {
    expect(isMobileView(MOBILE_BREAKPOINT.max)).toEqual(true)
  })
  it('Returns false when viewport is greater than mobile maximum size', () => {
    expect(isMobileView(MOBILE_BREAKPOINT.max + 1)).toEqual(false)
  })
})
