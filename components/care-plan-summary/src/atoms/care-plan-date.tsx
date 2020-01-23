/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_PRIMARY_COLOUR } from '@ltht-react/styles'
import { CarePlan } from '@ltht-react/types'
import { periodSummaryText } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_PRIMARY_COLOUR};
  text-align: right;
`

const CarePlanDate = ({ carePlan }: { carePlan: CarePlan }) => {
  return <div css={styles}>{periodSummaryText(carePlan.period)}</div>
}

export default CarePlanDate
