/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { TEXT_PRIMARY_COLOUR, TEXT_SECONDARY_COLOUR } from '@ltht-react/styles'

const styles = {
  root: css`
    flex-grow: 1;
    padding-left: 0.5rem;
    text-align: left;
  `,
  primary: css`
    color: ${TEXT_PRIMARY_COLOUR};
  `,
  secondary: css`
    color: ${TEXT_SECONDARY_COLOUR};
  `,
}

const SummaryItemHeader: React.FC<Props> = ({ primary, secondary }) => {
  return (
    <div css={styles.root}>
      {primary && <div css={styles.primary}>{primary}</div>}
      {secondary && <div css={styles.secondary}>{secondary}</div>}
    </div>
  )
}

interface Props {
  primary: string | undefined
  secondary: string | undefined
}

export default SummaryItemHeader
