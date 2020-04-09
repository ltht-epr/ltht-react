/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { CarePlan } from '@ltht-react/types'
import { resourceReferenceDisplaySummary } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: left;
  font-size: smaller;
  padding-top: 0.25rem;
`

const CarePlanDescription: React.FC<Props> = ({ carePlan }) => {
  const values = []

  const author = carePlan.author && resourceReferenceDisplaySummary(carePlan.author)
  if (author && author.length > 0) values.push(author)

  const careTeam = carePlan.careTeam && resourceReferenceDisplaySummary(carePlan.careTeam)
  if (careTeam && careTeam.length > 0) values.push(careTeam)

  return <div css={styles}>{values.join(' - ')}</div>
}

interface Props {
  carePlan: CarePlan
}

export default CarePlanDescription
