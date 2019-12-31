/** @jsx jsx */
import React, { Fragment } from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'

import { Widget } from '../widget'
import { ExclamationIcon } from '../icons'
import {
  CodeableConcept,
  CSS_RESET,
  Flag,
  Period,
  SECONDARY_TEXT_COLOUR,
  StatusCode,
  TABLET_MEDIA_QUERY,
} from '@ltht-react/core'

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
      return coding.display
    })
    .join(', ')
  const code = codings
    .map(coding => {
      return coding.code
    })
    .join(', ')
  return (
    <ul css={listStyles}>
      <li>{display}</li>
      <li css={textStyles}>{code}</li>
    </ul>
  )
}

const DateText = (date?: Date) => {
  if (!date) {
    return
  }
  return date
    .toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    .split(' ')
    .join('-')
}

const PeriodSnippet = ({
  period = {},
  listStyles,
  textStyles,
}: {
  period?: Period
  listStyles: SerializedStyles
  textStyles: SerializedStyles
}) => {
  return (
    <ul css={listStyles}>
      <li>{DateText(period.start)}</li>
      <li css={textStyles}></li>
    </ul>
  )
}

const FlagSummaryItem = ({ flag }: { flag: Flag }) => {
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
  const seconday_text_style = css`
    color: ${SECONDARY_TEXT_COLOUR};
  `
  return (
    <li css={li_styles}>
      <div>
        <ExclamationIcon status={flag.status === StatusCode.ACTIVE ? 'red' : 'amber'} size="medium" />
      </div>
      <div css={codeable_styles}>
        <CodeableConceptSnippet codeableConcept={flag.code} listStyles={ul_styles} textStyles={seconday_text_style} />
      </div>
      <div>
        <PeriodSnippet period={flag.period} listStyles={ul_styles} textStyles={seconday_text_style} />
      </div>
    </li>
  )
}

const FlagSummary: React.FC<FlagSummaryProps> = ({ title = 'Flag Summary', flags = [] }) => {
  const titleStyles = css`
    margin-bottom: 0.5rem;
  `
  return (
    <Widget>
      <div css={CSS_RESET}>
        <h3 css={titleStyles}>{title}</h3>
        <ul>
          {flags.map((flag, index) => (
            <FlagSummaryItem key={index} flag={flag} />
          ))}
        </ul>
      </div>
    </Widget>
  )
}

interface FlagSummaryProps {
  title?: string
  flags?: Flag[]
}

export { FlagSummary }
