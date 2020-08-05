/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { Patient, PatientIdentifierType } from '@ltht-react/types'

const styles = css`
  span:first-of-type {
    color: #666;
    font-weight: normal;
    font-size: 0.75rem;
  }
  span:last-of-type {
    color: #333333;
    font-weight: bold;
    font-size: 0.8125rem;
    margin-left: 0.5rem;
  }
`

const PasNumber: React.FC<Props> = ({ patient }) => {
  const pasNo = patient?.identifier?.find(x => x?.system === PatientIdentifierType.PasNumber)?.value

  return (
    <div css={styles}>
      <span>Pas No.</span>
      <span>{pasNo}</span>
    </div>
  )
}

interface Props {
  patient: Patient | undefined
}

export default PasNumber
