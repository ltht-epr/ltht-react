import { render, screen } from '@testing-library/react'
import { PartialDateTimeKindCode } from '@ltht-react/types'
import conditions from '../../organisms/diagnosis/diagnosis.fixtures'
import DiagnosisDetail from '@ltht-react/diagnosis-detail'

describe('Diagnosis Detail', () => {
  it('Renders', () => {
    render(<DiagnosisDetail condition={conditions[0]} />)

    expect(screen.getByText('Heel Pain')).toBeVisible()
  })

  it('Renders all necessary data', () => {
    const redactedCondition = conditions[0]
    redactedCondition.onset = {
      dateTime: {
        value: '2016-09-01T03:55:00+00:00',
        kind: PartialDateTimeKindCode.Time,
      },
    }

    render(<DiagnosisDetail condition={redactedCondition} />)

    expect(screen.getByText('Onset Date')).toBeVisible()
    // TODO: more...
  })
})
