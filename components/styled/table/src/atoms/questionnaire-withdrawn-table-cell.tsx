import { FC } from 'react'
import styled from '@emotion/styled'

const StyledText = styled.div`
  text-decoration: line-through;
  color: gray;
`

const QuestionnaireWithdrawnTableCell: FC<WithdrawnCellProps> = ({ text }) => <StyledText>{text ?? ''}</StyledText>

export interface WithdrawnCellProps {
  text?: string
}

export default QuestionnaireWithdrawnTableCell
