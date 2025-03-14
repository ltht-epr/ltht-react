import { render, screen } from '@testing-library/react'

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

    it('Should render code and name', () => {
      render(<FlagDetail flag={flags[0]} />)

      expect(screen.getByText('Code')).toBeInTheDocument()
      expect(screen.getByText('DNACPR-CODE')).toBeInTheDocument()

      expect(screen.getByText('Name')).toBeInTheDocument()
      expect(screen.getByText('DNACPR')).toBeInTheDocument()
    })

    it('Should render Author, Authored On, Amended By and Amended On fields', () => {
      render(<FlagDetail flag={flags[0]} />)

      expect(screen.getByText('Author')).toBeInTheDocument()
      expect(screen.getByText('Smith, John (Dr)')).toBeInTheDocument()

      expect(screen.getByText('Authored On')).toBeInTheDocument()
      expect(screen.getByText('01-Jan-2013 15:26')).toBeInTheDocument()

      expect(screen.getByText('Amended By')).toBeInTheDocument()
      expect(screen.getByText('Smith, David (Dr)')).toBeInTheDocument()

      expect(screen.getByText('Amended On')).toBeInTheDocument()
      expect(screen.getByText('01-Feb-2013 19:29')).toBeInTheDocument()
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
