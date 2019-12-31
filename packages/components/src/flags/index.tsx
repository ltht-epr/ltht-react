/** @jsx jsx */
import React, { Fragment } from 'react'
import { css, jsx } from '@emotion/core'

import { Widget } from '../widget'
import { ExclamationIcon } from '../icons'
import { Flag, CodeableConcept, Period, CSS_RESET } from '@ltht-react/core'

const CodeableConceptSnippet = ({ codeableConcept = {} }: { codeableConcept?: CodeableConcept }) => {
  const codings = codeableConcept.coding || []
  const text = codings
    .map(coding => {
      return coding.display
    })
    .join(', ')
  return <Fragment>{text}</Fragment>
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

const PeriodSnippet = ({ period = {} }: { period?: Period }) => {
  return <Fragment>{DateText(period.start)}</Fragment>
}

const FlagSummaryItem = ({ flag }: { flag: Flag }) => {
  const li_styles = css`
    display: flex;
    border-top: 1px solid #b0b0b0;
    padding: 0.6rem 0.5rem;
    justify-content: center;
  `
  const codeable_styles = css`
    flex-grow: 1;
    padding-left: 0.5rem;
  `
  return (
    <li css={li_styles}>
      <div>
        <ExclamationIcon status="red" size="medium" />
      </div>
      <div css={codeable_styles}>
        <CodeableConceptSnippet codeableConcept={flag.code} />
      </div>
      <div>
        <PeriodSnippet period={flag.period} />
      </div>
    </li>
  )
}

const FlagSummary: React.FC<FlagSummaryProps> = ({ title = 'Flag Summary', flags = [] }) => {
  const titleStyles = css`
    padding: 0.5rem 0;
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
