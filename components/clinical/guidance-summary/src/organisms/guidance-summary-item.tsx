/** @jsx jsx */
import React from 'react'
import { Guidance } from '@ltht-react/types'
import { UnorderedList, ListItem } from '@ltht-react/list'
import { jsx } from '@emotion/core'

import Redacted from '../molecules/guidance-redacted'

const GuidanceSummaryItem: React.FC<Props> = ({ guidance = undefined }) => {
  if (!guidance) {
    return null
  }

  const notes = guidance.note?.map(x => <ListItem key={x?.text}>{x?.text}</ListItem>)

  const summaryMarkup = (
    <div>
      <h4>{guidance.reasonCode?.text}</h4>
      <span>{guidance.text?.text}</span>
      {notes ? <UnorderedList bullet="disc">{notes}</UnorderedList> : null}
    </div>
  )

  return guidance.metadata.isRedacted ? <Redacted /> : summaryMarkup
}

interface Props {
  guidance: Guidance | null
}

export default GuidanceSummaryItem
