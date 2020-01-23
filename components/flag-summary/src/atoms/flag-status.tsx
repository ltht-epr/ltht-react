/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_SECONDARY_COLOUR } from '@ltht-react/styles'
import { Flag } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_SECONDARY_COLOUR};
  text-align: right;
`

const FlagStatus = ({ flag }: { flag: Flag }) => {
  return <div css={styles}>{titleCase(flag.status)}</div>
}

export default FlagStatus
