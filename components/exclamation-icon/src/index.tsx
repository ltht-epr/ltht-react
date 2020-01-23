/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import {
  ICON_SUCCESS_COLOUR,
  ICON_DANGER_COLOUR,
  ICON_WARNING_COLOUR,
  ICON_DEFAULT_COLOUR,
  IconSizes,
  calculateIconSize,
} from '@ltht-react/styles'

const ExclamationIcon: React.FC<ExclamationIconProps> = ({ status, size }) => {
  const styles = css`
    ${status === 'green' && `color: ${ICON_SUCCESS_COLOUR};`}
    ${status === 'amber' && `color: ${ICON_WARNING_COLOUR};`}
    ${status === 'red' && `color: ${ICON_DANGER_COLOUR};`}
    ${status === 'default' && `color: ${ICON_DEFAULT_COLOUR};`}    
  `
  return <FontAwesomeIcon css={styles} icon={faExclamationTriangle} size={calculateIconSize(size)} />
}

type ExclamationIconProps = {
  status: 'red' | 'green' | 'amber' | 'default'
  size: IconSizes
}

export default ExclamationIcon
