import { render, screen } from '@testing-library/react'

import HospitalStaySummary, { AdmissionSummary } from '@ltht-react/hospital-stay-summary'
import HospitalStayDetail from '@ltht-react/hospital-stay-detail'
import stays, { admissions } from './hospital-stays.fixtures'

describe('Hospital Stays', () => {
  describe('Summary', () => {
    it('Renders', () => {
      render(<HospitalStaySummary hospitalStay={stays[0]} />)
    })
  })

  describe('Admission Summary', () => {
    it('Renders', () => {
      render(<AdmissionSummary admission={admissions[0]} />)
    })

    it('Renders Length Of Stay', () => {
      render(<AdmissionSummary admission={admissions[0]} />)
      expect(screen.getByText('Length of Stay: about 6 hours')).toBeVisible()
    })
  })

  describe('Detail', () => {
    it('shows a title with no value if told to', async () => {
      render(<HospitalStayDetail hospitalStay={stays[0]} />)
    })
  })
})
