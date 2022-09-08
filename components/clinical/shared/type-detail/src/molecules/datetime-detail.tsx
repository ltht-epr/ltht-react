import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { PartialDateTime } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'
import NestedListDetail from './nested-list-detail'

const StyledOnsetEstimated = styled.div`
  color: ${TEXT_COLOURS.INFO};
  font-size: x-small;
  white-space: pre-wrap;
  display: inline-block;
`

const DatetimeDetail: DetailViewComponent<IProps> = ({ term, datetime, showIfEmpty, estimated }) => {
  const dateTimeText = partialDateTimeText(datetime)
  if (dateTimeText !== '' || showIfEmpty === true) {
    return (
      <NestedListDetail term={term} showIfEmpty={showIfEmpty}>
        {dateTimeText}
        <StyledOnsetEstimated>{estimated ? ' (estimated)' : ''}</StyledOnsetEstimated>
      </NestedListDetail>
    )
  }
  return <></>
}

interface IProps extends IDetailViewProps {
  term: string
  datetime?: PartialDateTime | null
  estimated?: boolean | null
}

export default DatetimeDetail
