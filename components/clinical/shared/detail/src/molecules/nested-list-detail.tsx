import React from 'react'
import DescriptionList from '@ltht-react/description-list'

const NestedListDetail: React.FC<Props> = ({ term, children }) => {
  return (
    <DescriptionList>
      <DescriptionList.Term>{term}</DescriptionList.Term>
      <DescriptionList.Description>{children}</DescriptionList.Description>
    </DescriptionList>
  )
}

interface Props {
  term: string
}

export default NestedListDetail
