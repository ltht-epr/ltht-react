import { Range } from '@ltht-react/types'
import rangeText from './range'

describe('rangeText', () => {
  it('formats range correctly', () => {
    const range: Range = {
      low: {
        value: 1.0,
        unit: 'Year',
      },
      high: {
        value: 3.0,
        unit: 'Years',
      },
    }

    expect(rangeText(range)).toEqual('1 Year - 3 Years')
  })
})
