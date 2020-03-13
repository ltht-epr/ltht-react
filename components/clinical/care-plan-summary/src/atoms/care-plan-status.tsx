/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { CarePlan } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_COLOURS.SECONDARY};
  text-align: right;
`

const CarePlanStatus: React.FC<Props> = ({ carePlan }) => {
  const values = []

  if (carePlan.intent) values.push(titleCase(carePlan.intent))
  if (carePlan.status) values.push(titleCase(carePlan.status))

  return <div css={styles}>{values.join(' - ')}</div>
}

interface Props {
  carePlan: CarePlan
}

export default CarePlanStatus
