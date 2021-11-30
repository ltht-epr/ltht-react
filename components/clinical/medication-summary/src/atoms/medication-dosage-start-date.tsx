import { FC } from 'react'
import styled from '@emotion/styled'
import { Maybe } from '@ltht-react/types'

const StyleDate = styled.div`
  font-size: smaller;
`

const MedicationDosageStartDate: FC<IProps> = ({ startDate }) => <StyleDate>Starting on {startDate}</StyleDate>

interface IProps {
  startDate: Maybe<string> | undefined
}

export default MedicationDosageStartDate
