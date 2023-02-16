import { ErrorDescription } from '@ltht-react/error'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  ErrorMessageOne,
  ErrorMessageThree,
  ErrorMessageTwo,
  WarningMessageOne,
  WarningMessageThree,
  WarningMessageTwo,
} from './error-description.fixtures'

describe('Error Description', () => {
  it('Renders', () => {
    render(<ErrorDescription errors={[ErrorMessageOne]} />)

    expect(screen.getByText(ErrorMessageOne.text)).toBeVisible()
  })

  it('Shows header message if given multiple error messages', () => {
    render(<ErrorDescription errors={[ErrorMessageOne, ErrorMessageTwo]} />)

    expect(screen.getByText('Multiple errors found. Details')).toBeVisible()
  })

  it('Does not show multiple error message if given only one error', () => {
    render(<ErrorDescription errors={[ErrorMessageOne]} />)

    expect(screen.queryByText('Multiple errors found. Details')).toBeNull()
  })

  it('Shows a custom header message if one is given', () => {
    render(
      <ErrorDescription errorHeaderText="Some mock error header message" errors={[ErrorMessageOne, ErrorMessageTwo]} />
    )

    expect(screen.getByText('Some mock error header message')).toBeVisible()
  })

  it('Defaults to expanded view if given two or three messages', () => {
    render(<ErrorDescription errors={[ErrorMessageOne, ErrorMessageTwo, ErrorMessageThree]} />)

    const chevronIcon = screen
      .getAllByRole('img', { hidden: true })
      .find((icon) => icon.classList.contains('icon__chevron'))

    expect(chevronIcon).toHaveClass('fa-chevron-down')

    expect(screen.getByText(ErrorMessageOne.text)).toBeVisible()
    expect(screen.getByText(ErrorMessageTwo.text)).toBeVisible()
    expect(screen.getByText(ErrorMessageThree.text)).toBeVisible()
  })

  it('Defaults to collapsed view if given over three messages', () => {
    render(
      <ErrorDescription
        errors={[
          ErrorMessageOne,
          ErrorMessageTwo,
          ErrorMessageThree,
          WarningMessageOne,
          WarningMessageTwo,
          WarningMessageThree,
        ]}
      />
    )

    expect(screen.queryByText(ErrorMessageOne.text)).toBeNull()
    expect(screen.queryByText(ErrorMessageTwo.text)).toBeNull()
    expect(screen.queryByText(ErrorMessageThree.text)).toBeNull()
    expect(screen.queryByText(WarningMessageOne.text)).toBeNull()
    expect(screen.queryByText(WarningMessageTwo.text)).toBeNull()
    expect(screen.queryByText(WarningMessageThree.text)).toBeNull()
  })

  it('Shows errors when dropdown is clicked', () => {
    render(
      <ErrorDescription
        errors={[
          ErrorMessageOne,
          ErrorMessageTwo,
          ErrorMessageThree,
          WarningMessageOne,
          WarningMessageTwo,
          WarningMessageThree,
        ]}
      />
    )

    const chevronIcon = screen
      .getAllByRole('img', { hidden: true })
      .find((icon) => icon.classList.contains('icon__chevron'))

    if (chevronIcon) {
      userEvent.click(chevronIcon)
    }

    expect(screen.getByText(ErrorMessageOne.text)).toBeVisible()
    expect(screen.getByText(ErrorMessageTwo.text)).toBeVisible()
    expect(screen.getByText(ErrorMessageThree.text)).toBeVisible()
    expect(screen.getByText(WarningMessageOne.text)).toBeVisible()
    expect(screen.getByText(WarningMessageTwo.text)).toBeVisible()
    expect(screen.getByText(WarningMessageThree.text)).toBeVisible()
  })

  it('Hides errors again when dropdown is clicked', () => {
    render(
      <ErrorDescription
        errors={[
          ErrorMessageOne,
          ErrorMessageTwo,
          ErrorMessageThree,
          WarningMessageOne,
          WarningMessageTwo,
          WarningMessageThree,
        ]}
      />
    )

    const chevronIcon = screen
      .getAllByRole('img', { hidden: true })
      .find((icon) => icon.classList.contains('icon__chevron'))

    if (chevronIcon) {
      userEvent.click(chevronIcon)
    }

    expect(screen.getByText(ErrorMessageOne.text)).toBeVisible()
    expect(screen.getByText(ErrorMessageTwo.text)).toBeVisible()
    expect(screen.getByText(ErrorMessageThree.text)).toBeVisible()
    expect(screen.getByText(WarningMessageOne.text)).toBeVisible()
    expect(screen.getByText(WarningMessageTwo.text)).toBeVisible()
    expect(screen.getByText(WarningMessageThree.text)).toBeVisible()

    if (chevronIcon) {
      userEvent.click(chevronIcon)
    }

    expect(screen.queryByText(ErrorMessageOne.text)).toBeNull()
    expect(screen.queryByText(ErrorMessageTwo.text)).toBeNull()
    expect(screen.queryByText(ErrorMessageThree.text)).toBeNull()
    expect(screen.queryByText(WarningMessageOne.text)).toBeNull()
    expect(screen.queryByText(WarningMessageTwo.text)).toBeNull()
    expect(screen.queryByText(WarningMessageThree.text)).toBeNull()
  })
})
