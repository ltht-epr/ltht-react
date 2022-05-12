import { Period as PeriodType } from '@ltht-react/types'
import { periodSummaryText } from '@ltht-react/utils'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'
import NestedListDetail from './nested-list-detail'

const PeriodDetail: DetailViewComponent<IProps> = ({ period, showIfEmpty = false }) => {
  const summaryText = periodSummaryText(period)
  if (summaryText !== '' || showIfEmpty === true) {
    return (
      <NestedListDetail term="Period" showIfEmpty={showIfEmpty}>
        {summaryText}
      </NestedListDetail>
    )
  }
  return <></>
}

interface IProps extends IDetailViewProps {
  period?: PeriodType | null
}

export default PeriodDetail
