import { FC } from 'react'
import { Maybe, PartialDateTime } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'
import DescriptionList from '@ltht-react/description-list'

const DatetimeDetail: FC<Props> = ({ term, datetime }) => {
  const dateTimeText = partialDateTimeText(datetime)
  if (dateTimeText !== '') {
    return (
      <DescriptionList>
        <DescriptionList.Term>{term}</DescriptionList.Term>
        <DescriptionList.Description>{dateTimeText}</DescriptionList.Description>
      </DescriptionList>
    )
  }
  return <></>
}

interface Props {
  term: string
  datetime?: Maybe<PartialDateTime>
}

export default DatetimeDetail
