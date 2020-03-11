import React from 'react'
import { Guidance } from '@ltht-react/types'
import { UnorderedList, ListItem } from '@ltht-react/list'

const GuidanceItem: React.FC<Props> = ({ guidance = undefined }) => {
  if (!guidance) {
    return null
  }

  const notes = guidance.note?.map((x, idx) => <ListItem key={idx}>{x?.text}</ListItem>)

  return (
    <div>
      <div>{guidance.text?.text}</div>
      {notes ? <UnorderedList bullet="disc">{notes}</UnorderedList> : null}
    </div>
  )
}

interface Props {
  guidance: Guidance | null
}

export default GuidanceItem
