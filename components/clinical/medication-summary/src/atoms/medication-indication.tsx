import { FC } from 'react'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'
import { Maybe, CodeableConcept } from '@ltht-react/types'
import { codeableConceptDisplaySummary } from '@ltht-react/utils'

const StyledMedicationIndication = styled.small`
  display: inline-block;
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
`

const MedicationIndication: FC<IProps> = ({ indication }) => {
  if (indication)
    return <StyledMedicationIndication>{codeableConceptDisplaySummary(indication)}</StyledMedicationIndication>

  return null
}

interface IProps {
  indication: Maybe<CodeableConcept>
}

export default MedicationIndication
