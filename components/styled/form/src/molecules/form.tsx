import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'

const StyledForm = styled.form`
  margin: 0rem;
`

const Form: React.FC<Props> = ({ submitHandler, children, ...rest }) => (
  <StyledForm onSubmit={submitHandler} {...rest}>
    {children}
  </StyledForm>
)

interface Props extends HTMLAttributes<HTMLFormElement> {
  submitHandler(evt: React.FormEvent<HTMLFormElement>): void
}

export default Form
