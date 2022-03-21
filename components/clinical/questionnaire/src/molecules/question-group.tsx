import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Maybe, QuestionnaireItem, QuestionnaireItemTypeCode, QuestionnaireResponseItem } from '@ltht-react/types'

import { isDesktopView, isTabletView } from '@ltht-react/utils'
import { useWindowSize } from '@ltht-react/hooks'
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

const DynamicGroupBlock = styled.div<IStyledViewport>`
  background: #eaeaea;
  padding: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: '1rem';

  & div.QuestionBlock {
    width: ${({ isDesktop, isTablet }) => columns(isDesktop, isTablet)};
    margin-bottom: 1rem;

    &:nth-child(4n + 1) {
      text-align: ${({ isDesktop }) => (isDesktop ? 'start' : undefined)};
    }

    &:nth-child(4n + 2) {
      text-align: ${({ isDesktop }) => (isDesktop ? 'center' : undefined)};
    }

    &:nth-child(4n + 3) {
      text-align: ${({ isDesktop }) => (isDesktop ? 'center' : undefined)};
    }

    &:nth-child(4n) {
      text-align: ${({ isDesktop }) => (isDesktop ? 'end' : undefined)};
    }

    &:nth-child(3n + 1) {
      text-align: ${({ isTablet }) => (isTablet ? 'start' : undefined)};
    }

    &:nth-child(3n + 2) {
      text-align: ${({ isTablet }) => (isTablet ? 'center' : undefined)};
    }

    &:nth-child(3n) {
      text-align: ${({ isTablet }) => (isTablet ? 'end' : undefined)};
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

function columns(isDesktop: boolean, isTablet: boolean) {
  if (isDesktop) {
    return '25%'
  }

  if (isTablet) {
    return '33.3%'
  }

  return '100%'
}

const QuestionGroup: FC<IProps> = ({ header, questions, answers, displayDynamic = false }) => {
  const { width } = useWindowSize()
  if (answers?.length === 0) return null

  return (
    <StyledQuestionGroup>
      {header && <GroupHeader>{header}</GroupHeader>}
      {displayDynamic && (
        <DynamicGroupBlock isTablet={isTabletView(width)} isDesktop={isDesktopView(width)}>
          {QuestionnaireQuestions(questions, answers, true)}
        </DynamicGroupBlock>
      )}
      {!displayDynamic && <GroupBlock>{QuestionnaireQuestions(questions, answers, false)}</GroupBlock>}
    </StyledQuestionGroup>
  )
}

interface IStyledViewport {
  isDesktop: boolean
  isTablet: boolean
}

interface IProps {
  header?: Maybe<string>
  questions?: Maybe<Maybe<QuestionnaireItem>[]>
  answers?: Maybe<Maybe<QuestionnaireResponseItem>[]>
  displayDynamic?: boolean | undefined
}

export default QuestionGroup
