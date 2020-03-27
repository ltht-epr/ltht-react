/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'

import { EncounterStatusHistory, Maybe } from '@ltht-react/types'
import { DescriptionListDescription } from '@ltht-react/description-list'
import { NestedListDetail } from '@ltht-react/detail'
import { periodSummaryText, titleCase } from '@ltht-react/utils'

const styles = {
  nested: css`
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  `,
  li: css`
    list-style: initial;
  `,
}

const EncounterStatusHistoryDetail: React.FC<Props> = ({ hospitalStatusHistories }) => {
  return (
    <NestedListDetail term="Status History">
      {hospitalStatusHistories?.map(item => {
        if (item?.status) {
          return (
            <div css={styles.nested}>
              <li css={styles.li}>
                {titleCase(item?.status)} - {periodSummaryText(item?.period)}
              </li>
            </div>
          )
        }
        return (
          <div css={styles.nested}>
            <DescriptionListDescription>{periodSummaryText(item?.period)}</DescriptionListDescription>
          </div>
        )
      })}
    </NestedListDetail>
  )
}

interface Props {
  hospitalStatusHistories?: Maybe<Array<Maybe<EncounterStatusHistory>>>
}

export default EncounterStatusHistoryDetail
