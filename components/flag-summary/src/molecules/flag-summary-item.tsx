/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Flag } from '@ltht-react/types'
import FlagTitle from '../atoms/flag-title'
import FlagDate from '../atoms/flag-date'
import FlagDescription from '../atoms/flag-description'
import FlagIcon from '../atoms/flag-icon'
import FlagStatus from '../atoms/flag-status'

const styles = css`
  display: flex;
  border-top: 1px solid #b0b0b0;
  padding: 0.2rem;
  justify-content: center;
`
const descriptionStyles = css`
  flex-grow: 1;
  padding-left: 0.5rem;
`

const FlagSummaryItem = ({ flag, clickHandler }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault()
    clickHandler(flag)
  }
  return (
    <li css={styles} onClick={handleClick}>
      <div>
        <FlagIcon flag={flag} />
      </div>
      <div css={descriptionStyles}>
        <FlagTitle flag={flag} />
        <FlagDescription flag={flag} />
      </div>
      <div>
        <FlagDate flag={flag} />
        <FlagStatus flag={flag} />
      </div>
    </li>
  )
}

interface Props {
  flag: Flag
  clickHandler(flag: Flag): void
}

export default FlagSummaryItem
