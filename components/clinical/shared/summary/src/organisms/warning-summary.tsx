/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { WarningBanner } from '@ltht-react/banner'
import { ExclamationIcon, ChevronIcon } from '@ltht-react/icon'

const styles = css`
  flex-grow: 1;
  padding-left: 0.5rem;
`

const WarningSummary: React.FC<Props> = ({ clickHandler }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.preventDefault()
    clickHandler && clickHandler()
  }

  const hasClickHandler = clickHandler !== undefined

  return (
    <WarningBanner clickHandler={handleClick}>
      <ExclamationIcon size="large" status="default" />
      <div css={styles}>Incomplete Data</div>
      {hasClickHandler && <ChevronIcon size="large" direction="right" />}      
    </WarningBanner>
  )
}

interface Props {
  clickHandler?(): void
}

export default WarningSummary
