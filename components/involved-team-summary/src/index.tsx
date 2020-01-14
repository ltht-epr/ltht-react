/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { EpisodeOfCare } from '@ltht-react/types'
import InvolvedTeamSummaryItem from './molecules/involved-team-summary-item'
import { Widget, WidgetHeader, WidgetList, WidgetListItem } from '@ltht-react/widget'

const titleStyles = css`
  margin-bottom: 0.5rem;
`

const InvolvedTeamSummary = ({ title = 'Involved Teams', episodeOfCares, clickHandler }: Props) => {
  return (
    <Widget>
      <WidgetHeader>
        <h3 css={titleStyles}>{title}</h3>
      </WidgetHeader>
      <WidgetList clickable>
        {episodeOfCares.map((episodeOfCare, index) => (
          <WidgetListItem key={index}>
            <InvolvedTeamSummaryItem episodeOfCare={episodeOfCare} clickHandler={clickHandler} />
          </WidgetListItem>
        ))}
      </WidgetList>
    </Widget>
  )
}

interface Props {
  title: string
  episodeOfCares: EpisodeOfCare[]
  clickHandler(episodeOfCare: EpisodeOfCare): void
}

export default InvolvedTeamSummary
