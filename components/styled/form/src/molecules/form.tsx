import { HTMLAttributes, FC, FormEvent } from 'react'
import styled from '@emotion/styled'

const StyledForm = styled.form`
  margin: 0rem;
`

const Form: FC<Props> = ({ submitHandler, children, ...rest }) => (
  <StyledForm onSubmit={submitHandler} {...rest}>
    {children}
  </StyledForm>
)

interface Props extends HTMLAttributes<HTMLFormElement> {
  submitHandler(evt: FormEvent<HTMLFormElement>): void
}

export default Form
