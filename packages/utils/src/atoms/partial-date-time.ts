import { PartialDateTime } from '@ltht-react/types'

const partialDateTimeText = (date?: PartialDateTime | null): string => {
  if (!date || !date.value) {
    return ''
  }
  const result = date.value
    .toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    .split(' ')
    .join('-')
  return result
}

export { partialDateTimeText }
