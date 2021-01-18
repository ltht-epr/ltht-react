/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Flag } from '@ltht-react/types'
import { PeriodSummary } from '@ltht-react/summary'

import Title from '../atoms/flag-title'
import Description from '../atoms/flag-description'
import Status from '../atoms/flag-status'
import Redacted from '../molecules/flag-redacted'

const styles = {
  root: css`
    display: flex;
    justify-content: center;
  `,
  description: css`
    flex-grow: 1;
  `,
  date: css`
    text-align: right;
  `,
}

const FlagSummaryItem: React.FC<Props> = ({ flag, clickHandler }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.preventDefault()
    clickHandler && clickHandler(flag)
  }

  const summaryMarkup = (
    <React.Fragment>
      <div css={styles.description}>
        <Title flag={flag} />
        <Description flag={flag} />
      </div>
      <div css={styles.date}>
        <PeriodSummary period={flag.period} />
        <Status flag={flag} />
      </div>
    </React.Fragment>
  )

  return (
    <div css={styles.root} role="link" onClick={clickHandler && handleClick}>
      {flag.metadata.isRedacted ? <Redacted flag={flag} /> : summaryMarkup}
    </div>
  )
}

interface Props {
  flag: Flag
  clickHandler?(flag: Flag): void
}

export default FlagSummaryItem
