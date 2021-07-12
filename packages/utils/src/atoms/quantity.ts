import { Quantity, Maybe } from '@ltht-react/types'

const quantityText = (quantity?: Maybe<Quantity>): string => `${String(quantity?.value)} ${quantity?.unit}`

export default quantityText
