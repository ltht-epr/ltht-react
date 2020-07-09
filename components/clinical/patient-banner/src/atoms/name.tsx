/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Patient } from '@ltht-react/types'
import { formatPatientName } from '@ltht-react/utils'

const styles = css`
  color: #fff;
  font-weight: bold;
  font-size: 0.875rem;
`

const Name: React.FC<Props> = ({ patient }) => {
  return <span css={styles}>{formatPatientName(patient)}</span>
}

interface Props {
  patient: Patient
}

export default Name
