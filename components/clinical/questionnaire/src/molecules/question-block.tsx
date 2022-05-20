import { FC } from 'react'
import parser from 'bbcode-to-react'
import ReactHtmlParser from 'react-html-parser'
import styled from '@emotion/styled'
import { Maybe, QuestionnaireItemTypeCode, QuestionnaireResponseItem } from '@ltht-react/types'
import { InfoCircleIcon } from '@ltht-react/icon'
import { partialDateTimeText } from '@ltht-react/utils'
import { NestedListDetail } from '@ltht-react/type-detail'
import { DESKTOP_MINIMUM_MEDIA_QUERY, TABLET_ONLY_MEDIA_QUERY } from '@ltht-react/styles'

const StyledInfoIcon = styled.div`
  padding-right: 0.25rem;
`

const StyledQuestionBlock = styled.div`
  margin: 5px 0;
  ${DESKTOP_MINIMUM_MEDIA_QUERY} {
    flex-basis: 50%;
  }

  ${TABLET_ONLY_MEDIA_QUERY} {
    flex-basis: 100%;
  }
`

const DisplayBlock = styled.div`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  background-color: #cbdbee;
  color: #0053c3;
`

const QuestionBlock: FC<IProps> = ({ type, question, responseItem, className, showIfEmpty = false }) => {
  const noAnswerResponse = responseItem === undefined
  const noAnswerProvided =
    (responseItem?.answer && responseItem?.answer?.length === 0) ||
    // Also no answer if each answer in the array has null for every valuetype property
    responseItem?.answer?.every((answer) => answer && Object.values(answer).every((x) => x === null))

  if ((noAnswerResponse || noAnswerProvided) && type === QuestionnaireItemTypeCode.Display) {
    if (showIfEmpty === false) return <></>
    return <></>
    return (
      <StyledQuestionBlock className={className}>
        <NestedListDetail term={question || '-'} showIfEmpty={showIfEmpty} />
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
        <NestedListDetail term={question || '-'} showIfEmpty={showIfEmpty}>
          {noAnswerProvided && <>-</>}
          {responseItem?.answer?.map((answerItem, index) => (
            <div key={`${question}-${answerItem?.valueBoolean}-${index + 1}`}>
              {answerItem?.valueBoolean === true ? 'Yes' : 'No'}
            </div>
          ))}
        </NestedListDetail>
      )}
      {type === QuestionnaireItemTypeCode.QuestionString && (
        <NestedListDetail term={question || '-'} showIfEmpty={showIfEmpty}>
          {noAnswerProvided && <>-</>}
          {responseItem?.answer?.map((answerItem, index) => (
            <div key={`${question}-${answerItem?.valueString}-${index + 1}`}>
              {ReactHtmlParser(answerItem?.valueString || '')}
            </div>
          ))}
        </NestedListDetail>
      )}
      {type === QuestionnaireItemTypeCode.QuestionDate && (
        <NestedListDetail term={question || '-'} showIfEmpty={showIfEmpty}>
          {noAnswerProvided && <>-</>}
          {responseItem?.answer?.map((answerItem, index) => (
            <div key={`${question}-${answerItem?.valueDateTime?.value}-${index + 1}`}>
              {partialDateTimeText(answerItem?.valueDateTime)}
            </div>
          ))}
        </NestedListDetail>
      )}
      {type === QuestionnaireItemTypeCode.QuestionStringBbCode && (
        <NestedListDetail term={question || '-'} showIfEmpty={showIfEmpty}>
          {noAnswerProvided && <>-</>}
          {responseItem?.answer?.map((answerItem, index) => (
            <div key={`${question}-${answerItem?.valueString}-${index + 1}`}>
              {ReactHtmlParser(parser.toHTML(answerItem?.valueString || ''))}
            </div>
          ))}
        </NestedListDetail>
      )}
      {type === QuestionnaireItemTypeCode.QuestionStringHtml && (
        <NestedListDetail term={question || '-'} showIfEmpty={showIfEmpty}>
          {noAnswerProvided && <>-</>}
          {responseItem?.answer?.map((answerItem, index) => (
            <div key={`${question}-${answerItem?.valueString}-${index + 1}`}>
              {answerItem?.valueString ? ReactHtmlParser(answerItem?.valueString) : ''}
            </div>
          ))}
        </NestedListDetail>
      )}
      {type === QuestionnaireItemTypeCode.QuestionCoding && (
        <NestedListDetail term={question || '-'} showIfEmpty={showIfEmpty}>
          {noAnswerProvided && <>-</>}
          {responseItem?.answer?.map((answerItem, index) => (
            <div key={`${question}-${answerItem?.valueCoding?.display}-${index + 1}`}>
              {answerItem?.valueCoding?.display}
            </div>
          ))}
        </NestedListDetail>
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
