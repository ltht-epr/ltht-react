import { FC } from 'react'
import { CodeableConcept } from '@ltht-react/types'
import { codeableConceptDisplaySummary } from '@ltht-react/utils'
import DescriptionList from '@ltht-react/description-list'

const CodeableConceptDetail: FC<Props> = ({ term, concept }) => {
  if (concept) {
    return (
      <DescriptionList>
        <DescriptionList.Term>{term}</DescriptionList.Term>
        <DescriptionList.Description>{codeableConceptDisplaySummary(concept)}</DescriptionList.Description>
      </DescriptionList>
    )
  }
  return <></>
}

interface Props {
  term: string
  concept?: CodeableConcept | null
}

export default CodeableConceptDetail
