import { FC } from 'react'
import styled from '@emotion/styled'
import {
  QuestionnaireResponse,
  QuestionnaireItemTypeCode,
  Maybe,
  QuestionnaireItem,
  QuestionnaireResponseItem,
  DetailViewType,
} from '@ltht-react/types'

import AuthorInfo from '../atoms/author-info'

import QuestionGroup from '../molecules/question-group'
import QuestionBlock from '../molecules/question-block'
import Redacted from '../molecules/redacted'
import TitleInfo from '../atoms/title-info'

const StyledQuestionnaire = styled.div``

const QuestionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;
  margin-bottom: 1rem;

  > div.QuestionBlock,
  > div.QuestionGroup {
  }

  > div.QuestionGroup {
    flex-basis: 100%;
    border: none;
  }

  dl > dt {
    font-weight: bold;
  }
`

const QuestionnaireQuestions: FC<IQuestionnaireQuestionsProps> = ({ questions, answers, viewType }) => (
  <>
    {questions?.map((question) => {
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
          responseItem={answers?.find((answer) => question?.linkId === answer?.linkId)}
          showIfEmpty={viewType === DetailViewType.Expanded}
        />
      )
    })}
  </>
)

const Questionnaire: FC<IProps> = ({ questionnaire, showTitle = false, viewType = DetailViewType.Compact }) => {
  const questions = questionnaire?.questionnaire?.item
  const answers = questionnaire?.item
  const title = questionnaire?.questionnaire?.title

  if (questionnaire?.metadata.isRedacted) return <Redacted questionnaire={questionnaire} />

  return (
    <StyledQuestionnaire>
      {showTitle && <TitleInfo title={title} />}
      <QuestionContainer>
        <QuestionnaireQuestions questions={questions} answers={answers} viewType={viewType} />
      </QuestionContainer>
      <AuthorInfo author={questionnaire?.author} authoredOn={questionnaire?.authored} />
    </StyledQuestionnaire>
  )
}

interface IProps {
  questionnaire: Maybe<QuestionnaireResponse> | undefined
  showTitle?: boolean | undefined
  viewType?: Maybe<DetailViewType>
}

interface IQuestionnaireQuestionsProps {
  questions: Maybe<Maybe<QuestionnaireItem>[]> | undefined
  answers: Maybe<Maybe<QuestionnaireResponseItem>[]> | undefined
  viewType?: Maybe<DetailViewType>
}

export default Questionnaire
