import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { Maybe, MedicationRequest } from '@ltht-react/types'
import { DateSummary } from '@ltht-react/summary'

import Title from '../atoms/medication-title'
import Route from '../atoms/medication-route'
import Indication from '../atoms/medication-indication'

import AdditionalInfo from '../molecules/medication-additional-info'
import Redacted from '../molecules/medication-redacted'
import MedicationDosageInstructions from '../molecules/medication-dosage-instructions'

const StyledSummary = styled.div`
  display: flex;
  flex: 1;
  /* flex-basis: 0; */
  justify-content: space-between;
`

const StyledDescription = styled.div`
  display: flex;
  flex: 2;
  /* flex-basis: 0; */
  flex-direction: column;
  align-items: flex-start;
  padding-right: 0.5rem;
`

const StyledDosage = styled.div`
  display: flex;
  flex: 5;
  /* flex-basis: 0; */
  flex-direction: column;
  align-items: flex-start;
  padding-right: 0.5rem;
`

const StyledDate = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  text-align: right;

  > div {
    width: 100%;
  }
`

const MedicationSummary: FC<IProps> = ({ medication, ...rest }) => {
  if (medication?.metadata.isRedacted) return <Redacted />

  const route = medication?.dosageInstruction && medication.dosageInstruction[0]?.route
  const hasIndications = medication?.reasonCode
  const hasChanged = medication?.extension?.find((extension) => extension?.url.includes('has-changed'))?.valueBoolean
  const hasVerificationComments = medication?.note && medication?.note.length > 0

  return (
    <StyledSummary {...rest}>
      <StyledDescription>
        <Title medicationTitle={medication?.medicationReference?.code} form={medication?.medicationReference?.form} />
        <Route route={route} />
        {hasIndications &&
          medication?.reasonCode?.map((indication, index) => (
            <Indication key={`medication-indication-${index + 1}`} indication={indication} />
          ))}
        <AdditionalInfo hasChanged={hasChanged} hasVerificationComments={hasVerificationComments} />
      </StyledDescription>
      <StyledDosage>
        <MedicationDosageInstructions
          dosageInstructions={medication?.dosageInstruction}
          reasons={medication?.reasonCode}
          type
        />
      </StyledDosage>
      <StyledDate>
        <DateSummary datetime={medication?.authoredOn} />
      </StyledDate>
    </StyledSummary>
  )
}

interface IProps extends HTMLAttributes<HTMLDivElement> {
  medication: Maybe<MedicationRequest>
}

export default MedicationSummary
