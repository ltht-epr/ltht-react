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

const ExpandedGroupBlock = styled.div`
  background: #eaeaea;
  border: 1px solid rgba(0, 0, 0, 0.125);
  flex: 2;
`

const CompactGroupBlock = styled.div`
  background: #eaeaea;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  &:last-child {
    border-bottom: none;
  }
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
        <CompactGroupBlock>{QuestionnaireQuestions(questions, answers, viewType)}</CompactGroupBlock>
      )}
      {viewType === DetailViewType.Expanded && (
        <ExpandedGroupBlock>{QuestionnaireQuestions(questions, answers, viewType)}</ExpandedGroupBlock>
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
