/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Patient } from '@ltht-react/types'
import { titleCase, formatPatientAge } from '@ltht-react/utils'

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

const PatientGender: React.FC<Props> = ({ patient }) => {
  return (
    <div css={styles}>
      <div>
        <span>Gender</span>
        <span>{patient.gender && titleCase(patient.gender)}</span>
      </div>
      {patient.deceased?.deceasedBoolean && (
        <div>
          <span>Age at Death</span>
          <span>{formatPatientAge(patient)}</span>
        </div>
      )}
    </div>
  )
}

interface Props {
  patient: Patient
}

export default PatientGender
