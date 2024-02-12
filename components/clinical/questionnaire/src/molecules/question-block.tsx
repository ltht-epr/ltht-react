import { FC, ReactElement } from 'react'
import BBCode from '@bbob/react/lib'
import reactPreset from '@bbob/preset-react/lib'
import parseHtml from 'html-react-parser'
import styled from '@emotion/styled'
import { Maybe, QuestionnaireItemTypeCode, QuestionnaireResponseItem } from '@ltht-react/types'
import Icon from '@ltht-react/icon'
import { partialDateTimeText, stripBBTags, stripHtmlTags } from '@ltht-react/utils'
import { NestedListDetail } from '@ltht-react/type-detail'
import { DESKTOP_MINIMUM_MEDIA_QUERY, MOBILE_MAXIMUM_MEDIA_QUERY, TABLET_ONLY_MEDIA_QUERY } from '@ltht-react/styles'

const plugins = [reactPreset()]

const StyledInfoCircleIcon = styled(Icon)`
  padding-right: 0.25rem;
`

const StyledQuestionBlock = styled.div<IStyledQuestionBlockProps>`
  padding: 0.5rem 2rem 0.5rem 0;

  ${DESKTOP_MINIMUM_MEDIA_QUERY} {
    flex-basis: ${({ isFullWidth }) => (isFullWidth ? '100%' : '33%')};
    padding-right: ${({ isFullWidth }) => (isFullWidth ? '0.5rem' : '2rem')} !important;
  }

  ${TABLET_ONLY_MEDIA_QUERY} {
    flex-basis: ${({ isFullWidth }) => (isFullWidth ? '100%' : '50%')};
    padding-right: ${({ isFullWidth }) => (isFullWidth ? '0.5rem' : '2rem')} !important;
  }

  ${MOBILE_MAXIMUM_MEDIA_QUERY} {
    flex-basis: 100%;
    padding-right: 0.5rem;
  }
`

const DisplayBlock = styled.div`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  background-color: #cbdbee;
  color: #0053c3;
`

const generateAnswer = (
  type?: QuestionnaireItemTypeCode,
  responseItem?: Maybe<QuestionnaireResponseItem>,
  showIfEmpty?: Maybe<boolean>,
  question?: Maybe<string>
): IAnswer => {
  switch (type) {
    case QuestionnaireItemTypeCode.Display:
      return {
        Answer: (
          <DisplayBlock>
            <StyledInfoCircleIcon type="info-circle" color="info-blue" size="medium" />
            {responseItem?.text}
          </DisplayBlock>
        ),
        isFullWidth: !!(responseItem?.text && responseItem.text.length > 150),
      }
    case QuestionnaireItemTypeCode.QuestionBoolean:
      return {
        Answer: (
          <NestedListDetail term={question || '-'} showIfEmpty={showIfEmpty}>
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
    case QuestionnaireItemTypeCode.QuestionText:
      return {
        Answer: (
          <NestedListDetail term={question || '-'} showIfEmpty={showIfEmpty}>
            {responseItem?.answer?.map((answerItem, index) => (
              <div key={`${question}-${answerItem?.valueString}-${index + 1}`}>
                {parseHtml(answerItem?.valueString || '')}
              </div>
            ))}
          </NestedListDetail>
        ),
        isFullWidth:
          responseItem?.answer?.some((answer) => answer?.valueString && answer.valueString.length > 150) ?? false,
      }
    case QuestionnaireItemTypeCode.QuestionDate:
      return {
        Answer: (
          <NestedListDetail term={question || '-'} showIfEmpty={showIfEmpty}>
            {responseItem?.answer?.map((answerItem, index) => (
              <div key={`${question}-${answerItem?.valueDateTime?.value}-${index + 1}`}>
                {partialDateTimeText(answerItem?.valueDateTime)}
              </div>
            ))}
          </NestedListDetail>
        ),
        isFullWidth: false,
      }
    case QuestionnaireItemTypeCode.QuestionDateTime:
      return {
        Answer: (
          <NestedListDetail term={question || '-'} showIfEmpty={showIfEmpty}>
            {responseItem?.answer?.map((answerItem, index) => (
              <div key={`${question}-${answerItem?.valueDateTime?.value}-${index + 1}`}>
                {partialDateTimeText(answerItem?.valueDateTime)}
              </div>
            ))}
          </NestedListDetail>
        ),
        isFullWidth: false,
      }
    case QuestionnaireItemTypeCode.QuestionTime:
      return {
        Answer: (
          <NestedListDetail term={question || '-'} showIfEmpty={showIfEmpty}>
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
            {responseItem?.answer?.map((answerItem, index) => (
              <div key={`${question}-${answerItem?.valueString}-${index + 1}`}>
                <BBCode plugins={plugins}>{answerItem?.valueString ?? ''}</BBCode>
              </div>
            ))}
          </NestedListDetail>
        ),
        isFullWidth: responseItem?.answer?.some((answer) => stripBBTags(answer?.valueString).length > 150) ?? false,
      }
    case QuestionnaireItemTypeCode.QuestionStringHtml:
      return {
        Answer: (
          <NestedListDetail term={question || '-'} showIfEmpty={showIfEmpty}>
            {responseItem?.answer?.map((answerItem, index) => (
              <div key={`${question}-${answerItem?.valueString}-${index + 1}`}>
                {answerItem?.valueString ? parseHtml(answerItem?.valueString) : ''}
              </div>
            ))}
          </NestedListDetail>
        ),
        isFullWidth: responseItem?.answer?.some((answer) => stripHtmlTags(answer?.valueString).length > 150) ?? false,
      }
    case QuestionnaireItemTypeCode.QuestionCoding:
      return {
        Answer: (
          <NestedListDetail term={question || '-'} showIfEmpty={showIfEmpty}>
            {responseItem?.answer?.map((answerItem, index) => (
              <div key={`${question}-${answerItem?.valueCoding?.display}-${index + 1}`}>
                {answerItem?.valueCoding?.display}
              </div>
            ))}
          </NestedListDetail>
        ),
        isFullWidth: false,
      }
    case QuestionnaireItemTypeCode.QuestionDecimal:
    case QuestionnaireItemTypeCode.QuestionInteger: {
      return {
        Answer: (
          <NestedListDetail term={question || '-'} showIfEmpty={showIfEmpty}>
            {responseItem?.answer?.map((answerItem, index) => (
              <div key={`${question}-${answerItem?.valueDecimal ?? answerItem?.valueInteger}-${index + 1}`}>
                {parseHtml(`${answerItem?.valueDecimal ?? answerItem?.valueInteger}` ?? '')}
              </div>
            ))}
          </NestedListDetail>
        ),
        isFullWidth: false,
      }
    }
    case QuestionnaireItemTypeCode.QuestionDateDays: {
      return {
        Answer: (
          <NestedListDetail term={question || '-'} showIfEmpty={showIfEmpty}>
            {responseItem?.answer?.map((answerItem, index) => (
              <div key={`${question}-${answerItem?.valueInteger}-${index + 1}`}>
                {`${answerItem?.valueInteger} Day${
                  answerItem?.valueInteger && answerItem?.valueInteger > 1 ? 's' : ''
                }` ?? ''}
              </div>
            ))}
          </NestedListDetail>
        ),
        isFullWidth: false,
      }
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
    responseItem?.answer?.every((answer) => !answer || Object.values(answer).every((x) => x === null))

  if ((noAnswerResponse || noAnswerProvided) && (type === QuestionnaireItemTypeCode.Display || showIfEmpty === false)) {
    return <></>
  }

  const { Answer, isFullWidth } = generateAnswer(type, responseItem, showIfEmpty, question)

  return (
    <StyledQuestionBlock className={className} isFullWidth={isFullWidth}>
      {Answer}
    </StyledQuestionBlock>
  )
}

interface IStyledQuestionBlockProps {
  isFullWidth: boolean
}

interface IAnswer {
  Answer: ReactElement
  isFullWidth: boolean
}

interface IProps {
  className?: string
  type?: QuestionnaireItemTypeCode
  question?: Maybe<string>
  responseItem?: Maybe<QuestionnaireResponseItem>
  showIfEmpty?: Maybe<boolean>
}

export default QuestionBlock
