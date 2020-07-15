/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Patient, NhsNumberStatus } from '@ltht-react/types'
import { formatNHSNumber, nhsNumberStatus, titleCase } from '@ltht-react/utils'

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

const iconStyles = {
  base: css`
    height: 0.75rem !important;
    width: 0.75rem !important;
    border-radius: 50%;
    display: inline-block;
    border: 0.123rem solid #fff;
    margin-left: 0.4rem;
    margin-bottom: -0.05rem;
    background-color: #888;
  `,
  verified: css`
    background-color: #4cc552 !important;
  `,
  notVerified: css`
    background-color: #f33 !important;
  `,
}

const NhsNumber: React.FC<Props> = ({ patient }) => {
  const status = nhsNumberStatus(patient)
  const iconCss = [iconStyles.base]

  if (status === NhsNumberStatus.Verified) iconCss.push(iconStyles.verified)
  if (status === NhsNumberStatus.NotVerified) iconCss.push(iconStyles.notVerified)

  return (
    <div css={styles}>
      <span>NHS No.</span>
      <span css={iconCss} title={titleCase(status)} />
      <span>{formatNHSNumber(patient)}</span>
    </div>
  )
}

interface Props {
  patient: Patient
}

export default NhsNumber
