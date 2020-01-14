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
  return <div css={styles}>{carePlan.status.toString()}</div>
}

export default CarePlanStatus
