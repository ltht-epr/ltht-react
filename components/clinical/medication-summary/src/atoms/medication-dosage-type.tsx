import { FC } from 'react'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'
import { Maybe, DosageType } from '@ltht-react/types'

const StyleDosageType = styled.div`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
`

const StyleDosage = styled.div`
  font-weight: bold;
  display: inline-block;
`

const StyleInstruction = styled.div`
  display: inline-block;
`

const MedicationDosageType: FC<IProps> = ({ dosageType }) => {
  if (!dosageType) return <></>

  if (dosageType.doseRange) {
    return (
      <StyleDosageType>
        <StyleDosage>
          {dosageType.doseRange?.low?.value} {dosageType.doseRange?.low?.unit} to {dosageType.doseRange?.high?.value}{' '}
          {dosageType.doseRange?.high?.unit}
        </StyleDosage>
        <StyleInstruction>- {dosageType.patientInstruction}</StyleInstruction>
      </StyleDosageType>
    )
  }

  return (
    <StyleDosageType>
      <StyleDosage>
        {dosageType.doseQuantity?.value} {dosageType.doseQuantity?.unit}
      </StyleDosage>{' '}
      <StyleInstruction>- {dosageType.patientInstruction}</StyleInstruction>
    </StyleDosageType>
  )
}

interface IProps {
  dosageType: Maybe<DosageType>
}

export default MedicationDosageType
