import React from 'react'

import { EpisodeOfCare, Maybe } from '@ltht-react/types'
import InvolvedTeamSummaryItem from './molecules/involved-team-summary-item'
import { Widget, WidgetHeader, WidgetList, WidgetListItem } from '@ltht-react/widget'

const InvolvedTeamSummary = ({ title = 'Involved Teams', episodeOfCares, clickHandler }: Props) => {
  return (
    <Widget>
      <WidgetHeader>
        <h3>{title}</h3>
      </WidgetHeader>
      <WidgetList clickable={clickHandler ? true : false}>
        {episodeOfCares?.map((episodeOfCare, index) => (
          <WidgetListItem key={index}>
            <InvolvedTeamSummaryItem episodeOfCare={episodeOfCare} clickHandler={clickHandler} />
          </WidgetListItem>
        ))}
      </WidgetList>
    </Widget>
  )
}

interface Props {
  title?: string
  episodeOfCares: Maybe<EpisodeOfCare[]>
  clickHandler?(episodeOfCare: EpisodeOfCare): void
}

export default InvolvedTeamSummary
