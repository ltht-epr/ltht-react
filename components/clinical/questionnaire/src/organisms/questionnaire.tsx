import { FC } from 'react'
import { QuestionnaireResponse, QuestionnaireItemTypeCode } from '@ltht-react/types'

import AuthorInfo from '../atoms/author-info'

import QuestionGroup from '../molecules/question-group'
import QuestionBlock from '../molecules/question-block'

const Questionnaire: FC<IProps> = ({ questionnaire }) => {
  const questions = questionnaire.questionnaire.item
  const answers = questionnaire.item

  return (
    <>
      {questions?.map((question) => {
        if (question?.type === QuestionnaireItemTypeCode.Group) {
          return (
            <QuestionGroup
              key={`${question?.text}-${question?.linkId}`}
              header={question.text}
              questions={question.item}
              answers={answers?.find((answerGroup) => question.linkId === answerGroup?.linkId)?.item}
            />
          )
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
    </>
  )
}

interface IProps {
  questionnaire: QuestionnaireResponse
}

export default Questionnaire
