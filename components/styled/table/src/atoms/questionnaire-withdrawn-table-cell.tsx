import { FC } from 'react'
import styled from '@emotion/styled'

const StyledText = styled.div<WithdrawnCellProps>`
  text-decoration: 'line-through';
  color: 'gray';
`

const QuestionnaireWithdrawnTableCell: FC<WithdrawnCellProps> = ({ text }) => {
  return <StyledText>{text ?? ''}</StyledText>
}

export interface WithdrawnCellProps {
  text?: string
}

export default QuestionnaireWithdrawnTableCell
