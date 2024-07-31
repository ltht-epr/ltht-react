import { render, screen } from '@testing-library/react'
import { ConditionVerificationStatus } from '@ltht-react/types'
import DiagnosisSummary from '@ltht-react/diagnosis-summary'
import userEvent from '@testing-library/user-event'
import { conditions } from './diagnosis.fixtures'

describe('Diagnosis', () => {
  it('Renders', () => {
    render(<DiagnosisSummary condition={{ ...conditions[0] }} launchPermissions={['View']} />)

    expect(screen.getByText('Heel Pain, Active, Confirmed')).toBeVisible()
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

    render(<DiagnosisSummary condition={redactedCondition} launchPermissions={['View']} />)

    expect(screen.getByText('Insufficient privileges')).toBeVisible()
  })

  it('Adds the strikethrough property to diagnoses entered in error', () => {
    const enteredInErrorCondition = {
      ...conditions[0],
      verificationStatus: ConditionVerificationStatus.EnteredInError,
    }

    render(<DiagnosisSummary condition={enteredInErrorCondition} launchPermissions={['View']} />)

    expect(screen.getByText('Heel Pain, Active, Entered In Error')).toHaveStyle('text-decoration: line-through')
  })

  it('Displays a button for extending the diagnosis if a template name is provided and readonly is false and can edit extended', () => {
    render(
      <DiagnosisSummary
        condition={{ ...conditions[0] }}
        extensionTemplateDisplayName="Extension Template Name"
        launchPermissions={['View', 'EditClone']}
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
        launchPermissions={undefined}
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
        launchPermissions={['View', 'EditClone']}
      />
    )

    await userEvent.click(
      screen.getByRole('button', {
        name: /This diagnosis can be extended further using form 'Extension Template Name' by clicking here/,
      })
    )

    expect(clickHandler).toHaveBeenCalledTimes(1)
  })

  it.each([[['View', 'EditClone'], ConditionVerificationStatus.Confirmed, 'ExtensionTemplateName']])(
    'Displays a button for extending the diagnosis',
    (launchPermissions: string[], verificationStatus: ConditionVerificationStatus, extensionTemplateName?: string) => {
      const condition = {
        ...conditions[0],
        verificationStatus,
      }

      render(
        <DiagnosisSummary
          condition={condition}
          extensionTemplateDisplayName={extensionTemplateName}
          launchPermissions={launchPermissions}
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
    [ConditionVerificationStatus.Confirmed, undefined, undefined],
    [ConditionVerificationStatus.Confirmed, ['View'], undefined],
    [ConditionVerificationStatus.EnteredInError, undefined, undefined],
    [ConditionVerificationStatus.EnteredInError, ['View'], undefined],
    [ConditionVerificationStatus.Confirmed, ['View'], 'ExtensionTemplateName'],
    [ConditionVerificationStatus.EnteredInError, undefined, 'ExtensionTemplateName'],
    [ConditionVerificationStatus.EnteredInError, ['View'], 'ExtensionTemplateName'],
  ])(
    'Does not a button for extending the diagnosis',
    (verificationStatus: ConditionVerificationStatus, launchPermissions?: string[], extensionTemplateName?: string) => {
      const condition = {
        ...conditions[0],
        verificationStatus,
      }

      render(
        <DiagnosisSummary
          condition={condition}
          extensionTemplateDisplayName={extensionTemplateName}
          launchPermissions={launchPermissions}
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
        extendedTemplateDisplayName="Extended template display name"
      />
    )

    expect(screen.getByRole('img', { hidden: true })).toHaveClass('icon__comment')
  })
})
