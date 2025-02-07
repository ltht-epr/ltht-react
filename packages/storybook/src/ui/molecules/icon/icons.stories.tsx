import { Meta, StoryObj } from '@storybook/react'
import Icon from '@ltht-react/icon'
import { IconSize, iconTypes } from '@ltht-react/styles'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
`

const meta: Meta = {
  component: Icon,
}

export default meta

const renderIcons = (size: IconSize) =>
  iconTypes.filter((icon) => icon !== 'do-not-use!').map((type) => <Icon type={type} size={size} />)

export const Small: StoryObj<typeof Icon> = {
  render: () => <Container>{renderIcons('small')}</Container>,
}
export const Medium: StoryObj<typeof Icon> = {
  render: () => <Container>{renderIcons('medium')}</Container>,
}
export const Large: StoryObj<typeof Icon> = {
  render: () => <Container>{renderIcons('large')}</Container>,
}
