import React from 'react'
import { PartialDateTime } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'
import DescriptionList from '@ltht-react/description-list'

const DatetimeDetail: React.FC<Props> = ({ term, datetime }) => {
  if (datetime?.value) {
    return (
      <DescriptionList>
        <DescriptionList.Term>{term}</DescriptionList.Term>
        <DescriptionList.Description>{partialDateTimeText(datetime)}</DescriptionList.Description>
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
