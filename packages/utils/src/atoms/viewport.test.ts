import { isMobileView, isTabletView, isDesktopView } from './viewport'

describe('isMobileView', () => {
  it('Equal value is not mobile', () => {
    expect(isMobileView(768)).toEqual(false)
  })
  it('Larger screen size not mobile', () => {
    expect(isMobileView(769)).toEqual(false)
  })
  it('Smaller screen size is mobile', () => {
    expect(isMobileView(767)).toEqual(true)
  })
})

describe('isTabletView', () => {
  it('Equal value is tablet', () => {
    expect(isTabletView(768)).toEqual(true)
  })
  it('Larger screen size not tablet', () => {
    expect(isTabletView(1200)).toEqual(false)
  })
  it('Smaller screen size is not tablet', () => {
    expect(isTabletView(767)).toEqual(false)
  })
})

describe('isDesktopView', () => {
  it('Equal value is desktop', () => {
    expect(isDesktopView(1200)).toEqual(true)
  })
  it('Larger screen size desktop', () => {
    expect(isDesktopView(1920)).toEqual(true)
  })
  it('Smaller screen size is not desktop', () => {
    expect(isDesktopView(1199)).toEqual(false)
  })
})
