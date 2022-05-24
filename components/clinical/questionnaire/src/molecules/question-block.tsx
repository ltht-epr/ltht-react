import { FC, ReactElement } from 'react'
import parser from 'bbcode-to-react'
import ReactHtmlParser from 'react-html-parser'
import styled from '@emotion/styled'
import { Maybe, QuestionnaireItemTypeCode, QuestionnaireResponseItem } from '@ltht-react/types'
import { InfoCircleIcon } from '@ltht-react/icon'
import { partialDateTimeText, stripBBTags, stripHtmlTags } from '@ltht-react/utils'
import { NestedListDetail } from '@ltht-react/type-detail'
import { DESKTOP_MINIMUM_MEDIA_QUERY, MOBILE_MAXIMUM_MEDIA_QUERY, TABLET_ONLY_MEDIA_QUERY } from '@ltht-react/styles'

const StyledInfoIcon = styled.div`
  padding-right: 0.25rem;
`

const StyledQuestionBlock = styled.div<IStyledQuestionBlockProps>`
  margin: 5px 0;

  ${DESKTOP_MINIMUM_MEDIA_QUERY} {
    flex-basis: ${({ isFullWidth }) => (isFullWidth ? '100%' : '33%')};
  }

  ${TABLET_ONLY_MEDIA_QUERY} {
    flex-basis: ${({ isFullWidth }) => (isFullWidth ? '100%' : '50%')};
  }

  ${MOBILE_MAXIMUM_MEDIA_QUERY} {
    flex-basis: 100%;
  }
`

interface IStyledQuestionBlockProps {
  isFullWidth: boolean
}

const DisplayBlock = styled.div`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  background-color: #cbdbee;
  color: #0053c3;
`

interface IAnswer {
  Answer: ReactElement
  isFullWidth: boolean
}
const generateAnswer = (
  type?: QuestionTypes,
  responseItem?: Maybe<QuestionnaireResponseItem>,
  showIfEmpty?: Maybe<boolean>,
  question?: Maybe<string>,
  noAnswerProvided?: boolean | undefined
): IAnswer => {
  switch (type) {
    case QuestionnaireItemTypeCode.Display:
      return {
        Answer: (
          <DisplayBlock>
            <StyledInfoIcon>
              <InfoCircleIcon status="info" size="medium" />
            </StyledInfoIcon>
            {responseItem?.text}
          </DisplayBlock>
        ),
        isFullWidth: !!(responseItem?.text && responseItem.text.length > 50),
      }
    case QuestionnaireItemTypeCode.QuestionBoolean:
      return {
        Answer: (
          <NestedListDetail term={question || '-'} showIfEmpty={showIfEmpty}>
            {noAnswerProvided && <>-</>}
            {responseItem?.answer?.map((answerItem, index) => (
              <div key={`${question}-${answerItem?.valueBoolean}-${index + 1}`}>
                {answerItem?.valueBoolean === true ? 'Yes' : 'No'}
              </div>
            ))}
          </NestedListDetail>
        ),
        isFullWidth: false,
      }
    case QuestionnaireItemTypeCode.QuestionString:
      return {
        Answer: (
          <NestedListDetail term={question || '-'} showIfEmpty={showIfEmpty}>
            {noAnswerProvided && <>-</>}
            {responseItem?.answer?.map((answerItem, index) => (
              <div key={`${question}-${answerItem?.valueString}-${index + 1}`}>
                {ReactHtmlParser(answerItem?.valueString || '')}
              </div>
            ))}
          </NestedListDetail>
        ),
        isFullWidth:
          responseItem?.answer?.some((answer) => answer?.valueString && answer.valueString.length > 50) ?? false,
      }
    case QuestionnaireItemTypeCode.QuestionDate:
      return {
        Answer: (
          <NestedListDetail term={question || '-'} showIfEmpty={showIfEmpty}>
            {noAnswerProvided && <>-</>}
            {responseItem?.answer?.map((answerItem, index) => (
              <div key={`${question}-${answerItem?.valueDateTime?.value}-${index + 1}`}>
                {partialDateTimeText(answerItem?.valueDateTime)}
              </div>
            ))}
          </NestedListDetail>
        ),
        isFullWidth: false,
      }
    case QuestionnaireItemTypeCode.QuestionStringBbCode:
      return {
        Answer: (
          <NestedListDetail term={question || '-'} showIfEmpty={showIfEmpty}>
            {noAnswerProvided && <>-</>}
            {responseItem?.answer?.map((answerItem, index) => (
              <div key={`${question}-${answerItem?.valueString}-${index + 1}`}>
                {ReactHtmlParser(parser.toHTML(answerItem?.valueString || ''))}
              </div>
            ))}
          </NestedListDetail>
        ),
        isFullWidth: responseItem?.answer?.some((answer) => stripBBTags(answer?.valueString).length > 50) ?? false,
      }
    case QuestionnaireItemTypeCode.QuestionStringHtml:
      return {
        Answer: (
          <NestedListDetail term={question || '-'} showIfEmpty={showIfEmpty}>
            {noAnswerProvided && <>-</>}
            {responseItem?.answer?.map((answerItem, index) => (
              <div key={`${question}-${answerItem?.valueString}-${index + 1}`}>
                {answerItem?.valueString ? ReactHtmlParser(answerItem?.valueString) : ''}
              </div>
            ))}
          </NestedListDetail>
        ),
        isFullWidth: responseItem?.answer?.some((answer) => stripHtmlTags(answer?.valueString).length > 50) ?? false,
      }
    case QuestionnaireItemTypeCode.QuestionCoding:
      return {
        Answer: (
          <NestedListDetail term={question || '-'} showIfEmpty={showIfEmpty}>
            {noAnswerProvided && <>-</>}
            {responseItem?.answer?.map((answerItem, index) => (
              <div key={`${question}-${answerItem?.valueCoding?.display}-${index + 1}`}>
                {answerItem?.valueCoding?.display}
              </div>
            ))}
          </NestedListDetail>
        ),
        isFullWidth: false,
      }
    default:
      return { Answer: <></>, isFullWidth: false }
  }
}

const QuestionBlock: FC<IProps> = ({ type, question, responseItem, className, showIfEmpty = false }) => {
  const noAnswerResponse = responseItem === undefined
  const noAnswerProvided =
    (responseItem?.answer && responseItem?.answer?.length === 0) ||
    // Also no answer if each answer in the array has null for every valuetype property
    responseItem?.answer?.every((answer) => answer && Object.values(answer).every((x) => x === null))

  if ((noAnswerResponse || noAnswerProvided) && type === QuestionnaireItemTypeCode.Display) {
    return <></>
  }

  const { Answer, isFullWidth } = generateAnswer(type, responseItem, showIfEmpty, question, noAnswerProvided)

  return (
    <StyledQuestionBlock className={className} isFullWidth={isFullWidth}>
      {Answer}
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
