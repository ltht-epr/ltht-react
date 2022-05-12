import { Period as PeriodType } from '@ltht-react/types'
import { periodSummaryText } from '@ltht-react/utils'
import DescriptionList from '@ltht-react/description-list'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'

const PeriodDetail: DetailViewComponent<IProps> = ({ period, showIfEmpty = false }) => {
  const summaryText = periodSummaryText(period)
  if (summaryText !== '' || showIfEmpty === true) {
    return (
      <DescriptionList>
        <DescriptionList.Term>Period</DescriptionList.Term>
        <DescriptionList.Description>{summaryText}</DescriptionList.Description>
      </DescriptionList>
    )
  }
  return <></>
}

interface IProps extends IDetailViewProps {
  period?: PeriodType | null
}

export default PeriodDetail
