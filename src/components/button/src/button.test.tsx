import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { matchers } from 'jest-emotion'

import Button from './button.fixtures'
import { BUTTON_BLUE, BUTTON_GREEN } from '../../../constants/colours'

expect.extend(matchers)

describe('button', () => {
  describe('basics', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<Button>Example</Button>, div)
    })
    it('matches snapshot', () => {
      const wrapper = renderer.create(<Button>Primary Button</Button>).toJSON()
      expect(wrapper).toMatchSnapshot()
    })
  })
})

describe('button', () => {
  describe('styles', () => {
    it('default', () => {
      const wrapper = renderer.create(<Button>Default Button</Button>).toJSON()
      expect(wrapper).toMatchSnapshot()
      expect(wrapper).toHaveStyleRule('background', 'transparent')
      expect(wrapper).toHaveStyleRule('color', BUTTON_BLUE)
      expect(wrapper).toHaveStyleRule('background', '#e5e5e5', { target: ':hover' })
    })
    it('primary', () => {
      const wrapper = renderer.create(<Button primary>Primary Button</Button>).toJSON()
      expect(wrapper).toMatchSnapshot()
      expect(wrapper).toHaveStyleRule('background', BUTTON_BLUE)
      expect(wrapper).toHaveStyleRule('color', 'white')
      expect(wrapper).toHaveStyleRule('background', '#005bb7', { target: ':hover' })
    })
    it('workflow', () => {
      const wrapper = renderer.create(<Button workflow>Workflow Button</Button>).toJSON()
      expect(wrapper).toMatchSnapshot()
      expect(wrapper).toHaveStyleRule('background', BUTTON_GREEN)
      expect(wrapper).toHaveStyleRule('color', 'white')
      expect(wrapper).toHaveStyleRule('background', '#00604b', { target: ':hover' })
    })
  })
})
