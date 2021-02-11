import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'
import { Patient } from '@ltht-react/types'
import { formatPatientAddress } from '@ltht-react/utils'

const StyledAddress = styled.div``

const StyledLabel = styled.span`
  color: #666;
  font-weight: normal;
  font-size: 0.75rem;
`

const StyledValue = styled.span`
  color: #333333;
  font-weight: bold;
  font-size: 0.8125rem;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 0.5rem;
`

const Address: FC<Props> = ({ patient, ...rest }) => (
  <StyledAddress {...rest}>
    <StyledLabel>Address</StyledLabel>
    <StyledValue>{formatPatientAddress(patient)}</StyledValue>
  </StyledAddress>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  patient: Patient | undefined
}

export default Address
