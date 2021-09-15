import isMobileView from './mobile-view'

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
