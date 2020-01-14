/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { PRIMARY_TEXT_COLOUR } from '@ltht-react/styles'
import { CarePlan } from '@ltht-react/types'

const styles = css`
  color: ${PRIMARY_TEXT_COLOUR};
  text-align: left;
`

const CarePlanTitle = ({ carePlan }: { carePlan: CarePlan }) => {
  return <div css={styles}>{carePlan.title}</div>
}

export default CarePlanTitle
