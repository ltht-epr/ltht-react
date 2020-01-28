import React from 'react'

import { EpisodeOfCare } from '@ltht-react/types'
import { Widget, WidgetHeader, WidgetList, WidgetListItem } from '@ltht-react/widget'
import InvolvedTeamSummaryItem from './molecules/involved-team-summary-item'

const InvolvedTeamSummary: React.FC<Props> = ({ title = 'Involved Teams', episodeOfCares = [], clickHandler }) => {
  return (
    <Widget>
      <WidgetHeader>
        <h3>{title}</h3>
      </WidgetHeader>
      <WidgetList clickable={!!clickHandler}>
        {episodeOfCares.map((episodeOfCare, index) => (
          <WidgetListItem key={episodeOfCare.id}>
            <InvolvedTeamSummaryItem tabIndex={index} episodeOfCare={episodeOfCare} clickHandler={clickHandler} />
          </WidgetListItem>
        ))}
      </WidgetList>
    </Widget>
  )
}

interface Props {
  title?: string
  episodeOfCares: EpisodeOfCare[] | undefined
  clickHandler?(episodeOfCare: EpisodeOfCare): void
}

export default InvolvedTeamSummary
