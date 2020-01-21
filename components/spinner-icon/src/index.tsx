/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import { PRIMARY_ICON_COLOUR, IconSize, calculateIconSize } from '@ltht-react/styles'

const styles = css`
  color: ${PRIMARY_ICON_COLOUR};
`

const SpinnerIcon = ({ size }: Props) => {
  return <FontAwesomeIcon className="fa-spin" css={styles} icon={faSync} size={calculateIconSize(size)} />
}

interface Props {
  size: IconSize
}

export default SpinnerIcon
