import React from 'react'
import { PartialDateTime } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'
import { DetailListItemTag, DetailListItemDescription } from '.'

const DetailListItemDateTime: React.FC<Props> = ({ tag, datetime }) => {
  if (datetime?.value) {
    return (
      <>
        <DetailListItemTag>{tag}</DetailListItemTag>
        <DetailListItemDescription>{partialDateTimeText(datetime)}</DetailListItemDescription>
      </>
    )
  }
  return <></>
}

interface Props {
  tag: string
  datetime?: PartialDateTime | null
}

export default DetailListItemDateTime
