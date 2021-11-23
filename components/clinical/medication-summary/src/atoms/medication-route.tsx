import { FC } from 'react'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'
import { Maybe, CodeableConcept } from '@ltht-react/types'
import { codeableConceptDisplaySummary } from '@ltht-react/utils'

const StyledMedicationRoute = styled.small`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
`

const MedicationRoute: FC<IProps> = ({ route }) => {
  if (route) return <StyledMedicationRoute>{codeableConceptDisplaySummary(route)}</StyledMedicationRoute>

  return null
}

interface IProps {
  route?: Maybe<CodeableConcept>
}

export default MedicationRoute
