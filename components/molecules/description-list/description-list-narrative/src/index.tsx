import React from 'react'
import { Narrative } from '@ltht-react/types'
import DescriptionList from '@ltht-react/description-list'
import DescriptionListTerm from '@ltht-react/description-list-term'
import DescriptionListDescription from '@ltht-react/description-list-description'

const DescriptionListNarrative: React.FC<Props> = ({ narrative }) => {
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

export default DescriptionListNarrative
