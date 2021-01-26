/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { WarningBanner } from '@ltht-react/banner'
import { ExclamationIcon, ChevronIcon } from '@ltht-react/icon'

const styles = css`
  flex-grow: 1;
  padding-left: 0.5rem;
`

const MissingDataWarning: React.FC<Props> = ({ clickHandler }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.preventDefault()
    if (clickHandler != null) {
      clickHandler()
    }
  }

  return (
    <WarningBanner clickHandler={handleClick}>
      <ExclamationIcon size="large" status="amber" />
      <div css={styles}>Missing Data</div>
      <ChevronIcon size="large" direction="right" />
    </WarningBanner>
  )
}

interface Props {
  clickHandler?(): void
}

export default MissingDataWarning
