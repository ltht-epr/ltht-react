/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Patient } from '@ltht-react/types'
import { formatPatientAge, partialDateTimeText } from '@ltht-react/utils'

const styles = css`
  display: flex;
  flex-direction: column;

  div {
    span:first-of-type {
      color: #ccc;
    }
    span:last-of-type {
      color: #fff;
    }
  }
`

const PatientDob: React.FC<Props> = ({ patient }) => {
  return (
    <div css={styles}>
      <div>
        <span>Born</span>
        <span>
          {partialDateTimeText(patient.birthDate)} {patient.deceased?.deceasedBoolean && formatPatientAge(patient)}
        </span>
      </div>
      {patient.deceased?.deceasedBoolean && (
        <div>
          <span>Died</span>
          <span>{partialDateTimeText(patient.deceased?.deceasedDateTime)}</span>
        </div>
      )}
    </div>
  )
}

interface Props {
  patient: Patient
}

export default PatientDob
