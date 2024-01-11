import { render, screen } from '@testing-library/react'
import { ConditionVerificationStatus } from '@ltht-react/types'
import DiagnosisSummary from '@ltht-react/diagnosis-summary'
import userEvent from '@testing-library/user-event'
import conditions from './diagnosis.fixtures'

describe('Diagnosis', () => {
  it('Renders', () => {
    render(<DiagnosisSummary condition={{ ...conditions[0] }} isReadOnly={false} />)

    expect(screen.getByText('Heel Pain')).toBeVisible()
  })

  it('Does not diplay redacted data', () => {
    const redactedCondition = {
      ...conditions[0],
      metadata: {
        dataSources: [
          {
            display: 'Mock',
          },
        ],
        isRedacted: true,
        requestedWhen: '',
      },
    }

    render(<DiagnosisSummary condition={redactedCondition} isReadOnly={false} />)

    expect(screen.getByText('Insufficient privileges')).toBeVisible()
  })

  it('Adds the strikethrough property to diagnoses entered in error', () => {
    const enteredInErrorCondition = {
      ...conditions[0],
      verificationStatus: ConditionVerificationStatus.EnteredInError,
    }

    render(<DiagnosisSummary condition={enteredInErrorCondition} isReadOnly={false} />)

    expect(screen.getByText('Heel Pain')).toHaveStyle('text-decoration: line-through')
  })

  it('Displays a button for extending the diagnosis if a template name is provided and readonly is false', () => {
    render(
      <DiagnosisSummary
        condition={{ ...conditions[0] }}
        extensionTemplateDisplayName="Extension Template Name"
        isReadOnly={false}
      />
    )

    expect(
      screen.getByRole('button', {
        name: /This diagnosis can be extended further using form 'Extension Template Name' by clicking here/,
      })
    ).toBeVisible()
  })

  it('Does not display a button for extending the diagnosis if a template name is provided and readonly is true', () => {
    render(
      <DiagnosisSummary
        condition={{ ...conditions[0] }}
        extensionTemplateDisplayName="Extension Template Name"
        isReadOnly
      />
    )

    expect(
      screen.queryByRole('button', {
        name: /This diagnosis can be extended further using form 'Extension Template Name' by clicking here/,
      })
    ).toBeNull()
  })

  it('Calls the click handler provided when the button for extending the diagnosis is clicked', async () => {
    const clickHandler = jest.fn()

    render(
      <DiagnosisSummary
        condition={{ ...conditions[0] }}
        extensionTemplateDisplayName="Extension Template Name"
        extensionClickHandler={clickHandler}
        isReadOnly={false}
      />
    )

    await userEvent.click(
      screen.getByRole('button', {
        name: /This diagnosis can be extended further using form 'Extension Template Name' by clicking here/,
      })
    )

    expect(clickHandler).toHaveBeenCalledTimes(1)
  })

  it.each([[false, ConditionVerificationStatus.Confirmed, 'ExtensionTemplateName']])(
    'Displays a button for extending the diagnosis',
    (isReadOnly: boolean, verificationStatus: ConditionVerificationStatus, extensionTemplateName?: string) => {
      const condition = {
        ...conditions[0],
        verificationStatus,
      }

      render(
        <DiagnosisSummary
          condition={condition}
          extensionTemplateDisplayName={extensionTemplateName}
          isReadOnly={isReadOnly}
        />
      )

      expect(
        screen.getByRole('button', {
          name: /This diagnosis can be extended further using form 'ExtensionTemplateName' by clicking here/,
        })
      ).toBeVisible()
    }
  )

  it.each([
    [false, ConditionVerificationStatus.Confirmed, undefined],
    [true, ConditionVerificationStatus.Confirmed, undefined],
    [false, ConditionVerificationStatus.EnteredInError, undefined],
    [true, ConditionVerificationStatus.EnteredInError, undefined],
    [true, ConditionVerificationStatus.Confirmed, 'ExtensionTemplateName'],
    [false, ConditionVerificationStatus.EnteredInError, 'ExtensionTemplateName'],
    [true, ConditionVerificationStatus.EnteredInError, 'ExtensionTemplateName'],
  ])(
    'Does not a button for extending the diagnosis',
    (isReadOnly: boolean, verificationStatus: ConditionVerificationStatus, extensionTemplateName?: string) => {
      const condition = {
        ...conditions[0],
        verificationStatus,
      }

      render(
        <DiagnosisSummary
          condition={condition}
          extensionTemplateDisplayName={extensionTemplateName}
          isReadOnly={isReadOnly}
        />
      )

      expect(
        screen.queryByRole('button', {
          name: /This diagnosis can be extended further using form 'ExtensionTemplateName' by clicking here/,
        })
      ).toBeNull()
    }
  )

  it('Displays a comment icon when the condition was been extended to level 2', () => {
    const enteredInErrorCondition = {
      ...conditions[0],
    }

    render(
      <DiagnosisSummary
        condition={enteredInErrorCondition}
        isReadOnly={false}
        extendedTemplateDisplayName="Extended template display name"
      />
    )

    expect(screen.getByRole('img', { hidden: true })).toHaveClass('icon__comment')
  })
})
