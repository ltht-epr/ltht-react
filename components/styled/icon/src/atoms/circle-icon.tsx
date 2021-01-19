/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { ICON_COLOURS, IconSizes, calculateIconSize } from '@ltht-react/styles'

const TableIcon: React.FC<IconProps> = ({ status, size }) => {
  const styles = css`
    ${status === 'green' && `color: ${ICON_COLOURS.SUCCESS.VALUE};`}
    ${status === 'default' && `color: ${ICON_COLOURS.DEFAULT.VALUE};`}
  `
  return <FontAwesomeIcon css={styles} icon={faCircle} size={calculateIconSize(size)} transform={{ rotate: 180 }} />
}

type IconProps = {
  status: 'green' | 'default'
  size: IconSizes
}

export default TableIcon
