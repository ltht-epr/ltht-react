import React from 'react'
import { ResourceReference } from '@ltht-react/types'
import { DetailListItemTag, DetailListItemDescription } from '.'

const DetailListItemResourceReference: React.FC<Props> = ({ tag, resourceReference }) => {
  if (resourceReference) {
    return (
      <>
        <DetailListItemTag>{tag}</DetailListItemTag>
        <DetailListItemDescription>{resourceReference?.display}</DetailListItemDescription>
      </>
    )
  }
  return <></>
}

interface Props {
  tag: string
  resourceReference?: ResourceReference | null
}

export default DetailListItemResourceReference
