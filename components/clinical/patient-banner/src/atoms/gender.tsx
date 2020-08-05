/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Patient } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

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

const Gender: React.FC<Props> = ({ patient }) => {
  return (
    <div css={styles}>
      <span>Gender</span>
      <span>{patient?.gender && titleCase(patient.gender)}</span>
    </div>
  )
}

interface Props {
  patient: Patient | undefined
}

export default Gender
