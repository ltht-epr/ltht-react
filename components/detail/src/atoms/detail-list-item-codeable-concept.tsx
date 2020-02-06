import React from 'react'
import { CodeableConcept } from '@ltht-react/types'
import { codeableConceptDisplaySummary } from '@ltht-react/utils'
import { DetailListItemTag, DetailListItemDescription } from '.'

const DetailListItemCodeableConceptDisplay: React.FC<Props> = ({ tag, concept }) => {
  if (concept) {
    return (
      <>
        <DetailListItemTag>{tag}</DetailListItemTag>
        <DetailListItemDescription>{codeableConceptDisplaySummary(concept)}</DetailListItemDescription>
      </>
    )
  }
  return <></>
}

interface Props {
  tag: string
  concept?: CodeableConcept | null
}

export default DetailListItemCodeableConceptDisplay
