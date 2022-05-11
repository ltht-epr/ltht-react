import DescriptionList from '@ltht-react/description-list'
import { Coding, Maybe } from '@ltht-react/types'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-props'

const CodingListDetail: DetailViewComponent<IProps> = ({ term, codings, showIfEmpty = false }) => {
  if ((codings && codings.length > 0) || showIfEmpty === true) {
    return (
      <DescriptionList>
        <DescriptionList.Term>{term}</DescriptionList.Term>
        {codings?.map((coding, index) => {
          if (coding?.display) {
            return <DescriptionList.Description key={`${term}-${index}`}>{coding.display}</DescriptionList.Description>
          }

          return <></>
        })}
      </DescriptionList>
    )
  }
  return <></>
}

interface IProps extends IDetailViewProps {
  term: string
  codings?: Maybe<Coding>[]
}

export default CodingListDetail
