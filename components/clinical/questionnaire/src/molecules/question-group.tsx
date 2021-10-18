import { FC } from 'react'
import styled from '@emotion/styled'
import { Maybe, QuestionnaireItem, QuestionnaireItemTypeCode, QuestionnaireResponseItem } from '@ltht-react/types'

import QuestionBlock from './question-block'

const StyledQuestionGroup = styled.div`
  margin-bottom: 1rem;
`

const GroupHeader = styled.h3`
  margin: 0;
  margin-bottom: 0.175rem;
  font-weight: bold;
  font-size: 13px;
  color: #677f67;
`

const GroupBlock = styled.div`
  background: #eaeaea;
  padding: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.125);

  & div:last-child {
    margin-bottom: 0;
  }
`

const QuestionGroup: FC<IProps> = ({ header, questions, answers }) => {
  if (answers?.length === 0) return null

  return (
    <StyledQuestionGroup>
      {header && <GroupHeader>{header}</GroupHeader>}
      <GroupBlock>
        {questions?.map((question) => {
          if (question?.type === QuestionnaireItemTypeCode.Group) {
            const groupAnswers = answers
              ?.filter((answerGroup) => question?.linkId === answerGroup?.linkId)
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
      </GroupBlock>
    </StyledQuestionGroup>
  )
}

interface IProps {
  header?: Maybe<string>
  questions?: Maybe<Maybe<QuestionnaireItem>[]>
  answers?: Maybe<Maybe<QuestionnaireResponseItem>[]>
}

export default QuestionGroup
