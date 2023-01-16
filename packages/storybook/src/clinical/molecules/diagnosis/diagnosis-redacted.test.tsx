import { render, screen } from '@testing-library/react'
import DiagnosisRedacted from '@ltht-react/diagnosis-summary/src/molecules/diagnosis-redacted'
import { PartialDateTimeKindCode } from '@ltht-react/types'
import conditions from '../../organisms/diagnosis/diagnosis.fixtures'

const redactedCondition = conditions[0]

describe('Diagnosis Title', () => {
  it('Renders the redacted description', () => {
    render(<DiagnosisRedacted condition={redactedCondition} />)

    expect(screen.getByText('Insufficient privileges')).toBeVisible()
  })

  it('Renders the time if one is present', () => {
    const redactedCondition = conditions[0]
    redactedCondition.onset = {
      dateTime: {
        value: '2016-09-01T03:55:00+00:00',
        kind: PartialDateTimeKindCode.Time,
      },
    }

    render(<DiagnosisRedacted condition={redactedCondition} />)

    expect(screen.getByText('Insufficient privileges')).toBeVisible()
    expect(screen.getByText('04:55')).toBeVisible()
  })
})
