import { FC } from 'react'
import { Maybe, ResourceReference, Scalars } from '@ltht-react/types'
import DescriptionList from '@ltht-react/description-list'

const ResourceReferenceDetail: FC<Props> = ({ term, resourceReference, showIfEmpty }) => {
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

interface Props {
  term?: string | null
  resourceReference?: ResourceReference | null
  showIfEmpty?: Maybe<Scalars['Boolean']>
}

export default ResourceReferenceDetail
