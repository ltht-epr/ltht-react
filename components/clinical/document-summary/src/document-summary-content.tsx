/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { ChevronIcon } from '@ltht-react/icon'
import { TEXT_COLOURS } from '@ltht-react/styles'
import { titleCase } from '@ltht-react/utils'

const styles = {
  description: css`
    flex-grow: 1;
    margin: 0 0.5rem;
    text-align: left;
  `,
  source: css`
    margin-right: 0.5rem;
    text-align: right;
  `,
  status: css`
    color: ${TEXT_COLOURS.SECONDARY.VALUE};
    font-size: smaller;
  `,
}

const DocumentSummaryContent: React.FC<Props> = ({
  description = undefined,
  created = undefined,
  source = undefined,
  status = undefined,
  clickHandler,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.preventDefault()
    clickHandler && clickHandler()
  }

  return (
    <div onClick={clickHandler && handleClick}>
      <div>{created}</div>
      <div css={styles.description}>{description}</div>
      <div css={styles.source}>
        <div>{source && titleCase(source)}</div>
        <div css={styles.status}>{status && titleCase(status)}</div>
      </div>
      <div>{clickHandler ? <ChevronIcon direction="right" size="large" /> : null}</div>
    </div>
  )
}

interface Props {
  description?: string
  created?: string
  source?: string
  status?: string
  clickHandler?(): void
}

export default DocumentSummaryContent
