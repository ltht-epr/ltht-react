import { Range, Maybe } from '@ltht-react/types'
import quantityText from './quantity'

const rangeText = (range?: Maybe<Range>): string => `${quantityText(range?.low)} - ${quantityText(range?.high)}`

export default rangeText
