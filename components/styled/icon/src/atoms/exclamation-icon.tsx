/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { ICON_COLOURS, IconSizes, calculateIconSize } from '@ltht-react/styles'

const ExclamationIcon: React.FC<ExclamationIconProps> = ({ status, size }) => {
  const styles = css`
    ${status === 'green' && `color: ${ICON_COLOURS.SUCCESS};`}
    ${status === 'amber' && `color: ${ICON_COLOURS.WARNING};`}
    ${status === 'red' && `color: ${ICON_COLOURS.DANGER};`}
    ${status === 'default' && `color: ${ICON_COLOURS.DEFAULT};`}
  `
  return <FontAwesomeIcon css={styles} icon={faExclamationTriangle} size={calculateIconSize(size)} />
}

type ExclamationIconProps = {
  status: 'red' | 'green' | 'amber' | 'default'
  size: IconSizes
}

export default ExclamationIcon
