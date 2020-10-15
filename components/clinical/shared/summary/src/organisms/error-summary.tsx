/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { ErrorBanner } from '@ltht-react/banner'
import { ExclamationIcon, ChevronIcon } from '@ltht-react/icon'

const styles = css`
  flex-grow: 1;
  padding-left: 0.5rem;
`

const ErrorSummary: React.FC<Props> = ({ clickHandler }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.preventDefault()
    clickHandler && clickHandler()
  }
  const hasClickHandler = clickHandler !== undefined

  return (
    <ErrorBanner clickHandler={handleClick}>
      <ExclamationIcon size="large" status="default" />
      <div css={styles}>Regional Providers Unavailable</div>
      {hasClickHandler && <ChevronIcon size="large" direction="right" />}
    </ErrorBanner>
  )
}

interface Props {
  clickHandler?(): void
}

export default ErrorSummary
