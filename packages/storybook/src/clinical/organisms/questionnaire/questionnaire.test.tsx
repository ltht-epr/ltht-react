import Questionnaire from '@ltht-react/questionnaire'
import { DetailViewType, QuestionnaireResponse } from '@ltht-react/types'
import { render, screen } from '@testing-library/react'
import {
  BooleanFieldData,
  ComposedExampleData as NestedQuestionnaireData,
  DateFieldData,
  NoAnswerData,
} from './questionnaire.fixtures'

describe('Questionnaire', () => {
  it('should render a question', async () => {
    render(<Questionnaire questionnaire={BooleanFieldData} />)

    await screen.findByText('Do you have allergies?')
    screen.getByText('Yes')
  })

  it('should show question groups', async () => {
    render(<Questionnaire questionnaire={NestedQuestionnaireData} />)

    await screen.findByText('Do you have allergies?')
    screen.getByText('Yes')

    screen.getByText('General questions')

    screen.getByText('What is your gender?')
    screen.getByText(/Male/)
  })

  it('should render date, datetime & time', async () => {
    render(<Questionnaire questionnaire={DateFieldData} />)

    await screen.findByText('What is your date of birth?')
    screen.getByText('06-Mar-2023')

    await screen.findByText('What is your time of birth?')
    screen.getByText('16:22')

    await screen.findByText('What is your date & time of birth?')
    screen.getByText('06-Mar-2023 16:22')
  })

  describe('compact view', () => {
    it("should not show a question if it doesn't have an answer", async () => {
      const data: QuestionnaireResponse = {
        ...BooleanFieldData,
        item: [
          {
            linkId: '1',
            text: null,
            answer: [],
            item: null,
          },
        ],
      }

      render(
        <>
          <span>Render check</span>
          <Questionnaire questionnaire={data} viewType={DetailViewType.Compact} />
        </>
      )

      await screen.findByText('Render check')
      expect(screen.queryByText('Do you have allergies?')).toBeNull()
    })

    it('should not show a group header when the children do not have answers', async () => {
      render(
        <>
          <span>Render check</span>
          <Questionnaire questionnaire={NoAnswerData} viewType={DetailViewType.Compact} />
        </>
      )

      await screen.findByText('Render check')
      expect(screen.queryByText('General questions')).toBeNull()
    })
  })

  describe('expanded view', () => {
    it('should show a question without an answer', async () => {
      const data: QuestionnaireResponse = {
        ...BooleanFieldData,
        item: [
          {
            linkId: '1',
            text: null,
            answer: [],
            item: null,
          },
        ],
      }

      render(
        <>
          <span>Render check</span>
          <Questionnaire questionnaire={data} viewType={DetailViewType.Expanded} />
        </>
      )

      await screen.findByText('Render check')
      screen.getByText('Do you have allergies?')
    })

    it('should show a group header when the children do not have answers', async () => {
      render(
        <>
          <span>Render check</span>
          <Questionnaire questionnaire={NoAnswerData} viewType={DetailViewType.Expanded} />
        </>
      )

      await screen.findByText('Render check')
      screen.getByText('General questions')
    })
  })
})
