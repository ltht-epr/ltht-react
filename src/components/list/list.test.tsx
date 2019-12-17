import ReactDom from 'react-dom'

import { DefaultList } from './list.fixtures'

describe('list', () => {
  describe('basics', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDom.render(DefaultList(), div)
    })
  })
})
