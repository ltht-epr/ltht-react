import React from 'react'
import { titleCase } from '@ltht-react/utils'
import { DescriptionList, DescriptionListTerm, DescriptionListDescription } from '@ltht-react/description-list'

const StringDetail: React.FC<Props> = ({ term, description }) => {
  if (description) {
    return (
      <DescriptionList>
        <DescriptionListTerm>{term}</DescriptionListTerm>
        <DescriptionListDescription>{titleCase(description)}</DescriptionListDescription>
      </DescriptionList>
    )
  }
  return <></>
}

interface Props {
  term: string
  description?: string | null
}

export default StringDetail
