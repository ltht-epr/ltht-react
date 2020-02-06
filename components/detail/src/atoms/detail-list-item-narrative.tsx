import React from 'react'
import { Narrative } from '@ltht-react/types'
import { DetailListItemTag, DetailListItemDescription } from '.'

const DetailListItemNarrativeText: React.FC<Props> = ({ narrative }) => {
  if (narrative) {
    return (
      <>
        <DetailListItemTag>Text</DetailListItemTag>
        <DetailListItemDescription>{narrative.text}</DetailListItemDescription>
      </>
    )
  }
  return <></>
}

interface Props {
  narrative?: Narrative | null
}

export default DetailListItemNarrativeText
