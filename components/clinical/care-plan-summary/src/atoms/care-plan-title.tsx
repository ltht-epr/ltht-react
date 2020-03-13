/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { CarePlan } from '@ltht-react/types'

const styles = css`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
`

const CarePlanTitle: React.FC<Props> = ({ carePlan }) => {
  return <div css={styles}>{carePlan.title}</div>
}

interface Props {
  carePlan: CarePlan
}

export default CarePlanTitle
