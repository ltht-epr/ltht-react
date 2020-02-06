import React from 'react'
import { titleCase } from '@ltht-react/utils'
import { DetailListItemTag, DetailListItemDescription } from '.'

const DetailListItemString: React.FC<Props> = ({ tag, string }) => {
  if (string) {
    return (
      <>
        <DetailListItemTag>{tag}</DetailListItemTag>
        <DetailListItemDescription>{titleCase(string)}</DetailListItemDescription>
      </>
    )
  }
  return <></>
}

interface Props {
  tag: string
  string?: string | null
}

export default DetailListItemString
