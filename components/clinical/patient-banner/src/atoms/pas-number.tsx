import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { Patient, PatientIdentifierType } from '@ltht-react/types'

const StyledPasNumber = styled.div``

const StyledLabel = styled.span`
  color: #666;
  font-weight: normal;
  font-size: 0.75rem;
`

const StyledValue = styled.span`
  color: #333333;
  font-weight: bold;
  font-size: 0.8125rem;
  margin-left: 0.5rem;
`

const PasNumber: FC<Props> = ({ patient, ...rest }) => {
  const pasNo = patient?.identifier?.find((x) => x?.system === PatientIdentifierType.PasNumber)?.value

  return (
    <StyledPasNumber {...rest}>
      <StyledLabel>Pas No.</StyledLabel>
      <StyledValue>{pasNo}</StyledValue>
    </StyledPasNumber>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  patient: Patient | undefined
}

export default PasNumber
