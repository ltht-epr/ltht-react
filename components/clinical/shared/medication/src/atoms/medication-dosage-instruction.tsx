import { FC } from 'react'
import styled from '@emotion/styled'
import { Maybe } from '@ltht-react/types'

const StyleInstruction = styled.div`
  display: inline-block;
`

const MedicationDosageInstruction: FC<IProps> = ({ instruction }) => <StyleInstruction>{instruction}</StyleInstruction>

interface IProps {
  instruction: Maybe<string> | undefined
}

export default MedicationDosageInstruction
