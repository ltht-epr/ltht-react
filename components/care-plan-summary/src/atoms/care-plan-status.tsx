/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { SECONDARY_TEXT_COLOUR } from '@ltht-react/styles'
import { CarePlan } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const styles = css`
  color: ${SECONDARY_TEXT_COLOUR};
  text-align: right;
`

const CarePlanStatus = ({ carePlan }: { carePlan: CarePlan }) => {
  let values = []

  if (carePlan.intent) values.push(titleCase(carePlan.intent))
  if (carePlan.status) values.push(titleCase(carePlan.status))

  return <div css={styles}>{values.join(' - ')}</div>
}

export default CarePlanStatus
