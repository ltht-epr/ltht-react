import { PartialDateTime } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'
import DescriptionList from '@ltht-react/description-list'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'

const DatetimeDetail: DetailViewComponent<IProps> = ({ term, datetime, showIfEmpty }) => {
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

interface IProps extends IDetailViewProps {
  term: string
  datetime?: PartialDateTime | null
}

export default DatetimeDetail
