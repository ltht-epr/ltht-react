import React from 'react'
import { Guidance } from '@ltht-react/types'
import { UnorderedList, ListItem } from '@ltht-react/list'

import Redacted from '../molecules/guidance-redacted'

const GuidanceSummaryItem: React.FC<Props> = ({ guidance = undefined }) => {
  if (!guidance) {
    return null
  }

  const notes = guidance.note?.map(x => <ListItem key={x?.text}>{x?.text}</ListItem>)

  const summaryMarkup = (
    <>
      <h3>{guidance.reasonCode?.text}</h3>
      <div>{guidance.text?.text}</div>
      {notes ? <UnorderedList bullet="disc">{notes}</UnorderedList> : null}
    </>
  )

  return guidance.metadata.isRedacted ? <Redacted /> : summaryMarkup
}

interface Props {
  guidance: Guidance | null
}

export default GuidanceSummaryItem
