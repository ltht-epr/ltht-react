import styled from '@emotion/styled'
import { Icon } from '@ltht-react/icon'
import { CSS_RESET } from '@ltht-react/styles'
import { FC, HTMLAttributes } from 'react'

const StyledErrorDiv = styled.div`
  ${CSS_RESET};

  display: flex;
  align-items: center;
  padding: 0.75rem;
`

const StyledIcon = styled(Icon)`
  margin-right: 0.5rem;
`

export const ProblemMessage: FC<Problem> = ({ type: errorType, text, ...rest }) => (
  <StyledErrorDiv {...rest}>
    <StyledIcon type="exclamation" size="large" status={errorType === 'warning' ? 'amber' : 'red'} />
    {text}
  </StyledErrorDiv>
)

export interface Problem extends HTMLAttributes<HTMLDivElement> {
  type: 'warning' | 'error'
  text: string
}
