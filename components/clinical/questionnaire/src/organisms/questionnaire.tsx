import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import {
  QuestionnaireResponse,
  QuestionnaireItemTypeCode,
  Maybe,
  QuestionnaireItem,
  QuestionnaireResponseItem,
  DetailViewType,
} from '@ltht-react/types'

import { DESKTOP_MINIMUM_MEDIA_QUERY, MOBILE_MAXIMUM_MEDIA_QUERY, TABLET_ONLY_MEDIA_QUERY } from '@ltht-react/styles'
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

const DynamicContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: '1rem';

  & div.QuestionBlock,
  & div.QuestionGroup {
    margin-top: 0;
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

  & div.QuestionGroup div.QuestionBlock {
    width: 100%;
    text-align: left;
    margin-bottom: 1rem !important;

    &:last-child {
      margin-bottom: 0px !important;
    }
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
        ?.filter((answerGroup) => question.linkId === answerGroup?.linkId)
        .map((answerGroup) => answerGroup?.item)

      return groupAnswers?.map((groupAnswer, index) => (
        <QuestionGroup
          className="QuestionGroup"
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
        answer={answers?.find((answer) => question?.linkId === answer?.linkId)}
      />
    )
  })
}

const Questionnaire: FC<IProps> = ({ questionnaire, showTitle = false, viewType = DetailViewType.Expanded }) => {
  const questions = questionnaire?.questionnaire?.item
  const answers = questionnaire?.item
  const title = questionnaire?.questionnaire?.title

  if (questionnaire?.metadata.isRedacted) return <Redacted questionnaire={questionnaire} />

  return (
    <StyledQuestionnaire>
      {showTitle && <TitleInfo title={title} />}

      {viewType === DetailViewType.Compact ? (
        <DynamicContainer>{QuestionnaireQuestions(questions, answers, viewType)}</DynamicContainer>
      ) : (
        QuestionnaireQuestions(questions, answers, viewType || DetailViewType.Expanded)
      )}

      <AuthorInfo author={questionnaire?.author} authoredOn={questionnaire?.authored} />
    </StyledQuestionnaire>
  )
}

interface IProps {
  questionnaire: Maybe<QuestionnaireResponse> | undefined
  showTitle?: boolean | undefined
  viewType?: Maybe<DetailViewType>
}

export default Questionnaire
