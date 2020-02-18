import React from 'react'
import { Narrative } from '@ltht-react/types'
import { DescriptionList, DescriptionListTerm, DescriptionListDescription } from '@ltht-react/description-list'

const NarrativeDetail: React.FC<Props> = ({ narrative }) => {
  if (narrative) {
    return (
      <DescriptionList>
        <DescriptionListTerm>Text</DescriptionListTerm>
        <DescriptionListDescription>{narrative.text}</DescriptionListDescription>
      </DescriptionList>
    )
  }
  return <></>
}

interface Props {
  narrative?: Narrative | null
}

export default NarrativeDetail
