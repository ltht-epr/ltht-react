import { ResourceReference, Maybe } from '@ltht-react/types'

const resourceReferenceDisplaySummary = (resourceReferences: Maybe<ResourceReference>[] = []): string => {
  const displaySummary = resourceReferences.map(resourceReference => resourceReference?.display).join(', ')

  return displaySummary
}

export default resourceReferenceDisplaySummary
