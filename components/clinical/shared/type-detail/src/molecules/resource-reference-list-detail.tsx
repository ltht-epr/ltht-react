import { FC } from 'react'
import { ResourceReference, Maybe } from '@ltht-react/types'
import DescriptionList from '@ltht-react/description-list'
import { titleCase } from '@ltht-react/utils'

const ResourceReferenceListDetail: FC<Props> = ({ term, resourceReferences }) => {
  if (resourceReferences) {
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
  resourceReferences?: Maybe<ResourceReference[]>
}

export default ResourceReferenceListDetail
