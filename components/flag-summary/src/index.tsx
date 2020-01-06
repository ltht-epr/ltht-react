/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'

import { CodeableConcept, Flag, Period, FlagStatusCode, PartialDateTime } from '@ltht-react/types'
import { CSS_RESET, SECONDARY_TEXT_COLOUR, WIDGET_STYLES } from '@ltht-react/styles'
import ExclamationIcon from '@ltht-react/exclamation-icon'

const CodeableConceptSnippet = ({
  codeableConcept = {},
  listStyles,
  textStyles,
}: {
  codeableConcept?: CodeableConcept
  listStyles: SerializedStyles
  textStyles: SerializedStyles
}) => {
  const codings = codeableConcept.coding || []
  const display = codings
    .map(coding => {
      return coding?.display
    })
    .join(', ')
  const code = codings
    .map(coding => {
      return coding?.code
    })
    .join(', ')
  return (
    <ul css={listStyles}>
      <li>{display}</li>
      <li css={textStyles}>{code}</li>
    </ul>
  )
}

const DateText = (date?: PartialDateTime | null) => {
  if (!date) {
    return
  }
  return date.value
    .toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    .split(' ')
    .join('-')
}

const PeriodSnippet = ({
  period = {},
  listStyles,
  textStyles,
}: {
  period?: Period | null
  listStyles: SerializedStyles
  textStyles: SerializedStyles
}) => {
  return (
    <ul css={listStyles}>
      <li>{DateText(period?.start)}</li>
      <li css={textStyles}></li>
    </ul>
  )
}

const FlagSummaryItem = ({ flag, handleClick }: { flag: Flag; handleClick: Function }) => {
  const li_styles = css`
    display: flex;
    border-top: 1px solid #b0b0b0;
    padding: 0.2rem;
    justify-content: center;
  `
  const codeable_styles = css`
    flex-grow: 1;
  `
  const ul_styles = css`
    padding-left: 0.4rem;
    list-style: none;
  `
  const secondary_text_style = css`
    color: ${SECONDARY_TEXT_COLOUR};
  `
  return (
    <li css={li_styles} onClick={() => handleClick}>
      <div>
        <ExclamationIcon status={flag.status === FlagStatusCode.Active ? 'red' : 'amber'} size="medium" />
      </div>
      <div css={codeable_styles}>
        <CodeableConceptSnippet codeableConcept={flag.code} listStyles={ul_styles} textStyles={secondary_text_style} />
      </div>
      <div>
        <PeriodSnippet period={flag.period} listStyles={ul_styles} textStyles={secondary_text_style} />
      </div>
    </li>
  )
}

const FlagSummary: React.FC<FlagSummaryProps> = ({ title = 'Flag Summary', flags = [], handleItemClick }) => {
  const titleStyles = css`
    margin-bottom: 0.5rem;
  `
  return (
    <div css={WIDGET_STYLES}>
      <div css={CSS_RESET}>
        <h3 css={titleStyles}>{title}</h3>
        <ul>
          {flags.map((flag, index) => (
            <FlagSummaryItem key={index} flag={flag} handleClick={() => handleItemClick(flag)} />
          ))}
        </ul>
      </div>
    </div>
  )
}

interface FlagSummaryProps {
  title?: string
  flags?: Flag[]
  handleItemClick(flag: Flag): void
}

export default FlagSummary
