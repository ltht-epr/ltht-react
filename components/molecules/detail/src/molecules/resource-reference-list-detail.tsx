import React from 'react'
import { ResourceReference, Maybe } from '@ltht-react/types'
import { DescriptionList, DescriptionListTerm, DescriptionListDescription } from '@ltht-react/description-list'
import { titleCase } from '@ltht-react/utils'

const ResourceReferenceDetail: React.FC<Props> = ({ term, resourceReferences }) => {
  if (resourceReferences) {
    return (
      <DescriptionList>
        <DescriptionListTerm>{term}</DescriptionListTerm>
        {resourceReferences?.map(item => {
          if (item?.display !== undefined) {
            return <DescriptionListDescription>{titleCase(item?.display)}</DescriptionListDescription>
          }
          return <></>
        })}
      </DescriptionList>
    )
  }
  return <></>
}

interface Props {
  term: string
  resourceReferences?: Maybe<ResourceReference>[] | null
}

export default ResourceReferenceDetail
