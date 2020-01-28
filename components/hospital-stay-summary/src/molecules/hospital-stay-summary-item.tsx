/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Encounter } from '@ltht-react/types'
import HospitalStayPeriod from '../atoms/hospital-stay-period'
import HospitalStayServiceProvider from '../atoms/hospital-stay-service-provider'

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
        <HospitalStayPeriod encounter={hospitalStay} />
      </div>
      <div>
        <HospitalStayServiceProvider hospitalStay={hospitalStay} />
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
