import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { Group } from '@ltht-react/types'

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

const PedNumber: FC<Props> = ({ patientGroups, ...rest }) => {
  const pedGroup = patientGroups.find((pg) => pg.id.includes('PED'))

  if (pedGroup === undefined) {
    return null
  }

  return (
    <StyledPasNumber {...rest}>
      <StyledLabel>Ped No.</StyledLabel>
      <StyledValue>{pedGroup.id}</StyledValue>
    </StyledPasNumber>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  patientGroups: Group[]
}

export default PedNumber
