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
  describe('Detail Flag no external doc', () => {
    it('Renders', () => {
      render(<FlagDetail flag={flags[0]} />)
    })
  })
  describe('Detail Flag no external doc with buttons', () => {
    it('Renders', () => {
      render(<FlagDetail flag={flags[0]} controls={controls} />)
    })
  })
  describe('Detail Flag with external doc', () => {
    it('Renders', () => {
      render(<FlagDetail flag={flags[1]} />)
    })
  })
  describe('Detail Flag with external doc and buttons', () => {
    it('Renders', () => {
      render(<FlagDetail flag={flags[1]} controls={controls} />)
    })
  })
})
