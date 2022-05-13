import { render } from '@testing-library/react'

import HospitalStaySummary from '@ltht-react/hospital-stay-summary'
import HospitalStayDetail from '@ltht-react/hospital-stay-detail'
import stays from './hospital-stays.fixtures'

describe('Hospital Stays', () => {
  describe('Summary', () => {
    it('Renders', () => {
      render(<HospitalStaySummary hospitalStay={stays[0]} />)
    })
  })
  describe('Detail', () => {
    it('shows a title with no value if told to', async () => {
      render(<HospitalStayDetail hospitalStay={stays[0]} />)
    })
  })
})
