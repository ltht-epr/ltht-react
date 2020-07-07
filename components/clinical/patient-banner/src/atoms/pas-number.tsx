/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { Patient } from '@ltht-react/types'

const styles = css`
  span:first-of-type {
    color: #666;
  }
  span:last-of-type {
    color: #333333;
  }
`

const PasNumber: React.FC<Props> = ({ patient }) => {
  const pasNo = patient.identifier?.find(x => x?.system === 'https://leedsth.nhs.uk/Id/pas-number')?.value

  return (
    <div css={styles}>
      <span>Pas No.</span>
      <span>{pasNo}</span>
    </div>
  )
}

interface Props {
  patient: Patient
}

export default PasNumber
