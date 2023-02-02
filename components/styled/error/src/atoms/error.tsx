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

const SingleError: FC<ErrorInfo> = ({ type: errorType, text, ...rest }) => {
  return (
    <StyledErrorDiv {...rest}>
      <Icon type="exclamation" size="large" status={errorType === 'warning' ? 'amber' : 'red'} />
      {text}
    </StyledErrorDiv>
  )
}

export interface ErrorInfo extends HTMLAttributes<HTMLDivElement> {
  type: 'warning' | 'error'
  text: string
}

export default SingleError
