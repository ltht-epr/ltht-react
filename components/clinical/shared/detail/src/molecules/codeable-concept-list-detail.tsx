import React from 'react'
import { CodeableConcept, Maybe } from '@ltht-react/types'
import { codeableConceptDisplaySummary } from '@ltht-react/utils'
import DescriptionList from '@ltht-react/description-list'

const CodeableConceptListDetail: React.FC<Props> = ({ term, concepts }) => {
  if (concepts && concepts.length > 0) {
    return (
      <DescriptionList>
        <DescriptionList.Term>{term}</DescriptionList.Term>
        {concepts?.map(item => {
          if (item?.text) {
            return <DescriptionList.Description>{codeableConceptDisplaySummary(item)}</DescriptionList.Description>
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
