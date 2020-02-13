/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { TEXT_PRIMARY_COLOUR, TEXT_SECONDARY_COLOUR } from '@ltht-react/styles'

const styles = {
  primary: css`
    color: ${TEXT_PRIMARY_COLOUR};
  `,
  secondary: css`
    color: ${TEXT_SECONDARY_COLOUR};
  `,
}

const SummaryItemFooter: React.FC<Props> = ({ primary, secondary }) => {
  return (
    <div>
      {primary && <div css={styles.primary}>{primary}</div>}
      {secondary && <div css={styles.secondary}>{secondary}</div>}
    </div>
  )
}

interface Props {
  primary: string | undefined
  secondary: string | undefined
}

export default SummaryItemFooter
