/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { AllergyIntolerance } from '@ltht-react/types'
import { DateSummary, RedactedDescription } from '@ltht-react/summary'

const styles = {
  description: css`
    flex-grow: 1;
    text-align: left;
  `,
  date: css`
    text-align: right;
  `,
}

const AllergyRedacted: React.FC<Props> = ({ allergy }) => {
  return (
    <React.Fragment>
      <div css={styles.description}>
        <RedactedDescription />
      </div>
      <div css={styles.date}>
        <DateSummary datetime={allergy?.assertedDate} />
      </div>
    </React.Fragment>
  )
}

interface Props {
  allergy?: AllergyIntolerance | null
}

export default AllergyRedacted
