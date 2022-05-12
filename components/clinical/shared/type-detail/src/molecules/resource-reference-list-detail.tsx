import { ResourceReference, Maybe } from '@ltht-react/types'
import DescriptionList from '@ltht-react/description-list'
import { titleCase } from '@ltht-react/utils'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'

const ResourceReferenceListDetail: DetailViewComponent<Props> = ({ term, resourceReferences, showIfEmpty }) => {
  if (resourceReferences || showIfEmpty) {
    return (
      <DescriptionList>
        <DescriptionList.Term>{term}</DescriptionList.Term>
        {resourceReferences?.map((item) => {
          if (item?.display) {
            return (
              <DescriptionList.Description key={item.display}>{titleCase(item?.display)}</DescriptionList.Description>
            )
          }
          return <></>
        })}
      </DescriptionList>
    )
  }
  return <></>
}

interface Props extends IDetailViewProps {
  term: string
  resourceReferences?: Maybe<ResourceReference>[] | null
}

export default ResourceReferenceListDetail
