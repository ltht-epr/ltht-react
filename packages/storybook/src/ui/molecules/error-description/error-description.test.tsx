import { ErrorDescription } from '@ltht-react/error'
import { render, screen } from '@testing-library/react'
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
    render(<ErrorDescription errors={[ErrorMessageOne]}></ErrorDescription>)

    expect(screen.getByText(ErrorMessageOne.text)).toBeVisible()
  })

  it('Shows header message if given multiple error messages', () => {
    render(<ErrorDescription errors={[ErrorMessageOne, ErrorMessageTwo]}></ErrorDescription>)

    expect(screen.getByText('Multiple errors found. Details')).toBeVisible()
  })

  it('Does not show multiple error message if given only one error', () => {
    render(<ErrorDescription errors={[ErrorMessageOne]}></ErrorDescription>)

    expect(screen.queryByText('Multiple errors found. Details')).toBeNull()
  })

  it('Shows a custom header message if one is given', () => {
    render(
      <ErrorDescription
        errorHeaderText="Some mock error header message"
        errors={[ErrorMessageOne, ErrorMessageTwo]}
      ></ErrorDescription>
    )

    expect(screen.getByText('Some mock error header message')).toBeVisible()
  })

  it('Defaults to expanded view if given two or three messages', () => {
    render(<ErrorDescription errors={[ErrorMessageOne, ErrorMessageTwo, ErrorMessageThree]}></ErrorDescription>)

    expect(screen.getByRole('img', { hidden: true })).toHaveClass('icon__chevron__down')

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
      ></ErrorDescription>
    )

    expect(screen.getByRole('img', { hidden: true })).toHaveClass('icon__chevron__down')

    expect(screen.getByText(ErrorMessageOne.text)).toBeVisible()
    expect(screen.getByText(ErrorMessageTwo.text)).toBeVisible()
    expect(screen.getByText(ErrorMessageThree.text)).toBeVisible()
  })
})
