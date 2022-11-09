import { ChangeEvent, useState } from 'react'
import styled from '@emotion/styled'
import { Story } from '@storybook/react'
import Select from '@ltht-react/select'
import { DESKTOP_MINIMUM_MEDIA_QUERY } from '@ltht-react/styles'
import Card from '@ltht-react/card'

const StyledSelectContainer = styled.div`
  width: 100%;

  ${DESKTOP_MINIMUM_MEDIA_QUERY} {
    width: 30%;
  }
`

export const DropdownSelect: Story = () => {
  const [value, setValue] = useState('all')
  const handleOptionClick = (value: ChangeEvent<HTMLSelectElement>) => {
    setValue(value.target.value)
    // eslint-disable-next-line no-console
    console.log(`${value} clicked!`)
  }

  const options = [
    {
      value: 'active',
      label: 'Active',
    },
    {
      value: 'all',
      label: 'All',
    },
    {
      value: 'custom',
      label: 'Custom',
    },
  ]

  return (
    <Card>
      <Card.Header>Select input</Card.Header>
      <Card.Body>
        <StyledSelectContainer>
          <Select options={options} onChange={handleOptionClick} value={value} />
        </StyledSelectContainer>
      </Card.Body>
    </Card>
  )
}

export default { title: 'UI/Atoms/Select' }
