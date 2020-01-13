import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

// import { FlagOne, FlagTwo } from './fixtures'
import { Widget, WidgetBody, WidgetHeader, WidgetFooter, WidgetList, WidgetListItem } from '.'

const components = (
  <>
    <Widget>
      <WidgetHeader>
        <h3>Heading</h3>
      </WidgetHeader>
      <WidgetBody>Body</WidgetBody>
      <WidgetFooter>Footer</WidgetFooter>
    </Widget>
    <Widget>
      <WidgetHeader>
        <h3>Heading</h3>
      </WidgetHeader>
      <WidgetList>
        <WidgetListItem>Item 1</WidgetListItem>
        <WidgetListItem>Item 2</WidgetListItem>
      </WidgetList>
      <WidgetFooter>Footer</WidgetFooter>
    </Widget>
  </>
)

describe('Widget', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(components, div)
  })
  it('matches snapshot', () => {
    expect(mount(components)).toMatchSnapshot('wrapper mount')
  })
})
