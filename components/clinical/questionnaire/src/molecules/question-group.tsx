import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import {
  DetailViewType,
  Maybe,
  QuestionnaireItem,
  QuestionnaireItemTypeCode,
  QuestionnaireResponseItem,
} from '@ltht-react/types'
// import { DESKTOP_MINIMUM_MEDIA_QUERY, MOBILE_MAXIMUM_MEDIA_QUERY, TABLET_ONLY_MEDIA_QUERY } from '@ltht-react/styles'
import QuestionBlock from './question-block'

const StyledQuestionGroup = styled.div`
  margin-bottom: 1rem;
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
`

function QuestionnaireQuestions(
  questions: Maybe<Maybe<QuestionnaireItem>[]> | undefined,
  answers: Maybe<Maybe<QuestionnaireResponseItem>[]> | undefined,
  viewType: DetailViewType
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
  })
}

const QuestionGroup: FC<IProps> = ({ header, questions, answers, viewType = DetailViewType.Expanded, className }) => {
  if (answers?.length === 0) return null

  return (
    <StyledQuestionGroup className={className}>
      {header && <GroupHeader>{header}</GroupHeader>}
      {viewType === DetailViewType.Compact && (
        <DynamicGroupBlock>{QuestionnaireQuestions(questions, answers, viewType)}</DynamicGroupBlock>
      )}
      {viewType === DetailViewType.Expanded && (
        <GroupBlock>{QuestionnaireQuestions(questions, answers, viewType)}</GroupBlock>
      )}
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

export default QuestionGroup
