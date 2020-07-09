/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { TABLET_MEDIA_QUERY } from '@ltht-react/styles'

import { Patient } from '@ltht-react/types'
import { formatNHSNumber } from '@ltht-react/utils'

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
    height: 0.6rem !important;
    width: 0.6rem !important;
    border-radius: 50%;
    display: inline-block;
    border: 0.15rem solid #fff;
    margin-left: 0.4rem;
    margin-bottom: -0.1rem;
    background-color: #888;
    ${TABLET_MEDIA_QUERY} {
      margin-bottom: 0;
    }
  `,
  verified: css`
    background-color: #4cc552 !important;
  `,
  notVerified: css`
    background-color: #f33 !important;
  `,
}

const NhsNumber: React.FC<Props> = ({ patient }) => {
  // NhsNo verified possibly move to utils,  style refactor??
  const nhsNo = patient.identifier?.find(x => x?.system === 'https://fhir.nhs.uk/Id/nhs-number')
  let status = 'Unknown'
  const iconCss = [iconStyles.base]

  if (
    nhsNo?.extension &&
    nhsNo.extension.length > 0 &&
    nhsNo.extension[0]?.valueCodeableConcept?.coding &&
    nhsNo.extension[0].valueCodeableConcept.coding.length > 0
  ) {
    const verifiedCode = nhsNo.extension[0].valueCodeableConcept.coding[0]?.code
    if (verifiedCode === '01') {
      status = 'Verified'
      iconCss.push(iconStyles.verified)
    } else if (verifiedCode === '02') {
      status = 'Not Verified'
      iconCss.push(iconStyles.notVerified)
    }
  }

  return (
    <div css={styles}>
      <span>NHS No.</span>
      <span css={iconCss} title={status} />
      <span>{formatNHSNumber(nhsNo?.value)}</span>
    </div>
  )
}

interface Props {
  patient: Patient
}

export default NhsNumber
