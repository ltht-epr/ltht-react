/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Encounter } from '@ltht-react/types'
import { DateSummary, RedactedDescription } from '@ltht-react/summary'

const styles = {
  description: css`
    flex-grow: 1;
    text-align: right;
  `,
  date: css`
    text-align: left;
  `,
}

const AppointmentRedacted: React.FC<Props> = ({ appointment }) => {
  return (
    <React.Fragment>
      <div css={styles.date}>
        <DateSummary datetime={appointment?.period?.start} />
      </div>
      <div css={styles.description}>
        <RedactedDescription />
      </div>
    </React.Fragment>
  )
}

interface Props {
  appointment?: Encounter | null
}

export default AppointmentRedacted
