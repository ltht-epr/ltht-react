import React from 'react'

import { EpisodeOfCare } from '@ltht-react/types'
import { ListItem } from '@ltht-react/list'
import { Card, CardHeader, CardList } from '@ltht-react/card'
import InvolvedTeamSummaryItem from './molecules/involved-team-summary-item'

const InvolvedTeamSummary: React.FC<Props> = ({ title = 'Involved Teams', episodeOfCares = [], clickHandler }) => {
  return (
    <Card noData={episodeOfCares.length === 0}>
      <CardHeader>
        <h3>{title}</h3>
      </CardHeader>
      <CardList clickable={!!clickHandler}>
        {episodeOfCares.map(episodeOfCare => (
          <ListItem key={episodeOfCare.id}>
            <InvolvedTeamSummaryItem episodeOfCare={episodeOfCare} clickHandler={clickHandler} />
          </ListItem>
        ))}
      </CardList>
    </Card>
  )
}

interface Props {
  title?: string
  episodeOfCares: EpisodeOfCare[] | undefined
  clickHandler?(episodeOfCare: EpisodeOfCare): void
}

export default InvolvedTeamSummary
