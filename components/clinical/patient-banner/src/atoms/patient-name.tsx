/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Patient } from '@ltht-react/types'
import { formatPatientName } from '@ltht-react/utils'

const styles = css`
  span: {
    color: #fff;
    font-weight: bold;
    font-size: 0.875rem;
  }
`

const PatientName: React.FC<Props> = ({ patient }) => {
  return (
    <div css={styles}>
      <span>{formatPatientName(patient)}</span>
    </div>
  )
}

interface Props {
  patient: Patient
}

export default PatientName
