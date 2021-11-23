import { FC } from 'react'
import styled from '@emotion/styled'
import { Maybe, DosageType } from '@ltht-react/types'

const StyleDosage = styled.div`
  font-weight: bold;
  display: inline-block;
`

const MedicationDosage: FC<IProps> = ({ dosageType }) => {
  if (!dosageType) return <></>

  if (dosageType.doseRange) {
    return (
      <StyleDosage>
        {dosageType.doseRange?.low?.value} {dosageType.doseRange?.low?.unit} to {dosageType.doseRange?.high?.value}{' '}
        {dosageType.doseRange?.high?.unit}
      </StyleDosage>
    )
  }

  return (
    <StyleDosage>
      {dosageType.doseQuantity?.value} {dosageType.doseQuantity?.unit}
    </StyleDosage>
  )
}

interface IProps {
  dosageType: Maybe<DosageType>
}

export default MedicationDosage
