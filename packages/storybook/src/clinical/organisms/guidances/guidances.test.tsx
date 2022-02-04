import { render, screen } from '@testing-library/react'

import GuidanceSummary from '@ltht-react/guidance-summary'
import guidances from './guidances.fixture'

describe('Guidances', () => {
  it('Renders', () => {
    render(<GuidanceSummary guidance={guidances[0]} />)
    expect(screen.getByText('Risk - Communication')).toBeInTheDocument()

    expect(
      screen.getByText(
        'As the information entered indicates that the patient has cognition and mental capacity issues, please consider the need for:'
      )
    ).toBeInTheDocument()

    expect(screen.getByText('Advice from MCA / MHA team')).toBeInTheDocument()
    expect(screen.getByText('Advice from Psychiatric Liaison Team (if appropriate)')).toBeInTheDocument()
    expect(screen.getByText('Assessment and Care of Psychological Health Care Plan')).toBeInTheDocument()
    expect(screen.getByText('Enhanced care')).toBeInTheDocument()
    expect(screen.getByText('Further assessment and / or referral to Mental Health team')).toBeInTheDocument()
    expect(screen.getByText('Hospital passport')).toBeInTheDocument()
    expect(screen.getByText('‘Know Who I Am’ booklet (Forget Me Not)')).toBeInTheDocument()
    expect(screen.getByText('Restrictive Intervention Care Plan')).toBeInTheDocument()
    expect(screen.getByText('Self-Harm or Harm to Others Care Plan')).toBeInTheDocument()
    expect(screen.getByText("Utilising the 'Use of Restraint' policy and Good Practice Guidance")).toBeInTheDocument()
  })
})

describe('Guidances redacted', () => {
  it('Renders', () => {
    render(<GuidanceSummary guidance={guidances[1]} />)
    expect(screen.getByText('Insufficient privileges')).toBeInTheDocument()
  })
})
