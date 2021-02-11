import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'

const StyledPageHeader = styled.h1`
  list-style: none;
  padding-left: 0.5rem;
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: center;
`

const PageHeader: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, ...rest }) => (
  <StyledPageHeader {...rest}>{children}</StyledPageHeader>
)

export default PageHeader
