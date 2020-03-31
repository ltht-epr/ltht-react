/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Condition } from '@ltht-react/types'
import { DateSummary } from '@ltht-react/summary'

import Category from '../atoms/condition-category'
import Status from '../atoms/condition-status'
import Title from '../atoms/condition-title'
import Redacted from '../molecules/condition-redacted'

const styles = {
  root: css`
    display: flex;
    justify-content: center;
  `,
  description: css`
    flex-grow: 1;
  `,
  date: css`
    text-align: right;
  `,
}

const ConditionSummaryItem: React.FC<Props> = ({ condition, clickHandler }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.preventDefault()
    clickHandler && clickHandler(condition)
  }

  const summaryMarkup = (
    <React.Fragment>
      <div css={styles.description}>
        <Title condition={condition} />
        <Category condition={condition} />
      </div>
      <div css={styles.date}>
        <DateSummary datetime={condition?.assertedDate} />
        <Status condition={condition} />
      </div>
    </React.Fragment>
  )

  return (
    <div role="link" css={styles.root} onClick={clickHandler && handleClick}>
      {condition.metadata.isRedacted ? <Redacted condition={condition} /> : summaryMarkup}
    </div>
  )
}

interface Props {
  condition: Condition
  clickHandler?(condition: Condition): void
}

export default ConditionSummaryItem
