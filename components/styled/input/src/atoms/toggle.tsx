import styled from '@emotion/styled'
import { FC, HTMLAttributes } from 'react'

const StyledInput = styled.input`
  appearance: none;
  border: solid 1px black;
  border-radius: 1rem;
  content: '';
  cursor: pointer;
  height: 1rem;
  width: 2rem;
  background: white;
  transition: all linear 0.1s;

  &::before {
    align-self: baseline;
    background: black;
    outline: 1px solid black;
    border-radius: 0.4rem;
    content: '';
    display: block;
    height: 0.6rem;
    width: 0.6rem;
    top: 0.25rem;
    left: 0.22rem;
    margin-top: -2px;
    margin-left: -1px;
    position: relative;
    transition: left linear 0.1s, background linear 0.1s;
  }

  &:checked {
    background: black;

    // Style overrides for IE 11 (fallback to normal checkbox)
    // Only IE 10 & 11 use these media queries
    @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
      background: none;
    }
  }

  &:checked::before {
    left: 1.25rem;
    background: white;
  }
`

const ToggleInput: FC<ToggleInputProps> = ({ checked, onChange, disabled, ...rest }) => (
  <StyledInput
    type="checkbox"
    checked={checked}
    disabled={disabled}
    onChange={(e) => !disabled && onChange && onChange(e)}
    {...rest}
    title={checked ? 'On' : 'Off'}
  />
)

interface ToggleInputProps extends HTMLAttributes<HTMLInputElement> {
  checked: boolean
  disabled?: boolean
}

export default ToggleInput
