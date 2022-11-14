import { ChangeEvent, FC, HTMLAttributes, InputHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { BADGE_COLOURS } from '@ltht-react/styles'

const StyledCheckbox = styled.div<InputHTMLAttributes<HTMLInputElement>>`
  display: flex;
  align-items: center;
`

const StyledInput = styled.input`
  appearance: none;
  height: 1.2em;
  margin: 0;
  margin-right: 0.5em;
  position: relative;
  width: 1em;

  &:before {
    border: solid 1px grey;
    border-radius: 3px;
    content: '';
    display: inline-block;
    height: 1em;
    width: 1em;
  }

  &:checked:before {
    background-color: ${BADGE_COLOURS.PRIMARY};
    content: '';
    color: white;
  }

  &:checked:after {
    color: white;
    content: '\\2714';
    font-size: 0.8em;
    height: 1em;
    left: 0.25em;
    position: absolute;
    top: 0;
    width: 1em;
  }
`

const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 0;
`

const Checkbox: FC<Props> = ({ id, checked = false, onChange, children, ...rest }) => (
  <StyledCheckbox {...rest}>
    <StyledInput id={id} onChange={onChange} type="checkbox" checked={checked} />
    <StyledLabel htmlFor={id}>{children}</StyledLabel>
  </StyledCheckbox>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  id: string
  checked: boolean
  children: React.ReactNode
  onChange(e: ChangeEvent<HTMLInputElement>): void
}

export default Checkbox
