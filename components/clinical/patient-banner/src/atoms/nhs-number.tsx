/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { TABLET_MEDIA_QUERY } from '@ltht-react/styles'

import { Patient } from '@ltht-react/types'
import { formatNHSNumber } from '@ltht-react/utils'

const styles = css`
  span:first-of-type {
    color: #ccc;
  }
  span:last-of-type {
    color: #fff;
  }
`

const verified = css`
  height: 0.6rem;
  width: 0.15rem;
  background-color: #4cc552;
  border-radius: 50%;
  display: inline-block;
  border: 0.15rem solid #fff;
  margin-left: 0.4rem;
  margin-bottom: -0.1rem;
  ${TABLET_MEDIA_QUERY} {
    margin-bottom: 0;
  }
`

const NhsNumber: React.FC<Props> = ({ patient }) => {
  const nhsNo = patient.identifier?.find(x => x?.system === 'https://fhir.nhs.uk/Id/nhs-number')
  const isNhsNoVerified = nhsNo?.extension?.[0]?.valueCodeableConcept?.coding?.[0]?.code === '01'

  return (
    <div css={styles}>
      <span>NHS No.</span>
      {isNhsNoVerified && <span css={verified} />}
      <span>{formatNHSNumber(nhsNo?.value)}</span>
    </div>
  )
}

interface Props {
  patient: Patient
}

export default NhsNumber
