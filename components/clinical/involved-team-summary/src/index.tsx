import React from 'react'

import { EpisodeOfCare } from '@ltht-react/types'
import { ListItem } from '@ltht-react/list'
import InvolvedTeamSummaryItem from './molecules/involved-team-summary-item'

const InvolvedTeamSummary: React.FC<Props> = ({ episodeOfCares = [], clickHandler }) => {
  return (
    <>
      {episodeOfCares.map(episodeOfCare => (
        <ListItem key={episodeOfCare.id}>
          <InvolvedTeamSummaryItem episodeOfCare={episodeOfCare} clickHandler={clickHandler} />
        </ListItem>
      ))}
    </>
  )
}

interface Props {
  episodeOfCares: EpisodeOfCare[] | undefined
  clickHandler?(episodeOfCare: EpisodeOfCare): void
}

export default InvolvedTeamSummary
