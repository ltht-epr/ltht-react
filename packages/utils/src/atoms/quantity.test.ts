import { Quantity } from '@ltht-react/types'
import quantityText from './quantity'

describe('quantityText', () => {
  it('formats quantity correctly', () => {
    const quantity: Quantity = {
      value: 3.0,
      unit: 'Years',
    }

    expect(quantityText(quantity)).toEqual('3 Years')
  })
})
