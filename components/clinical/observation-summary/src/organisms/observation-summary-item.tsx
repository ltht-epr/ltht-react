/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Observation } from '@ltht-react/types'
import Status from '../atoms/observation-status'
import Value from '../atoms/observation-value'
import Redacted from '../molecules/observation-redacted'

const styles = {
  root: css`
    display: flex;
    justify-content: center;
  `,
  description: css`
    flex-grow: 1;
  `,
}

const ObservationSummaryItem: React.FC<Props> = ({ observation, clickHandler }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.preventDefault()
    clickHandler && clickHandler(observation)
  }

  const summaryMarkup = (
    <React.Fragment>
      <div>
        <Value observation={observation} />
      </div>
      <div>
        <Status observation={observation} />
      </div>
    </React.Fragment>
  )

  return (
    <div role="link" css={styles.root} onClick={clickHandler && handleClick}>
      {observation.metadata.isRedacted ? <Redacted /> : summaryMarkup}
    </div>
  )
}

interface Props {
  observation: Observation
  clickHandler?(observation: Observation): void
}

export default ObservationSummaryItem
