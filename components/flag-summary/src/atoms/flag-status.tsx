/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { SECONDARY_TEXT_COLOUR } from '@ltht-react/styles'
import { Flag } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const styles = css`
  color: ${SECONDARY_TEXT_COLOUR};
  text-align: right;
`

const FlagStatus = ({ flag }: { flag: Flag }) => {
  return <div css={styles}>{titleCase(flag.status)}</div>
}

export default FlagStatus
