import React from 'react'
import { Story } from '@storybook/react'

import DescriptionList from '@ltht-react/description-list'

export const WithTerm: Story = () => (
  <DescriptionList>
    <DescriptionList.Term>Term</DescriptionList.Term>
  </DescriptionList>
)

export const WithDescription: Story = () => (
  <DescriptionList>
    <DescriptionList.Term>Term</DescriptionList.Term>
    <DescriptionList.Description>Description</DescriptionList.Description>
  </DescriptionList>
)

export default { title: 'UI/Organisms/Description List' }
