/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { SECONDARY_TEXT_COLOUR } from '@ltht-react/styles'
import { CarePlan } from '@ltht-react/types'
import { resourceReferenceDisplaySummary } from '@ltht-react/utils'

const styles = css`
  color: ${SECONDARY_TEXT_COLOUR};
  text-align: left;
`

const CarePlanDescription = ({ carePlan }: { carePlan: CarePlan }) => {
  let values = []

  const author = carePlan.author && resourceReferenceDisplaySummary(carePlan.author)
  if (author && author.length > 0) values.push(author)

  const careTeam = carePlan.careTeam && resourceReferenceDisplaySummary(carePlan.careTeam)
  if (careTeam && careTeam.length > 0) values.push(careTeam)

  return <div css={styles}>{values.join(' - ')}</div>
}

export default CarePlanDescription
