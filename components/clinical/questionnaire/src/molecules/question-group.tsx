import { FC } from 'react'
import styled from '@emotion/styled'
import {
  DetailViewType,
  Maybe,
  QuestionnaireItem,
  QuestionnaireItemTypeCode,
  QuestionnaireResponseItem,
} from '@ltht-react/types'
import QuestionBlock from './question-block'

const StyledQuestionGroup = styled.div`
  border: solid 2px #ccc;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
`

const GroupHeader = styled.h3`
  margin: 0;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #677f67;
`

const StyledGroupBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const QuestionnaireQuestions: FC<IQuestionnaireQuestionsProps> = ({
  questions,
  answers,
  viewType = DetailViewType.Compact,
}) => (
  <>
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
            viewType={viewType}
          />
        ))
      }

      return (
        <QuestionBlock
          className="QuestionBlock"
          key={`${question?.text}-${question?.linkId}`}
          type={question?.type}
          question={question?.text}
          responseItem={answers?.find((answer) => question?.linkId === answer?.linkId)}
          showIfEmpty={viewType === DetailViewType.Expanded}
        />
      )
    })}
  </>
)

const QuestionGroup: FC<IProps> = ({ header, questions, answers, viewType = DetailViewType.Compact, className }) => {
  if (answers?.length === 0) return <></>

  // if the answers exist but do not contain values, return a fragment
  if (
    viewType === DetailViewType.Compact &&
    answers?.some((x) => {
      const hasText = !!x?.text
      const hasAnswers = !!x?.answer?.length
      const hasItems = !!x?.item?.length

      return hasText || hasAnswers || hasItems
    }) === false
  ) {
    return <></>
  }
  return (
    <StyledQuestionGroup className={className}>
      {header && <GroupHeader>{header}</GroupHeader>}
      <StyledGroupBlock>
        <QuestionnaireQuestions questions={questions} answers={answers} viewType={viewType ?? DetailViewType.Compact} />
      </StyledGroupBlock>
    </StyledQuestionGroup>
  )
}

interface IProps {
  header?: Maybe<string>
  questions?: Maybe<Maybe<QuestionnaireItem>[]>
  answers?: Maybe<Maybe<QuestionnaireResponseItem>[]>
  viewType?: Maybe<DetailViewType>
  className?: string
}

interface IQuestionnaireQuestionsProps {
  questions: Maybe<Maybe<QuestionnaireItem>[]> | undefined
  answers: Maybe<Maybe<QuestionnaireResponseItem>[]> | undefined
  viewType?: Maybe<DetailViewType>
}

export default QuestionGroup
