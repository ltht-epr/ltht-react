import { AllergyIntoleranceOnSet, Maybe } from '@ltht-react/types'
import DescriptionList from '@ltht-react/description-list'
import { partialDateTimeText, periodSummaryText, quantityText, rangeText } from '@ltht-react/utils'
import { DetailViewComponent, IDetailViewProps, NestedListDetail } from '@ltht-react/type-detail'

const AllergyOnsetDetail: DetailViewComponent<IProps> = ({ term, onset, showIfEmpty = true }) => {
  if (!onset && showIfEmpty === false) {
    return <></>
  }
  return (
    <NestedListDetail term={term} wrapDescription={false}>
      {onset && (
        <>
          {onset.onSetAge && <DescriptionList.Description>{quantityText(onset.onSetAge)}</DescriptionList.Description>}
          {onset.onSetDateTime && (
            <DescriptionList.Description>{partialDateTimeText(onset.onSetDateTime)}</DescriptionList.Description>
          )}
          {onset.onSetPeriod && (
            <DescriptionList.Description>{periodSummaryText(onset.onSetPeriod)}</DescriptionList.Description>
          )}
          {onset.onSetRange && <DescriptionList.Description>{rangeText(onset.onSetRange)}</DescriptionList.Description>}
          {onset.onSetString && <DescriptionList.Description>{onset.onSetString}</DescriptionList.Description>}
        </>
      )}
    </NestedListDetail>
  )
}

interface IProps extends IDetailViewProps {
  term: string
  onset?: Maybe<AllergyIntoleranceOnSet>
}

export default AllergyOnsetDetail
