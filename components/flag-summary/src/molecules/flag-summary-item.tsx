/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Flag } from '@ltht-react/types'
import Title from '../atoms/flag-title'
import Date from '../atoms/flag-date'
import Description from '../atoms/flag-description'
import Status from '../atoms/flag-status'

const styles = {
  root: css`
    display: flex;
    justify-content: center;
  `,
  description: css`
    flex-grow: 1;
  `,
}

const FlagSummaryItem: React.FC<Props> = ({ flag, clickHandler, tabIndex }) => {
  const handleClick = (e: EventTypes): void => {
    e.preventDefault()
    clickHandler && clickHandler(flag)
  }
  return (
    <div
      css={styles.root}
      role="link"
      tabIndex={tabIndex}
      onClick={clickHandler && handleClick}
      onKeyDown={clickHandler && handleClick}
    >
      <div css={styles.description}>
        <Title flag={flag} />
        <Description flag={flag} />
      </div>
      <div>
        <Date flag={flag} />
        <Status flag={flag} />
      </div>
    </div>
  )
}

type EventTypes = React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>

interface Props {
  flag: Flag
  clickHandler?(flag: Flag): void
  tabIndex: number
}

export default FlagSummaryItem
