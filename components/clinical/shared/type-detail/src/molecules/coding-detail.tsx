import DescriptionList from '@ltht-react/description-list'
import { Coding, Maybe } from '@ltht-react/types'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'
import NestedListDetail from './nested-list-detail'

const CodingDetail: DetailViewComponent<IProps> = ({ term, coding, showIfEmpty = false }) => {
  let description

  if (coding?.display) {
    description = <DescriptionList.Description key={term}>{coding.display}</DescriptionList.Description>
  } else if (showIfEmpty) {
    description = <></>
  } else {
    description = <DescriptionList.Description key={term}>Insufficient data provided.</DescriptionList.Description>
  }

  return (
    <NestedListDetail term={term} showIfEmpty={showIfEmpty} wrapDescription={false}>
      {description}
    </NestedListDetail>
  )
}

interface IProps extends IDetailViewProps {
  term: string
  coding?: Maybe<Coding>
}

export default CodingDetail
