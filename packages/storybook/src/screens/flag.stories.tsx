import React from 'react'
import { storiesOf } from '@storybook/react'
import { Widgets, Widget, WidgetTitle, DescriptionList, DescriptionTerm, Description } from '@ltht-react/widget'

const stories = storiesOf('Screens|Widgets', module)

const Component = (
  <Widgets>
    <Widget>
      <WidgetTitle>Title</WidgetTitle>
      <DescriptionList>
        <DescriptionTerm>Term</DescriptionTerm>
        <Description>Description</Description>
      </DescriptionList>
    </Widget>
  </Widgets>
)

stories
  .addParameters({ backgrounds: [{ name: 'default', value: '#d8d8d8', default: true }] })
  .add('Component Default', () => Component)
