import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Maybe, QuestionnaireItem, QuestionnaireItemTypeCode, QuestionnaireResponseItem } from '@ltht-react/types'
import { DESKTOP_MINIMUM_MEDIA_QUERY, MOBILE_MAXIMUM_MEDIA_QUERY, TABLET_ONLY_MEDIA_QUERY } from '@ltht-react/styles'
import QuestionBlock from './question-block'

const StyledQuestionGroup = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`

const GroupHeader = styled.h3`
  margin: 0;
  margin-bottom: 0.25rem;
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

const DynamicGroupBlock = styled.div`
  background: #eaeaea;
  padding: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: '1rem';

  & div.QuestionBlock {
    margin-bottom: 1rem;

    ${DESKTOP_MINIMUM_MEDIA_QUERY} {
      width: 25%;

      &:nth-last-child(1),
      :nth-last-child(2),
      :nth-last-child(3),
      :nth-last-child(4) {
        margin-bottom: 0px !important;
      }

      &:nth-child(4n + 1) {
        text-align: left;
      }

      &:nth-child(4n + 2) {
        text-align: center;
      }

      &:nth-child(4n + 3) {
        text-align: center;
      }

      &:nth-child(4n) {
        text-align: right;
      }
    }

    ${TABLET_ONLY_MEDIA_QUERY} {
      width: 33.3%;

      &:nth-last-child(1),
      :nth-last-child(2),
      :nth-last-child(3) {
        margin-bottom: 0px !important;
      }

      &:nth-child(3n + 1) {
        text-align: left;
      }

      &:nth-child(3n + 2) {
        text-align: center;
      }

      &:nth-child(3n) {
        text-align: right;
      }
    }

    ${MOBILE_MAXIMUM_MEDIA_QUERY} {
      width: 100%;

      &:nth-last-child(1) {
        margin-bottom: 0px !important;
      }
    }
  }
`

function QuestionnaireQuestions(
  questions: Maybe<Maybe<QuestionnaireItem>[]> | undefined,
  answers: Maybe<Maybe<QuestionnaireResponseItem>[]> | undefined,
  displayDynamic: boolean
): ReactNode {
  return questions?.map((question) => {
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
          displayDynamic={displayDynamic}
        />
      ))
    }

    return (
      <QuestionBlock
        className="QuestionBlock"
        key={`${question?.text}-${question?.linkId}`}
        type={question?.type}
        question={question?.text}
        answer={answers?.find((answer) => question?.linkId === answer?.linkId)}
      />
    )
  })
}

const QuestionGroup: FC<IProps> = ({ header, questions, answers, displayDynamic = false }) => {
  if (answers?.length === 0) return null

  return (
    <StyledQuestionGroup>
      {header && <GroupHeader>{header}</GroupHeader>}
      {displayDynamic && <DynamicGroupBlock>{QuestionnaireQuestions(questions, answers, true)}</DynamicGroupBlock>}
      {!displayDynamic && <GroupBlock>{QuestionnaireQuestions(questions, answers, false)}</GroupBlock>}
    </StyledQuestionGroup>
  )
}

interface IProps {
  header?: Maybe<string>
  questions?: Maybe<Maybe<QuestionnaireItem>[]>
  answers?: Maybe<Maybe<QuestionnaireResponseItem>[]>
  displayDynamic?: boolean | undefined
}

export default QuestionGroup
