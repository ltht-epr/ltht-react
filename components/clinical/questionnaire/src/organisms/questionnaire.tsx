import { FC } from 'react'
import styled from '@emotion/styled'
import { QuestionnaireResponse, QuestionnaireItemTypeCode } from '@ltht-react/types'

import AuthorInfo from '../atoms/author-info'

import QuestionGroup from '../molecules/question-group'
import QuestionBlock from '../molecules/question-block'

const StyledQuestionnaire = styled.div`
  & div:last-child {
    margin-bottom: 0;
  }
`

const Questionnaire: FC<IProps> = ({ questionnaire }) => {
  const questions = questionnaire.questionnaire.item
  const answers = questionnaire.item

  return (
    <StyledQuestionnaire>
      {questions?.map((question) => {
        if (question?.type === QuestionnaireItemTypeCode.Group) {
          const groupAnswers = answers
            ?.filter((answerGroup) => question.linkId === answerGroup?.linkId)
            .map((answerGroup) => answerGroup?.item)

          return groupAnswers?.map((groupAnswer, index) => (
            <QuestionGroup
              key={`${question?.text || 'question-group'}-${question?.linkId}-${index + 1}`}
              header={question.text}
              questions={question.item}
              answers={groupAnswer}
            />
          ))
        }

        return (
          <QuestionBlock
            key={`${question?.text}-${question?.linkId}`}
            type={question?.type}
            question={question?.text}
            answer={answers?.find((answer) => question?.linkId === answer?.linkId)}
          />
        )
      })}

      <AuthorInfo author={questionnaire.author} authoredOn={questionnaire.authored} />
    </StyledQuestionnaire>
  )
}

interface IProps {
  questionnaire: QuestionnaireResponse
}

export default Questionnaire
