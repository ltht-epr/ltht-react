import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { SELECT_COLOURS } from '@ltht-react/styles'

const StyledOption = styled.span<IStyledOption>`
  width: 100%;
  display: block;
  border: 1px solid black;
  border-top: 0;
  padding: 0.5rem 1rem;
  background: ${({ active }) => (active ? `${SELECT_COLOURS.OPTION_SELECTED}` : 'white')};
  cursor: pointer;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${SELECT_COLOURS.OPTION_HOVER};
  }
`

const Option: FC<IProps> = ({ children, active = false, ...rest }) => (
  <StyledOption active={active} {...rest}>
    {children}
  </StyledOption>
)

export interface IProps extends HTMLAttributes<HTMLSpanElement> {
  active: boolean
}

interface IStyledOption {
  active: boolean
}

export default Option
