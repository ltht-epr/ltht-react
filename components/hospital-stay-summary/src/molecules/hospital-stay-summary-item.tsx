/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { HospitalStay } from '@ltht-react/types'
import HospitalStayPeriod from '../atoms/hospital-stay-period'
import HospitalStayServiceProvider from '../atoms/hospital-stay-service-provider'

const styles = css`
  display: flex;
  justify-content: center;
`
const descriptionStyles = css`
  flex-grow: 1;
`

const HospitalStaySummaryItem = ({ hospitalStay, clickHandler }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    clickHandler && clickHandler(hospitalStay)
  }
  return (
    <div css={styles} onClick={clickHandler && handleClick}>
      <div css={descriptionStyles}>
        <HospitalStayPeriod hospitalStay={hospitalStay} />
      </div>
      <div css={descriptionStyles}>
        <HospitalStayServiceProvider hospitalStay={hospitalStay} />
      </div>
    </div>
  )
}

interface Props {
  hospitalStay: HospitalStay
  clickHandler?(hospitalStay: HospitalStay): void
}

export default HospitalStaySummaryItem
