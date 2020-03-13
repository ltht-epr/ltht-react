/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Flag } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_COLOURS.SECONDARY};
  text-align: right;
`

const FlagStatus: React.FC<Props> = ({ flag }) => {
  return <div css={styles}>{titleCase(flag.status)}</div>
}

interface Props {
  flag: Flag
}

export default FlagStatus
