/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Flag } from '@ltht-react/types'
import FlagTitle from '../atoms/flag-title'
import FlagDate from '../atoms/flag-date'
import FlagDescription from '../atoms/flag-description'
import FlagStatus from '../atoms/flag-status'

const styles = css`
  display: flex;
  justify-content: center;
`
const descriptionStyles = css`
  flex-grow: 1;
`

const FlagSummaryItem = ({ flag, clickHandler }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    clickHandler && clickHandler(flag)
  }
  return (
    <div css={styles} onClick={clickHandler && handleClick}>
      <div css={descriptionStyles}>
        <FlagTitle flag={flag} />
        <FlagDescription flag={flag} />
      </div>
      <div>
        <FlagDate flag={flag} />
        <FlagStatus flag={flag} />
      </div>
    </div>
  )
}

interface Props {
  flag: Flag
  clickHandler?(flag: Flag): void
}

export default FlagSummaryItem
