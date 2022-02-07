import { render, screen } from '@testing-library/react'

import Questionnaire from '@ltht-react/questionnaire'

import {
  BooleanFieldData,
  DisplayFieldData,
  NoAnswerData,
  TextFieldData,
  GroupTypeData,
  DateFieldData,
  RichTextFieldData,
  AuthorInfoData,
  RepeatingGroupsExampleData,
  NestedGroupWithDisplayExampleData,
  ComposedExampleData,
  RedactedExampleData,
} from './questionnaire.fixtures'

describe('Text Field', () => {
  it('Renders', () => {
    render(<Questionnaire questionnaire={TextFieldData} />)
    expect(screen.getByText('What is your gender?')).toBeInTheDocument()
    expect(screen.getByText('Male')).toBeInTheDocument()
  })
})

describe('Author Info', () => {
  it('Renders', () => {
    render(<Questionnaire questionnaire={AuthorInfoData} />)
    expect(screen.getByText('Authored By: John Smith')).toBeInTheDocument()
  })
})

describe('Rich Text Field', () => {
  it('Renders', () => {
    render(<Questionnaire questionnaire={RichTextFieldData} />)
    expect(screen.getByText('Clinical Summary')).toBeInTheDocument()
    expect(screen.getByText('Bold text…')).toBeInTheDocument()
    expect(screen.getByText('Italic text…')).toBeInTheDocument()
    expect(screen.getByText('Underline text…')).toBeInTheDocument()
  })
})

describe('Date Field', () => {
  it('Renders', () => {
    render(<Questionnaire questionnaire={DateFieldData} />)
    expect(screen.getByText('What is your date of birth?')).toBeInTheDocument()
    expect(screen.getByText('12-Jan-1971')).toBeInTheDocument()
  })
})

describe('Boolean Field', () => {
  it('Renders', () => {
    render(<Questionnaire questionnaire={BooleanFieldData} />)
    expect(screen.getByText('Do you have allergies?')).toBeInTheDocument()
    expect(screen.getByText('Yes')).toBeInTheDocument()
  })
})

describe('Statement', () => {
  it('Renders', () => {
    render(<Questionnaire questionnaire={DisplayFieldData} />)
    expect(screen.getByText('This is some display text.')).toBeInTheDocument()
  })
})

describe('Grouped Questions', () => {
  it('Renders', () => {
    render(<Questionnaire questionnaire={GroupTypeData} />)
    expect(screen.getByText('General questions')).toBeInTheDocument()

    expect(screen.getByText('What is your gender?')).toBeInTheDocument()
    expect(screen.getByText('Male')).toBeInTheDocument()

    expect(screen.getByText('What is your date of birth?')).toBeInTheDocument()
    expect(screen.getByText('12-Jan-1971')).toBeInTheDocument()
  })
})

describe('No answer', () => {
  it('Renders', () => {
    render(<Questionnaire questionnaire={NoAnswerData} />)
    expect(screen.getByText('Do you have allergies?')).toBeInTheDocument()
    expect(screen.getByText('-')).toBeInTheDocument()
  })
})

describe('Repeating Groups', () => {
  it('Renders', () => {
    render(<Questionnaire questionnaire={RepeatingGroupsExampleData} />)
    expect(
      screen.getByText(
        'Observations: The patient has been weaned off oxygen and saturations are between 90 and 100 on air'
      )
    ).toBeInTheDocument()

    expect(screen.getByText('Pain Management: Pain under control')).toBeInTheDocument()

    expect(screen.getByText('No')).toBeInTheDocument()

    expect(screen.getByText('Blood Results')).toBeInTheDocument()

    expect(screen.getByText('Authored By: John Smith')).toBeInTheDocument()
  })
})

describe('Nested Groups With Display', () => {
  it('Renders', () => {
    render(<Questionnaire questionnaire={NestedGroupWithDisplayExampleData} />)
    expect(screen.getByText('Trust Action 1')).toBeInTheDocument()

    expect(screen.getByText('No')).toBeInTheDocument()

    expect(screen.getByText('Trust Action 2')).toBeInTheDocument()

    expect(screen.getByText('Yes')).toBeInTheDocument()

    expect(screen.getByText('GP Actions')).toBeInTheDocument()
    expect(screen.getByText('No actions for the GP post-discharge')).toBeInTheDocument()

    expect(screen.getByText('Community Pharmacy Action 1')).toBeInTheDocument()

    expect(screen.getByText('Requested By?')).toBeInTheDocument()
    expect(screen.getByText('Phil')).toBeInTheDocument()

    expect(screen.getByText('CCG Actions')).toBeInTheDocument()
    expect(screen.getByText('No actions for the CCG post-discharge')).toBeInTheDocument()
  })
})

describe('Composed Example', () => {
  it('Renders', () => {
    render(<Questionnaire questionnaire={ComposedExampleData} />)
    expect(screen.getByText('Do you have allergies?')).toBeInTheDocument()
    expect(screen.getByText('Yes')).toBeInTheDocument()

    expect(screen.getByText('General questions')).toBeInTheDocument()

    expect(screen.getByText('What is your gender?')).toBeInTheDocument()
    expect(screen.getByText('Male')).toBeInTheDocument()

    expect(screen.getByText('What is your date of birth?')).toBeInTheDocument()
    expect(screen.getByText('-')).toBeInTheDocument()

    expect(screen.getByText('Clinical Summary')).toBeInTheDocument()
    expect(screen.getByText('Bold text…')).toBeInTheDocument()
    expect(screen.getByText('Italic text…')).toBeInTheDocument()
    expect(screen.getByText('Underline text…')).toBeInTheDocument()

    expect(screen.getByText('Authored By: John Smith')).toBeInTheDocument()
  })
})

describe('Redacted Example', () => {
  it('Renders', () => {
    render(<Questionnaire questionnaire={RedactedExampleData} />)
    expect(screen.getByText('Insufficient privileges')).toBeInTheDocument()

    expect(screen.getByText('Authored By: John Smith')).toBeInTheDocument()
  })
})
