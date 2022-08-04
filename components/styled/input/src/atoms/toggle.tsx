import styled from '@emotion/styled'
import { FC, HTMLAttributes } from 'react'

const StyledToggleWrapper = styled.div`
  display: flex;
`

const StyledInput = styled.input`
  appearance: none;
  border: solid 1px black;
  border-radius: 1rem;
  content: '';
  cursor: pointer;
  height: 1rem;
  width: 2rem;
  background: linear-gradient(to left, rgba(0, 0, 0, 0) 50%, black 50%) right;
  background-size: 200% 100%;
  transition: all linear 0.1s;

  &::before {
    align-self: baseline;
    background: white;
    border: 1px solid black;
    border-radius: 1rem;
    content: '';
    display: block;
    height: 1rem;
    left: 0;
    margin-top: -2px;
    margin-left: -1px;
    position: relative;
    top: 0;
    width: 1rem;
    transition: left linear 0.1s;
  }

  &:checked {
    background-position: left;
  }

  &:checked::before {
    left: 1rem;
    background: white;
  }
`

const ToggleInput: FC<ToggleInputProps> = ({ checked, onChange, disabled, ...rest }) => (
  <StyledToggleWrapper>
    <StyledInput
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={(e) => !disabled && onChange && onChange(e)}
      {...rest}
    />
  </StyledToggleWrapper>
)

interface ToggleInputProps extends HTMLAttributes<HTMLInputElement> {
  checked: boolean
  disabled?: boolean
}

export default ToggleInput
