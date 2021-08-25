import { FC } from 'react'
import parser from 'bbcode-to-react'
import ReactHtmlParser from 'react-html-parser'
import styled from '@emotion/styled'
import { Maybe, QuestionnaireItemTypeCode, QuestionnaireResponseItem } from '@ltht-react/types'
import { InfoCircleIcon } from '@ltht-react/icon'
import { TEXT_COLOURS } from '@ltht-react/styles'
import { partialDateTimeText } from '@ltht-react/utils'

const StyledInfoIcon = styled.div`
  padding-right: 0.25rem;
`

const StyledQuestionBlock = styled.div`
  margin-bottom: 1rem;
`

const DisplayBlock = styled.div`
  display: flex;
  align-items: center;
  background-color: #cbdbee;
  color: #0053c3;
  padding: 0.5rem;
`

const Question = styled.p`
  margin: 0;
  margin-bottom: 0.175rem;
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
`

const Answer = styled.p`
  margin: 0;
`

const QuestionBlock: FC<IProps> = ({ type, question, answer }) => {
  const noAnswer = answer === undefined || answer?.answer?.length === 0

  return (
    <StyledQuestionBlock>
      {type === QuestionnaireItemTypeCode.Display && (
        <DisplayBlock>
          <StyledInfoIcon>
            <InfoCircleIcon status="info" size="medium" />
          </StyledInfoIcon>
          {question}
        </DisplayBlock>
      )}
      {type === QuestionnaireItemTypeCode.QuestionBoolean && (
        <>
          <Question>{question}</Question>
          {noAnswer && <Answer>-</Answer>}
          {answer?.answer?.map((answerItem, index) => (
            <Answer key={`${question}-${answerItem?.valueBoolean}-${index + 1}`}>
              {answerItem?.valueBoolean === true ? 'Yes' : 'No'}
            </Answer>
          ))}
        </>
      )}
      {type === QuestionnaireItemTypeCode.QuestionString && (
        <>
          <Question>{question}</Question>
          {noAnswer && <Answer>-</Answer>}
          {answer?.answer?.map((answerItem, index) => (
            <Answer key={`${question}-${answerItem?.valueString}-${index + 1}`}>{answerItem?.valueString}</Answer>
          ))}
        </>
      )}
      {type === QuestionnaireItemTypeCode.QuestionDate && (
        <>
          <Question>{question}</Question>
          {noAnswer && <Answer>-</Answer>}
          {answer?.answer?.map((answerItem, index) => (
            <Answer key={`${question}-${answerItem?.valueDateTime?.value}-${index + 1}`}>
              {partialDateTimeText(answerItem?.valueDateTime)}
            </Answer>
          ))}
        </>
      )}
      {type === QuestionnaireItemTypeCode.QuestionStringBbCode && (
        <>
          <Question>{question}</Question>
          {noAnswer && <Answer>-</Answer>}
          {answer?.answer?.map((answerItem, index) => (
            <Answer key={`${question}-${answerItem?.valueString}-${index + 1}`}>
              {ReactHtmlParser(parser.toHTML(answerItem?.valueString || ''))}
            </Answer>
          ))}
        </>
      )}
    </StyledQuestionBlock>
  )
}

interface IProps {
  type?: QuestionTypes
  question?: Maybe<string>
  answer?: Maybe<QuestionnaireResponseItem>
}

type QuestionTypes =
  | QuestionnaireItemTypeCode.Display
  | QuestionnaireItemTypeCode.Group
  | QuestionnaireItemTypeCode.QuestionBoolean
  | QuestionnaireItemTypeCode.QuestionDate
  | QuestionnaireItemTypeCode.QuestionString
  | QuestionnaireItemTypeCode.QuestionStringBbCode

export default QuestionBlock
