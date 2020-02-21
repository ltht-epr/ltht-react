import React from 'react'
import { ResourceReference, Maybe } from '@ltht-react/types'
import { DescriptionList, DescriptionListTerm, DescriptionListDescription } from '@ltht-react/description-list'
import { titleCase } from '@ltht-react/utils'

const ResourceReferenceDetail: React.FC<Props> = ({ term, resourceReference }) => {
  if (resourceReference) {
    return (
      <DescriptionList>
        <DescriptionListTerm>{term}</DescriptionListTerm>
        {resourceReference?.map(item => {
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
  resourceReference?: Maybe<ResourceReference>[] | null
}

export default ResourceReferenceDetail
