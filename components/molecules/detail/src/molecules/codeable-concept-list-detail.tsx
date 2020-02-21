import React from 'react'
import { CodeableConcept, Maybe } from '@ltht-react/types'
import { codeableConceptDisplaySummary } from '@ltht-react/utils'
import { DescriptionList, DescriptionListTerm, DescriptionListDescription } from '@ltht-react/description-list'

const CodeableConceptListDetail: React.FC<Props> = ({ term, concepts }) => {
  if (concepts) {
    return (
      <DescriptionList>
        <DescriptionListTerm>{term}</DescriptionListTerm>
        {concepts?.map(item => {
          if (item?.text) {
            return <DescriptionListDescription>{codeableConceptDisplaySummary(item)}</DescriptionListDescription>
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
  concepts?: Maybe<CodeableConcept>[] | null
}

export default CodeableConceptListDetail
