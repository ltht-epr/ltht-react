import { WIDESCREEN_BREAKPOINT } from '@ltht-react/styles'
import isWidescreenView from './isWidescreenView'

describe('isWidescreenView', () => {
  it('Returns false when viewport is below widescreen minimum size', () => {
    expect(isWidescreenView(WIDESCREEN_BREAKPOINT.min - 1)).toEqual(false)
  })
  it('Returns true when viewport is equal to widescreen minimum size', () => {
    expect(isWidescreenView(WIDESCREEN_BREAKPOINT.min)).toEqual(true)
  })
  it('Returns true when viewport is within range of widescreen breakpoint sizes', () => {
    const midpoint = (WIDESCREEN_BREAKPOINT.min + WIDESCREEN_BREAKPOINT.max) / 2
    expect(isWidescreenView(midpoint)).toEqual(true)
  })
  it('Returns true when viewport is equal to widescreen maximum size', () => {
    expect(isWidescreenView(WIDESCREEN_BREAKPOINT.max)).toEqual(true)
  })
})
