import React from 'react'
import { Guidance } from '@ltht-react/types'
import { RedactedSummaryItem } from '@ltht-react/summary'
import { UnorderedList, ListItem } from '@ltht-react/list'

const GuidanceItem: React.FC<Props> = ({ guidance = undefined }) => {
  if (!guidance) {
    return null
  }

  const notes = guidance.note?.map((x, idx) => <ListItem key={idx}>{x?.text}</ListItem>)

  return guidance.metadata.isRedacted ? (
    <RedactedSummaryItem />
  ) : (
    <>
      <div>{guidance.text?.text}</div>
      {notes ? <UnorderedList bullet="disc">{notes}</UnorderedList> : null}
    </>
  )
}

interface Props {
  guidance: Guidance | null
}

export default GuidanceItem
