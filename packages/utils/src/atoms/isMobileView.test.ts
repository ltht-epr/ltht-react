import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@ltht-react/styles'
import isMobileView from './isMobileView'

describe('isMobileView', () => {
  it('Equal value is not mobile', () => {
    expect(isMobileView(TABLET_BREAKPOINT.min)).toEqual(false)
  })
  it('Larger screen size not mobile', () => {
    expect(isMobileView(TABLET_BREAKPOINT.min + 1)).toEqual(false)
  })
  it('Smaller screen size is mobile', () => {
    expect(isMobileView(MOBILE_BREAKPOINT.max)).toEqual(true)
  })
})
