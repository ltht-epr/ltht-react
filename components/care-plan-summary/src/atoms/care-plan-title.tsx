/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_PRIMARY_COLOUR } from '@ltht-react/styles'
import { CarePlan } from '@ltht-react/types'

const styles = css`
  color: ${TEXT_PRIMARY_COLOUR};
  text-align: left;
`

const CarePlanTitle = ({ carePlan }: { carePlan: CarePlan }) => {
  return <div css={styles}>{carePlan.title}</div>
}

export default CarePlanTitle
