import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'
import { CodeableConcept, DosageType, Maybe } from '@ltht-react/types'
import { partialDateTimeText, periodSummaryText, medicationTitleSeparator } from '@ltht-react/utils'
import { FC } from 'react'
import MedicationDosage from '../atoms/medication-dosage'
import MedicationDosageInstruction from '../atoms/medication-dosage-instruction'
import MedicationDosageReason from '../atoms/medication-dosage-reason'
import MedicationDosageStartDate from '../atoms/medication-dosage-start-date'

const StyledInstructions = styled.div`
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

  let startDate = ''

  switch (type) {
    case 'AND':
    case 'THEN':
      return (
        <StyledInstructions>
          {dosageInstructions?.map((instruction, idx) => {
            let start = ''

            if (instruction?.timing?.event != null) {
              start = partialDateTimeText(instruction?.timing?.event[0])
            } else if (dosageInstructions[0]?.timing?.repeat?.boundsPeriod != null) {
              start = periodSummaryText(instruction?.timing?.repeat?.boundsPeriod)
            }

            if (idx === 0) {
              return (
                <>
                  <MedicationDosageStartDate startDate={start} />
                  <MedicationDosage dosageType={instruction} />
                  {medicationTitleSeparator(instruction)}
                  <MedicationDosageInstruction instruction={instruction?.patientInstruction} />
                  <MedicationDosageReason reasons={reasons} />
                </>
              )
            }

            return (
              <>
                <StyledType>{type === 'AND' ? 'And' : 'Then'}</StyledType>
                <MedicationDosageStartDate startDate={start} />
                <MedicationDosage dosageType={instruction} />
                {medicationTitleSeparator(instruction)}
                <MedicationDosageInstruction instruction={instruction?.patientInstruction} />
                <MedicationDosageReason reasons={reasons} />
              </>
            )
          })}
        </StyledInstructions>
      )
    case 'OR':
      if (dosageInstructions == null) {
        return <></>
      }

      if (dosageInstructions[0]?.timing?.event != null) {
        startDate = partialDateTimeText(dosageInstructions[0]?.timing?.event[0])
      } else if (dosageInstructions[0]?.timing?.repeat?.boundsPeriod != null) {
        startDate = periodSummaryText(dosageInstructions[0]?.timing?.repeat?.boundsPeriod)
      }

      return (
        <StyledInstructions>
          {dosageInstructions?.map((instruction, idx) => {
            if (idx === 0) {
              return (
                <>
                  <MedicationDosageStartDate startDate={startDate} />
                  <MedicationDosage dosageType={instruction} />
                  {medicationTitleSeparator(instruction)}
                  <MedicationDosageInstruction instruction={instruction?.patientInstruction} />
                  <MedicationDosageReason reasons={reasons} />
                </>
              )
            }

            return (
              <>
                <StyledType>Or</StyledType>
                <MedicationDosage dosageType={instruction} />
                {medicationTitleSeparator(instruction)}
                <MedicationDosageInstruction instruction={instruction?.patientInstruction} />
                <MedicationDosageReason reasons={reasons} />
              </>
            )
          })}
        </StyledInstructions>
      )
    default:
      if (dosageInstructions != null) {
        return (
          <StyledInstructions>
            <>
              <MedicationDosage dosageType={dosageInstructions[0]} />
              {medicationTitleSeparator(dosageInstructions[0])}
              <MedicationDosageInstruction instruction={dosageInstructions[0]?.patientInstruction} />
            </>
          </StyledInstructions>
        )
      }
  }

  return <></>
}

interface IProps {
  dosageInstructions: Maybe<Array<Maybe<DosageType>>> | undefined
  reasons: Maybe<Array<Maybe<CodeableConcept>>> | undefined
  type: Maybe<string> | undefined
}

export default MedicationDosageInstructions
