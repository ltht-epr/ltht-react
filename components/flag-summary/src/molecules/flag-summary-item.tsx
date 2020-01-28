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

const FlagSummaryItem: React.FC<Props> = ({ flag, clickHandler }) => {
  const handleClick = (e: EventTypes): void => {
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

type EventTypes = React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>

interface Props {
  flag: Flag
  clickHandler?(flag: Flag): void
}

export default FlagSummaryItem
