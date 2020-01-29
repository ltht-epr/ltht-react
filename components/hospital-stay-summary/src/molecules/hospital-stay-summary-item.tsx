/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Encounter } from '@ltht-react/types'
import Period from '../atoms/hospital-stay-period'
import ServiceProvider from '../atoms/hospital-stay-service-provider'

const styles = css`
  display: flex;
  justify-content: center;

  & > div {
    flex-grow: 1;
  }
`

const HospitalStaySummaryItem: React.FC<Props> = ({ hospitalStay, clickHandler, tabIndex }) => {
  const handleClick = (e: EventTypes): void => {
    e.preventDefault()
    clickHandler && clickHandler(hospitalStay)
  }
  return (
    <div
      role="link"
      css={styles}
      tabIndex={tabIndex}
      onClick={clickHandler && handleClick}
      onKeyDown={clickHandler && handleClick}
    >
      <div>
        <Period encounter={hospitalStay} />
      </div>
      <div>
        <ServiceProvider encounter={hospitalStay} />
      </div>
    </div>
  )
}

type EventTypes = React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>

interface Props {
  hospitalStay: Encounter
  clickHandler?(hospitalStay: Encounter): void
  tabIndex: number
}

export default HospitalStaySummaryItem
