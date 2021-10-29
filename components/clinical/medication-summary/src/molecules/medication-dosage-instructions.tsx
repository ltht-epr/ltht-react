import styled from '@emotion/styled'
import { DosageType, Maybe } from '@ltht-react/types'
import { FC } from 'react'
import MedicationDosageType from '../atoms/medication-dosage-type'

const StyledInstructions = styled.div`
  margin-top: 0.25rem;
  display: block;
  align-items: center;
`

const StyledType = styled.div`
  font-weight: bold;
  font-size: smaller;
  margin: 0.5rem 0;
`

const MedicationDosageInstructions: FC<IProps> = ({ dosageInstructions, type }) => {
  if (dosageInstructions === undefined) {
    return <></>
  }

  if (type === false) {
    return (
      <StyledInstructions>
        {dosageInstructions?.map((instruction, idx) => {
          if (idx === dosageInstructions.length - 1) {
            return <MedicationDosageType dosageType={instruction} />
          }

          return (
            <>
              <MedicationDosageType dosageType={instruction} />
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
            return <MedicationDosageType dosageType={instruction} />
          }

          return (
            <>
              <MedicationDosageType dosageType={instruction} />
              <StyledType>THEN</StyledType>
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
        <MedicationDosageType dosageType={dosageInstructions[0]} />
      </StyledInstructions>
    )
  }

  return <></>
}

interface IProps {
  dosageInstructions: Maybe<Array<Maybe<DosageType>>> | undefined
  // placeholder for medication type tag
  type: Maybe<boolean>
}

export default MedicationDosageInstructions
