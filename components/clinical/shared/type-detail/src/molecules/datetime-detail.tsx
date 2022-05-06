import { FC } from 'react'
import { Maybe, PartialDateTime, Scalars } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'
import DescriptionList from '@ltht-react/description-list'

const DatetimeDetail: FC<Props> = ({ term, datetime, showIfEmpty }) => {
  const dateTimeText = partialDateTimeText(datetime)
  if (dateTimeText !== '' || showIfEmpty === true) {
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
  datetime?: PartialDateTime | null
  showIfEmpty?: Maybe<Scalars['Boolean']>
}

export default DatetimeDetail
