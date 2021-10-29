import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'
import { CodeableConcept, DosageType, Maybe } from '@ltht-react/types'
import { FC } from 'react'
import MedicationDosage from '../atoms/medication-dosage'
import MedicationDosageInstruction from '../atoms/medication-dosage-instruction'
import MedicationDosageReason from '../atoms/medication-dosage-reason'

const StyledInstructions = styled.div`
  margin-top: 0.25rem;
  display: block;
  align-items: center;
`

const StyledType = styled.div`
  font-weight: bold;
  font-size: smaller;
  margin: 0.5rem 0;
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
`

const MedicationDosageInstructions: FC<IProps> = ({ dosageInstructions, reasons, type }) => {
  if (dosageInstructions === undefined) {
    return <></>
  }

  if (type === false) {
    return (
      <StyledInstructions>
        {dosageInstructions?.map((instruction, idx) => {
          if (idx === dosageInstructions.length - 1) {
            return (
              <>
                <MedicationDosage dosageType={instruction} /> -{' '}
                <MedicationDosageInstruction instruction={instruction?.patientInstruction} />
                <MedicationDosageReason reasons={reasons} />
              </>
            )
          }

          return (
            <>
              <MedicationDosage dosageType={instruction} /> -{' '}
              <MedicationDosageInstruction instruction={instruction?.patientInstruction} />
              <MedicationDosageReason reasons={reasons} />
              <StyledType>AND</StyledType>
            </>
          )
        })}
      </StyledInstructions>
    )
  }

  if (type === true) {
    return (
      <StyledInstructions>
        {dosageInstructions?.map((instruction, idx) => {
          if (idx === dosageInstructions.length - 1) {
            return (
              <>
                <MedicationDosage dosageType={instruction} /> -{' '}
                <MedicationDosageInstruction instruction={instruction?.patientInstruction} />
                <MedicationDosageReason reasons={reasons} />
              </>
            )
          }

          return (
            <>
              <MedicationDosage dosageType={instruction} /> -{' '}
              <MedicationDosageInstruction instruction={instruction?.patientInstruction} />
              <MedicationDosageReason reasons={reasons} />
              <StyledType>Then</StyledType>
            </>
          )
        })}
      </StyledInstructions>
    )
  }

  // single instruction
  if (!type && dosageInstructions != null) {
    return (
      <StyledInstructions>
        <>
          <MedicationDosage dosageType={dosageInstructions[0]} /> -{' '}
          <MedicationDosageInstruction instruction={dosageInstructions[0]?.patientInstruction} />
        </>
      </StyledInstructions>
    )
  }

  return <></>
}

interface IProps {
  dosageInstructions: Maybe<Array<Maybe<DosageType>>> | undefined
  reasons: Maybe<Array<Maybe<CodeableConcept>>> | undefined
  // placeholder for medication type tag
  type: Maybe<boolean>
}

export default MedicationDosageInstructions
