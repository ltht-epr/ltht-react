/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { PartialDateTime } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_COLOURS.PRIMARY};
`

const DateSummary: React.FC<Props> = ({ datetime }) => {
  return <div css={styles}>{partialDateTimeText(datetime)}</div>
}

interface Props {
  datetime?: PartialDateTime | null
}

export default DateSummary
