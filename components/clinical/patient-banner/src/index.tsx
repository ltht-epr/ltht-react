import React from 'react'
import { css } from '@emotion/core'

import { Patient } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'

export const styles = css`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`
const PatientBanner: React.FC<Props> = ({ patient }) => {
  return (
    <>
      <div css={styles}>
        <div>{patient?.name}</div>
        <div>{patient?.gender}</div>
        <div>{partialDateTimeText(patient?.birthDate)}</div>
      </div>
    </>
  )
}

interface Props {
  patient: Patient
}

export default PatientBanner
