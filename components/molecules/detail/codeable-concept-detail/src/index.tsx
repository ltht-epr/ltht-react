import React from 'react'
import { CodeableConcept } from '@ltht-react/types'
import { codeableConceptDisplaySummary } from '@ltht-react/utils'
import { DescriptionList, DescriptionListTerm, DescriptionListDescription } from '@ltht-react/description-list'

const CodeableConceptDetail: React.FC<Props> = ({ term, concept }) => {
  if (concept) {
    return (
      <DescriptionList>
        <DescriptionListTerm>{term}</DescriptionListTerm>
        <DescriptionListDescription>{codeableConceptDisplaySummary(concept)}</DescriptionListDescription>
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
