import { ChangeEvent, FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css, SerializedStyles } from '@emotion/react'
import { INPUT_COLOURS } from '@ltht-react/styles'

const StyledRadioButton = styled.div<StyledRadioButtonProps>`
  padding-left: 1.25rem;

  ${({ checked }): ConditionalStyles =>
    checked &&
    css`
      background-color: ${INPUT_COLOURS.RADIO_SELECTED};
    `}
`

const StyledInput = styled.input`
  position: absolute;
  margin-top: 0.15rem;
  margin-left: -1.25rem;
`

const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 0;
`

const RadioButton: FC<Props> = ({ id, value, checked = false, label, changeHandler, ...rest }) => (
  <StyledRadioButton checked={checked} {...rest}>
    <StyledInput id={id} onChange={changeHandler} value={value} type="radio" checked={checked} />
    <StyledLabel htmlFor={id}>{label}</StyledLabel>
  </StyledRadioButton>
)

type ConditionalStyles = SerializedStyles | false

interface StyledRadioButtonProps {
  checked: boolean
}
interface Props extends HTMLAttributes<HTMLDivElement> {
  id: string
  value: string
  checked?: boolean
  label: string
  changeHandler(e: ChangeEvent<HTMLInputElement>): void
}

export default RadioButton
