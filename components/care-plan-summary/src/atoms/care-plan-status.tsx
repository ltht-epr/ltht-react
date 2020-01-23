/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_SECONDARY_COLOUR } from '@ltht-react/styles'
import { CarePlan } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_SECONDARY_COLOUR};
  text-align: right;
`

const CarePlanStatus = ({ carePlan }: { carePlan: CarePlan }) => {
  let values = []

  if (carePlan.intent) values.push(titleCase(carePlan.intent))
  if (carePlan.status) values.push(titleCase(carePlan.status))

  return <div css={styles}>{values.join(' - ')}</div>
}

export default CarePlanStatus
