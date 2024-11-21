import DescriptionList from '@ltht-react/description-list'
import { Coding, Maybe } from '@ltht-react/types'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'
import NestedListDetail from './nested-list-detail'

const CodingDetail: DetailViewComponent<IProps> = ({ term, coding, showIfEmpty = false }) => (
  <NestedListDetail term={term} showIfEmpty={showIfEmpty} wrapDescription={false}>
    {coding?.display ? <DescriptionList.Description key={term}>{coding.display}</DescriptionList.Description> : <></>}
  </NestedListDetail>
)

interface IProps extends IDetailViewProps {
  term: string
  coding?: Maybe<Coding>
}

export default CodingDetail
