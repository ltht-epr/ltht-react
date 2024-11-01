import { render } from '@testing-library/react'

import FlagSummary from '@ltht-react/flag-summary'
import FlagDetail from '@ltht-react/flag-detail'
import { flags, controls } from './flags.fixtures'

describe('Flags', () => {
  describe('Summary', () => {
    it('Renders', () => {
      render(<FlagSummary flag={flags[0]} />)
    })
  })
  describe('Detail', () => {
    it('Renders', () => {
      render(<FlagDetail flag={flags[0]} />)
    })
  })
})
