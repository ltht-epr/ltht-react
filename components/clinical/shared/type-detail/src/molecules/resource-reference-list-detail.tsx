import { FC } from 'react'
import { ResourceReference, Maybe, Scalars } from '@ltht-react/types'
import DescriptionList from '@ltht-react/description-list'
import { titleCase } from '@ltht-react/utils'

const ResourceReferenceListDetail: FC<Props> = ({ term, resourceReferences, showIfEmpty }) => {
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

interface Props {
  term: string
  resourceReferences?: Maybe<ResourceReference>[] | null
  showIfEmpty?: Maybe<Scalars['Boolean']>
}

export default ResourceReferenceListDetail
