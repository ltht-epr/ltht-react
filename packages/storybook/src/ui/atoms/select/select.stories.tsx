import { useState } from 'react'
import styled from '@emotion/styled'
import { Story } from '@storybook/react'
import Select from '@ltht-react/select'
import { DESKTOP_MINIMUM_MEDIA_QUERY } from '@ltht-react/styles'

const StyledSelectContainer = styled.div`
  width: 100%;

  ${DESKTOP_MINIMUM_MEDIA_QUERY} {
    width: 30%;
  }
`

export const DropdownSelect: Story = () => {
  const [activeOption, setActiveOption] = useState('')

  const handleOptionClick = (id: string, displayName: string) => {
    // eslint-disable-next-line no-console
    console.log(`${id} clicked!`)
    setActiveOption(displayName)
  }

  const options = [
    {
      id: 'active',
      displayName: 'Active',
      onClick: () => handleOptionClick('active', 'Active'),
    },
    {
      id: 'all',
      displayName: 'All',
      onClick: () => handleOptionClick('all', 'All'),
    },
    {
      id: 'custom',
      displayName: 'Custom',
      onClick: () => handleOptionClick('custom', 'Custom'),
    },
  ]

  return (
    <StyledSelectContainer>
      <Select activeOption={activeOption}>
        {options.map(({ id, displayName, onClick }) => (
          <Select.Option key={`select-option-${id}`} id={id} onClick={onClick} active={displayName === activeOption}>
            {displayName}
          </Select.Option>
        ))}
      </Select>
    </StyledSelectContainer>
  )
}

export default { title: 'UI/Atoms/Select' }
