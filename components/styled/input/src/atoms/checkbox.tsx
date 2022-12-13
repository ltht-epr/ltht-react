import { FC, InputHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { BADGE_COLOURS, INPUT_COLOURS } from '@ltht-react/styles'
import { css } from '@emotion/react'

const StyledCheckbox = styled.div<ConditionalStyles>`
  display: flex;
  align-items: center;
  ${(props) =>
    props.checked &&
    css`
      background-color: ${INPUT_COLOURS.RADIO_SELECTED};
    `}
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
  <StyledCheckbox {...rest} checked={checked}>
    <StyledInput id={id} onChange={onChange} type="checkbox" checked={checked} aria-checked={checked} />
    <StyledLabel htmlFor={id}>{children}</StyledLabel>
  </StyledCheckbox>
)

interface ConditionalStyles extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean
}
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode
}

export default Checkbox
