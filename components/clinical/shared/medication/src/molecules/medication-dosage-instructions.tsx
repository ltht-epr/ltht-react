import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'
import { CodeableConcept, DosageType, Maybe } from '@ltht-react/types'
import { partialDateTimeText, periodSummaryText, medicationTitleSeparator } from '@ltht-react/utils'
import { FC } from 'react'
import MedicationDosage from '../atoms/medication-dosage'
import MedicationDosageInstruction from '../atoms/medication-dosage-instruction'
import MedicationDosageReason from '../atoms/medication-dosage-reason'
import MedicationDosageStartDate from '../atoms/medication-dosage-start-date'
import DescriptionList from '@ltht-react/description-list'

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

const MedicationDosageInstructions: FC<IProps> = ({ term, dosageInstructions, reasons, type }) => {
  if (dosageInstructions === undefined) {
    return <></>
  }

  let startDate = ''

  switch (type) {
    case 'THEN':
      return (
        <StyledInstructions>
          <DescriptionList>
            <DescriptionList.Term>{term}</DescriptionList.Term>
          </DescriptionList>

          {dosageInstructions?.map((instruction, idx) => {
            let thenStart = ''

            if (instruction?.timing?.event != null) {
              thenStart = partialDateTimeText(instruction?.timing?.event[0])
            } else if (dosageInstructions[0]?.timing?.repeat?.boundsPeriod != null) {
              thenStart = periodSummaryText(instruction?.timing?.repeat?.boundsPeriod)
            }

            if (idx === 0) {
              return (
                <>
                  <MedicationDosageStartDate startDate={thenStart} />
                  <MedicationDosage dosageType={instruction} />
                  {medicationTitleSeparator(instruction)}
                  <MedicationDosageInstruction instruction={instruction?.patientInstruction} />
                  <MedicationDosageReason reasons={reasons} />
                </>
              )
            }

            return (
              <>
                <StyledType>Then</StyledType>
                <MedicationDosageStartDate startDate={thenStart} />
                <MedicationDosage dosageType={instruction} />
                {medicationTitleSeparator(instruction)}
                <MedicationDosageInstruction instruction={instruction?.patientInstruction} />
                <MedicationDosageReason reasons={reasons} />
              </>
            )
          })}
        </StyledInstructions>
      )
    case 'AND':
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
          <DescriptionList>
            <DescriptionList.Term>{term}</DescriptionList.Term>
          </DescriptionList>
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
                <StyledType>{type === 'AND' ? 'And' : 'Or'}</StyledType>
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
              <DescriptionList>
                <DescriptionList.Term>{term}</DescriptionList.Term>
              </DescriptionList>
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
  term?: string
  dosageInstructions: Maybe<Array<Maybe<DosageType>>> | undefined
  reasons: Maybe<Array<Maybe<CodeableConcept>>> | undefined
  type: Maybe<string> | undefined
}

export default MedicationDosageInstructions
