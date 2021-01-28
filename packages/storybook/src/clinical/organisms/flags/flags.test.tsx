import React from 'react'
import ReactDOM from 'react-dom'

import FlagSummary from '@ltht-react/flag-summary'
import flags from './flags.fixtures'

const Sut: React.FC = () => {
  return (
    <>
      {flags.map(flag => (
        <div key={flag.id}>
          <FlagSummary flag={flag} />
        </div>
      ))}
    </>
  )
}

describe('FlagSummary', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Sut />, div)
  })
})
