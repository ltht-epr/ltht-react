import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'

const StyledFormCheck = styled.div`
  display: block;
  position: relative;
  margin-bottom: 0.5rem;
`

const FormCheck: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => (
  <StyledFormCheck className="form-check" {...rest}>
    {children}
  </StyledFormCheck>
)

export default FormCheck
