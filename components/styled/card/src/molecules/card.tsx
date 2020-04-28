/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'

import { CSS_RESET, TEXT_COLOURS, CARD_BACKGROUND_COLOUR, CARD_BACKGROUND_COLOUR_NO_DATA } from '@ltht-react/styles'
import CardEmpty from '../atoms/card-empty'

const styles = (noData: boolean): SerializedStyles => {
  return css`
  ${CSS_RESET}
  background: ${noData ? CARD_BACKGROUND_COLOUR_NO_DATA : CARD_BACKGROUND_COLOUR};
  color: ${noData ? TEXT_COLOURS.SECONDARY : TEXT_COLOURS.PRIMARY};
  margin-bottom: 1rem;
  border-radius: 4px;
  box-shadow: 
    0px 2px 1px -1px rgba(102, 102, 102, 0.1), 
    0px 1px 1px 0px rgba(102, 102, 102, 0.15), 
    0px 1px 3px 0px rgba(102, 102, 102,.6);
  -webkit-font-smoothing: antialiased;
`
}

const Card: React.FC<Props> = ({ children, noData = false }) => {
  return (
    <div css={styles(noData)}>
      {children}
      {noData && <CardEmpty />}
    </div>
  )
}

interface Props {
  noData?: boolean
}

export default Card
