import React from 'react'
import { ResourceReference } from '@ltht-react/types'
import { DescriptionList, DescriptionListTerm, DescriptionListDescription } from '@ltht-react/description-list'

const ResourceReferenceDetail: React.FC<Props> = ({ term, resourceReference }) => {
  if (resourceReference) {
    if (term) {
      return (
        <DescriptionList>
          <DescriptionListTerm>{term}</DescriptionListTerm>
          <DescriptionListDescription>{resourceReference?.display}</DescriptionListDescription>
        </DescriptionList>
      )
    }
    return (
      <DescriptionList>
        <DescriptionListTerm>{resourceReference?.typeName}</DescriptionListTerm>
        <DescriptionListDescription>{resourceReference?.display}</DescriptionListDescription>
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
