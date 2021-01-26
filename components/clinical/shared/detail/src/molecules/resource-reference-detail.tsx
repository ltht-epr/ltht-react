import React from 'react'
import { ResourceReference } from '@ltht-react/types'
import DescriptionList from '@ltht-react/description-list'

const ResourceReferenceDetail: React.FC<Props> = ({ term, resourceReference }) => {
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
  return <></>
}

interface Props {
  term?: string | null
  resourceReference?: ResourceReference | null
}

export default ResourceReferenceDetail
