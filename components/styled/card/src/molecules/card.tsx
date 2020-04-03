/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'

import { CSS_RESET, TEXT_COLOURS, CARD_BACKGROUND_COLOUR, CARD_BACKGROUND_COLOUR_NO_DATA } from '@ltht-react/styles'
// import { CardProvider, ProviderProps } from '../store/card-context'
import CardEmpty from '../atoms/card-empty'

const styles = (noData: boolean): SerializedStyles => {
  return css`
  ${CSS_RESET}
  background: ${noData ? CARD_BACKGROUND_COLOUR_NO_DATA : CARD_BACKGROUND_COLOUR};
  color: ${noData ? TEXT_COLOURS.SECONDARY : TEXT_COLOURS.PRIMARY};
  margin-bottom: 0.5rem;
  border-radius: 4px;
  box-shadow: 
    0px 2px 1px -1px rgba(102, 102, 102, 0.1), 
    0px 1px 1px 0px rgba(102, 102, 102, 0.15), 
    0px 1px 3px 0px rgba(102, 102, 102,.6);
  margin: 0 5px 10px 0;
  -webkit-font-smoothing: antialiased;
`
}

const Card: React.FC<Props> = ({ children, noData = false }) => {
  return (
    // <CardProvider
    //   collapsible={collapsible}
    //   collapsed={collapsed}
    //   noData={noData}
    //   childrenCount={React.Children.count(children)}
    // >
    <div css={styles(noData)}>
      {children}
      {noData && <CardEmpty />}
    </div>
    // </CardProvider>
  )
}

interface Props {
  noData?: boolean
}

export default Card
