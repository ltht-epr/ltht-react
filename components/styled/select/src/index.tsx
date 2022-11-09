import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { FC } from 'react'

export const filterInputBase = css`
  border-color: darkgrey;
  border-radius: 5px;
  border-width: 2px !important;
`

const StyledSelect = styled.select`
  ${filterInputBase}
  height:100%;
  width: 100%;
  color: black;

  option:disabled {
    display: none;
  }
`

const Select: FC<ISelectProps> = ({ onSelect, options, value }) => (
  <StyledSelect required onChange={(e) => onSelect(e.target.value)} value={value}>
    {options.map((item, key) => (
      <option key={key} value={item.value}>
        {item.display}
      </option>
    ))}
  </StyledSelect>
)

interface ISelectProps {
  onSelect: (value: any) => void
  options: { display: string; value?: string | number }[]
  value: any
}

export default Select
