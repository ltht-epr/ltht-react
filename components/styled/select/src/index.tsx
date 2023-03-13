import { FC, OptionHTMLAttributes, SelectHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { inputBaseStyles } from '@ltht-react/styles'

const StyledSelect = styled.select`
  ${inputBaseStyles}
  height:100%;
  width: 100%;
  color: black;

  option:disabled {
    display: none;
  }
`

const Select: FC<ISelectProps> = ({ onChange, options, value, ...rest }) => (
  <StyledSelect onChange={(e) => onChange && onChange(e)} value={value} {...rest}>
    {options.map((item, key) => (
      <option key={key} value={item.value}>
        {item.label}
      </option>
    ))}
  </StyledSelect>
)

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: OptionHTMLAttributes<HTMLOptionElement>[]
}

export default Select
