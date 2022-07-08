import { ResourceReference, Maybe } from '@ltht-react/types'
import DescriptionList from '@ltht-react/description-list'
import { titleCase } from '@ltht-react/utils'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'
import NestedListDetail from './nested-list-detail'

const ResourceReferenceListDetail: DetailViewComponent<Props> = ({ term, resourceReferences, showIfEmpty }) => {
  if (resourceReferences || showIfEmpty) {
    return (
      <NestedListDetail term={term} showIfEmpty={showIfEmpty} wrapDescription={false}>
        {resourceReferences?.map(item => {
          if (item?.display) {
            return (
              <DescriptionList.Description key={item.display}>{titleCase(item?.display)}</DescriptionList.Description>
            )
          }
          return <></>
        })}
      </NestedListDetail>
    )
  }
  return <></>
}

interface Props extends IDetailViewProps {
  term: string
  resourceReferences?: Maybe<ResourceReference>[] | null
}

export default ResourceReferenceListDetail
