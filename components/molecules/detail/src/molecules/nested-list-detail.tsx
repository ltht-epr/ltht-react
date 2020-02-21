import React from 'react'
import { DescriptionList, DescriptionListDescription, DescriptionListTerm } from '@ltht-react/description-list'

const NestedListDetail: React.FC<Props> = ({ term, children }) => {
  return (
    <DescriptionList>
      <DescriptionListTerm>{term}</DescriptionListTerm>
      <DescriptionListDescription>{children}</DescriptionListDescription>
    </DescriptionList>
  )
}

interface Props {
  term: string
}

export default NestedListDetail
