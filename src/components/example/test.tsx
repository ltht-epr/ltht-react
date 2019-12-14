import React from 'react'
import { mount, shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Example from './index'

describe('button', () => {
  describe('basics', () => {
    it('class name', () => {
      const wrapper = mount(<Example>Example</Example>)
      console.log(wrapper.html())
      expect(wrapper.find('h1').hasClass('css-cljjpi')).toBe(true)
    })
    it('should render a h1', () => {
      const wrapper = mount(<Example>Example</Example>)
      expect(wrapper.find('h1').exists()).toBe(true)
    })
    it('matches snapshot', () => {
      const wrapper = mount(<Example>Example</Example>)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
