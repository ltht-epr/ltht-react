import { FC, SelectHTMLAttributes } from 'react'
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
  <StyledSelect required onChange={(e) => onChange(e.target.value)} value={value} {...rest}>
    {options.map((item, key) => (
      <option key={key} value={item.value}>
        {item.display}
      </option>
    ))}
  </StyledSelect>
)

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  onChange: (value: any) => void
  options: { display: string; value?: string | number }[]
  value: any
}

export default Select
