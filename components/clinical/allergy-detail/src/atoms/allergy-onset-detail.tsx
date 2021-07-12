import { FC } from 'react'
import { AllergyIntoleranceOnSet, Maybe } from '@ltht-react/types'
import DescriptionList from '@ltht-react/description-list'
import { partialDateTimeText, periodSummaryText, quantityText, rangeText } from '@ltht-react/utils'

const AllergyOnsetDetail: FC<IProps> = ({ term, onset }) => {
  if (!onset) return <></>

  return (
    <DescriptionList>
      <DescriptionList.Term>{term}</DescriptionList.Term>
      {onset.onSetAge && <DescriptionList.Description>{quantityText(onset.onSetAge)}</DescriptionList.Description>}
      {onset.onSetDateTime && (
        <DescriptionList.Description>{partialDateTimeText(onset.onSetDateTime)}</DescriptionList.Description>
      )}
      {onset.onSetPeriod && (
        <DescriptionList.Description>{periodSummaryText(onset.onSetPeriod)}</DescriptionList.Description>
      )}
      {onset.onSetRange && <DescriptionList.Description>{rangeText(onset.onSetRange)}</DescriptionList.Description>}
      {onset.onSetString && <DescriptionList.Description>{onset.onSetString}</DescriptionList.Description>}
    </DescriptionList>
  )
}

interface IProps {
  term: string
  onset?: Maybe<AllergyIntoleranceOnSet>
}

export default AllergyOnsetDetail
