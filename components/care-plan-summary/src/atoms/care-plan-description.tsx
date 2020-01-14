/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { SECONDARY_TEXT_COLOUR } from '@ltht-react/styles'
import { CarePlan } from '@ltht-react/types'

const styles = css`
  color: ${SECONDARY_TEXT_COLOUR};
  text-align: left;
`

const CarePlanDescription = ({ carePlan }: { carePlan: CarePlan }) => {
  return (
    <div css={styles}>
      {carePlan.intent.toString()} {carePlan.author && `- ${carePlan.author?.display}`}
    </div>
  )
}

export default CarePlanDescription
