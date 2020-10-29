/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import { Maybe, EncounterParticipant } from '@ltht-react/types'
import { periodSummaryText, titleCase } from '@ltht-react/utils'

import { NestedListDetail } from '@ltht-react/detail'

const styles = {
  nested: css`
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  `,
  li: css`
    list-style: initial;
  `,
}

const EncounterParticipantDetail: React.FC<Props> = ({ participants }) => {
  return (
    <NestedListDetail term="Participant(s)">
      {participants?.map(item => {
        if (item?.individual?.display && item?.individual?.typeName) {
          return (
            <div css={styles.nested}>
              <li css={styles.li}>
                {titleCase(item?.individual?.display)} ({titleCase(item?.individual?.typeName)}):{' '}
                {periodSummaryText(item?.period)}
              </li>
            </div>
          )
        }
        return <React.Fragment />
      })}
    </NestedListDetail>
  )
}

interface Props {
  participants?: Maybe<Array<Maybe<EncounterParticipant>>>
}

export default EncounterParticipantDetail
