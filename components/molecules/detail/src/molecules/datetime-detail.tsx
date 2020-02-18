import React from 'react'
import { PartialDateTime } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'
import { DescriptionList, DescriptionListTerm, DescriptionListDescription } from '@ltht-react/description-list'

const DatetimeDetail: React.FC<Props> = ({ term, datetime }) => {
  if (datetime?.value) {
    return (
      <DescriptionList>
        <DescriptionListTerm>{term}</DescriptionListTerm>
        <DescriptionListDescription>{partialDateTimeText(datetime)}</DescriptionListDescription>
      </DescriptionList>
    )
  }
  return <></>
}

interface Props {
  term: string
  datetime?: PartialDateTime | null
}

export default DatetimeDetail
