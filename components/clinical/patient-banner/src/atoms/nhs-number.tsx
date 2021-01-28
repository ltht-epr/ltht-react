import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { Patient, NhsNumberStatus } from '@ltht-react/types'
import { PATIENT_NHS_NUMBER_STATUS_VERIFIED, PATIENT_NHS_NUMBER_STATUS_NOT_VERIFIED } from '@ltht-react/styles'
import { formatNHSNumber, nhsNumberStatus, titleCase } from '@ltht-react/utils'

const setBackgroundColor = (status: NhsNumberStatus): string => {
  switch (status) {
    case NhsNumberStatus.Verified:
      return `${PATIENT_NHS_NUMBER_STATUS_VERIFIED}`
    case NhsNumberStatus.NotVerified:
      return `${PATIENT_NHS_NUMBER_STATUS_NOT_VERIFIED}`
    default:
      return '#888'
  }
}

const StyledNhsNumber = styled.div``

const StyledLabel = styled.span`
  color: #ccc;
  font-weight: normal;
  font-size: 0.75rem;
`

const StyledValue = styled.span`
  color: white;
  font-weight: bold;
  font-size: 0.875rem;
  margin-left: 0.5rem;
`

const StyledStatusIcon = styled.span<StyledStatusIconProps>`
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 50%;
  display: inline-block;
  border: 0.123rem solid #fff;
  margin-left: 0.4rem;
  margin-bottom: -0.05rem;
  background-color: ${({ status }): string => setBackgroundColor(status)};
`

const NhsNumber: React.FC<Props> = ({ patient, ...rest }) => {
  const status = nhsNumberStatus(patient)

  return (
    <StyledNhsNumber {...rest}>
      <StyledLabel>NHS No.</StyledLabel>
      <StyledStatusIcon status={status} title={titleCase(status)} />
      <StyledValue>{formatNHSNumber(patient)}</StyledValue>
    </StyledNhsNumber>
  )
}

interface StyledStatusIconProps {
  status: NhsNumberStatus
}
interface Props extends HTMLAttributes<HTMLDivElement> {
  patient: Patient | undefined
}

export default NhsNumber
