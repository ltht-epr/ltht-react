import { FC } from 'react'
import styled from '@emotion/styled'
import { Maybe, DosageType } from '@ltht-react/types'

const StyleDosage = styled.div`
  font-weight: bold;
  display: inline-block;
`

const MedicationDosage: FC<IProps> = ({ dosageType }) => {
  if (!dosageType) return <></>

  const dosageQuantityDisplay = dosageType.doseQuantity?.unit
    ? `${dosageType.doseQuantity?.value} ${dosageType.doseQuantity?.unit}`
    : `${dosageType.text?.split(',')[0] || ''}`

  const dosageRangeDisplay =
    dosageType.doseRange?.low?.unit && dosageType.doseRange?.high?.unit
      ? `${dosageType.doseRange?.low?.value} ${dosageType.doseRange?.low?.unit} to ${dosageType.doseRange?.high?.value} ${dosageType.doseRange?.high?.unit}`
      : `${dosageType.text?.split(',')[0] || ''}`

  if (dosageType.doseRange) {
    return <StyleDosage>{dosageRangeDisplay}</StyleDosage>
  }

  return <StyleDosage>{dosageQuantityDisplay}</StyleDosage>
}

interface IProps {
  dosageType: Maybe<DosageType>
}

export default MedicationDosage
