import { ResourceReference } from '@ltht-react/types'
import DescriptionList from '@ltht-react/description-list'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'

const ResourceReferenceDetail: DetailViewComponent<IProps> = ({ term, resourceReference, showIfEmpty }) => {
  if (resourceReference) {
    if (term) {
      return (
        <DescriptionList>
          <DescriptionList.Term>{term}</DescriptionList.Term>
          <DescriptionList.Description>{resourceReference?.display}</DescriptionList.Description>
        </DescriptionList>
      )
    }
    return (
      <DescriptionList>
        <DescriptionList.Term>{resourceReference?.typeName}</DescriptionList.Term>
        <DescriptionList.Description>{resourceReference?.display}</DescriptionList.Description>
      </DescriptionList>
    )
  }
  if (term && !resourceReference && showIfEmpty) {
    return (
      <DescriptionList>
        <DescriptionList.Term>{term}</DescriptionList.Term>
      </DescriptionList>
    )
  }
  return <></>
}

interface IProps extends IDetailViewProps {
  term?: string | null
  resourceReference?: ResourceReference | null
}

export default ResourceReferenceDetail
