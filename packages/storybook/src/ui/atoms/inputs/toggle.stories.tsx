/* eslint-disable jsx-a11y/label-has-associated-control */
import { Story } from '@storybook/react'
import { Toggle } from '@ltht-react/input'
import { useState } from 'react'
import styled from '@emotion/styled'
import Card from '@ltht-react/card'
import { Container } from '../../organisms/dashboard/dashboard'

const StyledLabel = styled.label``

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`

// eslint-disable-next-line import/prefer-default-export
export const ToggleInput: Story = () => {
  const [isToggledOn, setIsToggledOn] = useState(false)

  return (
    <Card>
      <Card.Header>
        <Container>
          <StyledWrapper>
            <Toggle
              onChange={(e) => setIsToggledOn((e.target as HTMLInputElement).checked)}
              checked={isToggledOn}
              id="toggle-1"
            />
            <StyledLabel htmlFor="toggle-1">Click me</StyledLabel>
          </StyledWrapper>
        </Container>
      </Card.Header>
    </Card>
  )
}
