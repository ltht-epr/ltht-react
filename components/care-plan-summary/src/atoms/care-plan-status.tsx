/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { SECONDARY_TEXT_COLOUR } from '@ltht-react/styles'
import { CarePlan } from '@ltht-react/types'

const styles = css`
  color: ${SECONDARY_TEXT_COLOUR};
  text-align: right;
`

const CarePlanStatus = ({ carePlan }: { carePlan: CarePlan }) => {
  let values = []

  if (carePlan.intent) values.push(carePlan.intent.toString())
  if (carePlan.intent) values.push(carePlan.intent.toString())

  return <div css={styles}>{values.join(' - ')}</div>
}

export default CarePlanStatus
