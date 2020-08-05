/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { Patient } from '@ltht-react/types'
import { formatPatientAddress } from '@ltht-react/utils'

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
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 0.5rem;
  }
`

const Address: React.FC<Props> = ({ patient }) => {
  return (
    <div css={styles}>
      <span>Address</span>
      <span>{formatPatientAddress(patient)}</span>
    </div>
  )
}

interface Props {
  patient: Patient | undefined
}

export default Address
