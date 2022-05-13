import DescriptionList from '@ltht-react/description-list'
import { Coding, Maybe } from '@ltht-react/types'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'
import NestedListDetail from './nested-list-detail'

const CodingListDetail: DetailViewComponent<IProps> = ({ term, codings, showIfEmpty = false }) => (
  <NestedListDetail term={term} showIfEmpty={showIfEmpty} wrapDescription={false}>
    {codings &&
      codings.length > 0 &&
      codings?.map((coding, index) => {
        if (coding?.display) {
          return <DescriptionList.Description key={`${term}-${index}`}>{coding.display}</DescriptionList.Description>
        }
        return <></>
      })}
  </NestedListDetail>
)

interface IProps extends IDetailViewProps {
  term: string
  codings?: Maybe<Coding>[]
}

export default CodingListDetail
