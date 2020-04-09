/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Flag } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: right;
  font-size: smaller;
  padding-top: 0.25rem;
`

const FlagStatus: React.FC<Props> = ({ flag }) => {
  return <div css={styles}>{titleCase(flag.status)}</div>
}

interface Props {
  flag: Flag
}

export default FlagStatus
