import { PartialDateTime } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'
import NestedListDetail from './nested-list-detail'

const DatetimeDetail: DetailViewComponent<IProps> = ({ term, datetime, showIfEmpty }) => {
  const dateTimeText = partialDateTimeText(datetime)
  if (dateTimeText !== '' || showIfEmpty === true) {
    return (
      <NestedListDetail term={term} showIfEmpty={showIfEmpty}>
        {dateTimeText}
      </NestedListDetail>
    )
  }
  return <></>
}

interface IProps extends IDetailViewProps {
  term: string
  datetime?: PartialDateTime | null
}

export default DatetimeDetail
