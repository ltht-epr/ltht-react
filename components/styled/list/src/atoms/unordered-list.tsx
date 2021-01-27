import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'

const StyledUnorderedList = styled.ul<StyledUnorderedListProps>`
  list-style-type: ${({ bullet }): BulletTypes => bullet};
  list-style-position: inside;
`

const UnorderedList: React.FC<Props> = ({ bullet = 'none', children, ...rest }) => (
  <StyledUnorderedList className="list" bullet={bullet} {...rest}>
    {children}
  </StyledUnorderedList>
)

type BulletTypes = 'none' | 'disc' | 'circle'

interface StyledUnorderedListProps {
  bullet: BulletTypes
}
interface Props extends HTMLAttributes<HTMLUListElement> {
  bullet?: BulletTypes
}

export default UnorderedList
