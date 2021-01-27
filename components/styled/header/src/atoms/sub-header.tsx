import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'

const StyledSubHeader = styled.h3`
  list-style: none;
  padding-left: 0.5rem;
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: center;
`

const SubHeader: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, ...rest }) => {
  return <StyledSubHeader {...rest}>{children}</StyledSubHeader>
}

export default SubHeader
