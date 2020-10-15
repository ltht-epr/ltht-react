/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { InfoBanner } from '@ltht-react/banner'
import { ChevronIcon, InfoCircleIcon } from '@ltht-react/icon'

const styles = css`
  flex-grow: 1;
  padding-left: 0.5rem;
`

const InfoSummary: React.FC<Props> = ({ clickHandler }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.preventDefault()
    clickHandler && clickHandler()
  }
  const hasClickHandler = clickHandler !== undefined

  return (
    <InfoBanner clickHandler={handleClick}>
      <InfoCircleIcon size="large" status="info" />
      <div css={styles}>View Data Sources</div>
      {hasClickHandler && <ChevronIcon size="large" direction="right" />}
    </InfoBanner>
  )
}

interface Props {
  clickHandler?(): void
}

export default InfoSummary
