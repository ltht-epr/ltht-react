import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import {
  QuestionnaireResponse,
  QuestionnaireItemTypeCode,
  Maybe,
  QuestionnaireItem,
  QuestionnaireResponseItem,
} from '@ltht-react/types'

import { isDesktopView, isTabletView } from '@ltht-react/utils'
import { useWindowSize } from '@ltht-react/hooks'
import AuthorInfo from '../atoms/author-info'

import QuestionGroup from '../molecules/question-group'
import QuestionBlock from '../molecules/question-block'
import Redacted from '../molecules/redacted'
import TitleInfo from '../atoms/title-info'

const StyledQuestionnaire = styled.div`
  & div:last-child {
    margin-bottom: 0;
  }
`

const DynamicContainer = styled.div<IStyledViewport>`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: '1rem';

  & div.QuestionBlock {
    width: ${({ isDesktop, isTablet }) => columns(isDesktop, isTablet)};
    margin-top: 0;
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

function columns(isDesktop: boolean, isTablet: boolean) {
  if (isDesktop) {
    return '25%'
  }

  if (isTablet) {
    return '33.3%'
  }

  return '100%'
}

function QuestionnaireQuestions(
  questions: Maybe<Maybe<QuestionnaireItem>[]> | undefined,
  answers: Maybe<Maybe<QuestionnaireResponseItem>[]> | undefined,
  displayDynamic: boolean
): ReactNode {
  return questions?.map((question) => {
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

const Questionnaire: FC<IProps> = ({ questionnaire, showTitle = false, displayDynamic = false }) => {
  const { width } = useWindowSize()
  const questions = questionnaire?.questionnaire.item
  const answers = questionnaire?.item
  const title = questionnaire?.questionnaire?.title

  if (questionnaire?.metadata.isRedacted) return <Redacted questionnaire={questionnaire} />

  return (
    <StyledQuestionnaire>
      {showTitle && <TitleInfo title={title} />}

      {displayDynamic && (
        <DynamicContainer isTablet={isTabletView(width)} isDesktop={isDesktopView(width)}>
          {QuestionnaireQuestions(questions, answers, true)}
        </DynamicContainer>
      )}

      {!displayDynamic && QuestionnaireQuestions(questions, answers, false)}

      <AuthorInfo author={questionnaire?.author} authoredOn={questionnaire?.authored} />
    </StyledQuestionnaire>
  )
}

interface IStyledViewport {
  isDesktop: boolean
  isTablet: boolean
}

interface IProps {
  questionnaire: Maybe<QuestionnaireResponse> | undefined
  showTitle?: boolean | undefined
  displayDynamic?: boolean | undefined
}

export default Questionnaire
