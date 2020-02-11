import React from 'react'
import { ResourceReference } from '@ltht-react/types'
import DescriptionList from '@ltht-react/description-list'
import DescriptionListTerm from '@ltht-react/description-list-term'
import DescriptionListDescription from '@ltht-react/description-list-description'

const DescriptionListResourceReference: React.FC<Props> = ({ term, resourceReference }) => {
  if (resourceReference) {
    return (
      <DescriptionList>
        <DescriptionListTerm>{term}</DescriptionListTerm>
        <DescriptionListDescription>{resourceReference?.display}</DescriptionListDescription>
      </DescriptionList>
    )
  }
  return <></>
}

interface Props {
  term: string
  resourceReference?: ResourceReference | null
}

export default DescriptionListResourceReference
