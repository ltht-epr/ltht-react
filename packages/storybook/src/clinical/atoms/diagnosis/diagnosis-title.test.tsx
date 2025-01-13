import { render, screen } from '@testing-library/react'
import DiagnosisTitle from '@ltht-react/diagnosis-summary/src/atoms/diagnosis-title'
import {
  CodeableConcept,
  Coding,
  Condition,
  ConditionClinicalStatus,
  ConditionVerificationStatus,
} from '@ltht-react/types'
import SNIPPET_HOVER_TEXT from '@ltht-react/diagnosis-detail/lib/constants'

describe('Diagnosis Title', () => {
  it('Adds the strikethrough property to code summaries if entered in error', () => {
    const condition = getCondition({ tag: [{ system: SNIPPET_HOVER_TEXT, display: 'Snippet Text' }] })

    render(<DiagnosisTitle condition={condition} enteredInError />)

    expect(screen.getByText('Snippet Text')).toHaveStyle('text-decoration: line-through')
  })

  describe('Snippet text when metadata tag present', () => {
    it('Displays when no condition code text or display values are present', () => {
      const condition = getCondition({ tag: [{ system: SNIPPET_HOVER_TEXT, display: 'Snippet Text' }] })

      render(<DiagnosisTitle condition={condition} enteredInError={false} />)

      expect(screen.getByText('Snippet Text')).toBeVisible()
    })

    it('Displays when a condition code display value is present', () => {
      const condition = getCondition({
        tag: [{ system: SNIPPET_HOVER_TEXT, display: 'Snippet Text' }],
        code: { coding: [{ display: 'Code Display' }] },
      })

      render(<DiagnosisTitle condition={condition} enteredInError={false} />)

      expect(screen.getByText('Snippet Text')).toBeVisible()
    })

    it('Displays when a condition code display and text value are present', () => {
      const condition = getCondition({
        tag: [{ system: SNIPPET_HOVER_TEXT, display: 'Snippet Text' }],
        code: { coding: [{ display: 'Code Display' }], text: 'Code Text' },
      })

      render(<DiagnosisTitle condition={condition} enteredInError={false} />)

      expect(screen.getByText('Snippet Text')).toBeVisible()
    })
  })

  describe('Snippet text when metadata tag missing', () => {
    it('Displays condition code text when a condition display value is present', () => {
      const condition = getCondition({
        code: { coding: [{ display: 'Code Display' }], text: 'Code Text' },
      })

      render(<DiagnosisTitle condition={condition} enteredInError={false} />)

      expect(screen.getByText('Code Text')).toBeVisible()
    })

    it('Displays condition code text when no condition display value is present', () => {
      const condition = getCondition({
        code: { text: 'Code Text' },
      })

      render(<DiagnosisTitle condition={condition} enteredInError={false} />)

      expect(screen.getByText('Code Text')).toBeVisible()
    })

    it('Displays first condition code display value if condition code text is not present', () => {
      const condition = getCondition({
        code: { coding: [{ display: 'Code Display' }] },
      })

      render(<DiagnosisTitle condition={condition} enteredInError={false} />)

      expect(screen.getByText('Code Display')).toBeVisible()
    })

    it('Displays unknown if both condition code text and display values are missing', () => {
      const condition = getCondition()

      render(<DiagnosisTitle condition={condition} enteredInError={false} />)

      expect(screen.getByText('Unknown Condition')).toBeVisible()
    })

    it.each([
      [ConditionClinicalStatus.Active, ConditionVerificationStatus.Provisional, 'Snippet Text, Active, Provisional'],
      [ConditionClinicalStatus.Inactive, ConditionVerificationStatus.Confirmed, 'Snippet Text, Inactive, Confirmed'],
      [ConditionClinicalStatus.Active, undefined, 'Snippet Text, Active'],
      [undefined, ConditionVerificationStatus.Provisional, 'Snippet Text, Provisional'],
      [undefined, undefined, 'Snippet Text'],
    ])('Statuses are appended when present %s, %s', (clinicalStatus, verificationStatus, expected) => {
      const condition = getCondition({
        code: { coding: [{ display: 'Snippet Text' }] },
        clinicalStatus,
        verificationStatus,
      })

      render(<DiagnosisTitle condition={condition} enteredInError={false} />)

      expect(screen.getByText(expected)).toBeVisible()
    })
  })
})

const getCondition = ({
  clinicalStatus,
  verificationStatus,
  tag = [],
  code,
}: {
  snippetText?: string
  clinicalStatus?: ConditionClinicalStatus
  verificationStatus?: ConditionVerificationStatus
  tag?: Coding[]
  code?: CodeableConcept
} = {}): Condition => ({
  id: 'test-id',
  metadata: {
    dataSources: [],
    isRedacted: false,
    tag,
    requestedWhen: '',
  },
  verificationStatus,
  clinicalStatus,
  code,
})
