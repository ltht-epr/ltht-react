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
  margin-bottom: 0.25rem;
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
`

const Answer = styled.p`
  margin: 0;
`

const QuestionBlock: FC<IProps> = ({ type, question, responseItem, className, showIfEmpty = false }) => {
  const noAnswerResponse = responseItem === undefined
  const noAnswerProvided =
    (responseItem?.answer && responseItem?.answer?.length === 0) ||
    // Also no answer if each answer in the array has null for every valuetype property
    responseItem?.answer?.every((answer) => answer && Object.values(answer).every((x) => x === null))

  if (noAnswerResponse || noAnswerProvided) {
    if (showIfEmpty === false) return <></>

    return (
      <StyledQuestionBlock className={className}>
        <Question>{question}</Question>
      </StyledQuestionBlock>
    )
  }

  return (
    <StyledQuestionBlock className={className}>
      {type === QuestionnaireItemTypeCode.Display && (
        <DisplayBlock>
          <StyledInfoIcon>
            <InfoCircleIcon status="info" size="medium" />
          </StyledInfoIcon>
          {responseItem?.text}
        </DisplayBlock>
      )}
      {type === QuestionnaireItemTypeCode.QuestionBoolean && (
        <>
          <Question>{question}</Question>
          {noAnswerProvided && <Answer>-</Answer>}
          {responseItem?.answer?.map((answerItem, index) => (
            <Answer key={`${question}-${answerItem?.valueBoolean}-${index + 1}`}>
              {answerItem?.valueBoolean === true ? 'Yes' : 'No'}
            </Answer>
          ))}
        </>
      )}
      {type === QuestionnaireItemTypeCode.QuestionString && (
        <>
          <Question>{question}</Question>
          {noAnswerProvided && <Answer>-</Answer>}
          {responseItem?.answer?.map((answerItem, index) => (
            <Answer key={`${question}-${answerItem?.valueString}-${index + 1}`}>
              {ReactHtmlParser(answerItem?.valueString || '')}
            </Answer>
          ))}
        </>
      )}
      {type === QuestionnaireItemTypeCode.QuestionDate && (
        <>
          <Question>{question}</Question>
          {noAnswerProvided && <Answer>-</Answer>}
          {responseItem?.answer?.map((answerItem, index) => (
            <Answer key={`${question}-${answerItem?.valueDateTime?.value}-${index + 1}`}>
              {partialDateTimeText(answerItem?.valueDateTime)}
            </Answer>
          ))}
        </>
      )}
      {type === QuestionnaireItemTypeCode.QuestionStringBbCode && (
        <>
          <Question>{question}</Question>
          {noAnswerProvided && <Answer>-</Answer>}
          {responseItem?.answer?.map((answerItem, index) => (
            <Answer key={`${question}-${answerItem?.valueString}-${index + 1}`}>
              {ReactHtmlParser(parser.toHTML(answerItem?.valueString || ''))}
            </Answer>
          ))}
        </>
      )}
      {type === QuestionnaireItemTypeCode.QuestionStringHtml && (
        <>
          <Question>{question}</Question>
          {noAnswerProvided && <Answer>-</Answer>}
          {responseItem?.answer?.map((answerItem, index) => (
            <Answer key={`${question}-${answerItem?.valueString}-${index + 1}`}>
              {answerItem?.valueString ? ReactHtmlParser(answerItem?.valueString) : ''}
            </Answer>
          ))}
        </>
      )}
      {type === QuestionnaireItemTypeCode.QuestionCoding && (
        <>
          <Question>{question}</Question>
          {noAnswerProvided && <Answer>-</Answer>}
          {responseItem?.answer?.map((answerItem, index) => (
            <Answer key={`${question}-${answerItem?.valueCoding?.display}-${index + 1}`}>
              {answerItem?.valueCoding?.display}
            </Answer>
          ))}
        </>
      )}
    </StyledQuestionBlock>
  )
}

interface IProps {
  className?: string
  type?: QuestionTypes
  question?: Maybe<string>
  responseItem?: Maybe<QuestionnaireResponseItem>
  showIfEmpty?: Maybe<boolean>
}

type QuestionTypes =
  | QuestionnaireItemTypeCode.Display
  | QuestionnaireItemTypeCode.Group
  | QuestionnaireItemTypeCode.QuestionBoolean
  | QuestionnaireItemTypeCode.QuestionDate
  | QuestionnaireItemTypeCode.QuestionString
  | QuestionnaireItemTypeCode.QuestionStringBbCode
  | QuestionnaireItemTypeCode.QuestionStringHtml
  | QuestionnaireItemTypeCode.QuestionCoding

export default QuestionBlock
