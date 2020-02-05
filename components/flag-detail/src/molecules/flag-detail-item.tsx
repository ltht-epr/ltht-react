/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Flag } from '@ltht-react/types'
import { codeableConceptDisplaySummary, titleCase } from '@ltht-react/utils'
import { TEXT_SECONDARY_COLOUR } from '@ltht-react/styles'
import { DetailList, DetailListItemPeriod, DetailListItemResourceReference } from '@ltht-react/detail-list'

const styles = {
  layout: css`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  `,
  color: css`
    color: ${TEXT_SECONDARY_COLOUR};
  `,
}

const FlagDetailItem: React.FC<Props> = ({ flag }) => {
  return (
    <DetailList>
      {flag?.code && (
        <div css={styles.layout}>
          <div css={styles.color}>Code</div>
          <div>{codeableConceptDisplaySummary(flag?.code)}</div>
        </div>
      )}
      <div css={styles.layout}>
        <div css={styles.color}>Status</div>
        <div>{titleCase(flag.status)}</div>
      </div>
      <div css={styles.layout}>
        <div css={styles.color}>Category</div>
        {flag.category?.coding?.map(code => (
          <div>{code?.display}</div>
        ))}
      </div>
      <DetailListItemPeriod period={flag?.period} />
      <div css={styles.layout}>
        <div css={styles.color}>Narrative</div>
        <div>{flag.text?.text}</div>
      </div>
      <DetailListItemResourceReference tag="Author" resourceReference={flag?.author} />
    </DetailList>
  )
}

interface Props {
  flag: Flag
}

export default FlagDetailItem
