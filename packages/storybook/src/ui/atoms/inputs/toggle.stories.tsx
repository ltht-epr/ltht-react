/* eslint-disable jsx-a11y/label-has-associated-control */
import { Meta, StoryObj } from '@storybook/react'
import { Toggle } from '@ltht-react/input'
import { FC, useState } from 'react'
import styled from '@emotion/styled'
import Card from '@ltht-react/card'
import { Container } from '../../organisms/dashboard/dashboard'

const meta: Meta = {
  component: Toggle,
}

export default meta

export const ToggleInput: StoryObj<typeof Toggle> = {
  render: () => <ToggleInputStory />,
}

export const DisabledToggleInput: StoryObj<typeof Toggle> = {
  render: () => <DisabledToggleInputStory />,
}

const StyledLabel = styled.label`
  cursor: pointer;
`

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`

const ToggleInputStory: FC = () => {
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

export const DisabledToggleInputStory: FC = () => {
  const [isToggledOn, setIsToggledOn] = useState(false)

  return (
    <Card>
      <Card.Header>
        <Container>
          <StyledWrapper>
            <Toggle
              onChange={(e) => setIsToggledOn((e.target as HTMLInputElement).checked)}
              checked={isToggledOn}
              disabled
              id="toggle-1"
            />
            <StyledLabel htmlFor="toggle-1">Click me</StyledLabel>
          </StyledWrapper>
          <StyledWrapper>
            <Toggle
              onChange={(e) => setIsToggledOn((e.target as HTMLInputElement).checked)}
              checked={!isToggledOn}
              disabled
              id="toggle-1"
            />
            <StyledLabel htmlFor="toggle-1">Click me</StyledLabel>
          </StyledWrapper>
        </Container>
      </Card.Header>
    </Card>
  )
}
