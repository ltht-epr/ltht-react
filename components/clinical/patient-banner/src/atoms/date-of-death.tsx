/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Patient } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'

const styles = css`
  span:first-of-type {
    color: #ccc;
    font-weight: normal;
    font-size: 0.75rem;
  }
  span:last-of-type {
    color: #fff;
    font-weight: bold;
    font-size: 0.875rem;
    margin-left: 0.5rem;
  }
`

const DateOfDeath: React.FC<Props> = ({ patient }) => {
  if (patient.deceased?.deceasedBoolean) {
    return (
      <div css={styles}>
        <span>Died</span>
        <span>{partialDateTimeText(patient.deceased?.deceasedDateTime)}</span>
      </div>
    )
  }

  return <React.Fragment />
}

interface Props {
  patient: Patient
}

export default DateOfDeath
