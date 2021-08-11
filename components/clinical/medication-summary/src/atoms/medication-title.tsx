import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { CodeableConcept, Maybe } from '@ltht-react/types'
import { codeableConceptDisplaySummary } from '@ltht-react/utils'

const StyledMedicationTitle = styled.div`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
`

const MedicationTitle: FC<IProps> = ({ medicationTitle, form, ...rest }) => (
  <StyledMedicationTitle {...rest}>
    {codeableConceptDisplaySummary(medicationTitle)} {codeableConceptDisplaySummary(form)}
  </StyledMedicationTitle>
)

interface IProps extends HTMLAttributes<HTMLDivElement> {
  medicationTitle?: Maybe<CodeableConcept>
  form?: Maybe<CodeableConcept>
}

export default MedicationTitle
