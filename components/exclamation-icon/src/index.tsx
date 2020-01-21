/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import {
  GREEN_ICON_COLOUR,
  RED_ICON_COLOUR,
  AMBER_ICON_COLOUR,
  DEFAULT_ICON_COLOUR,
  IconSize,
  calculateIconSize,
} from '@ltht-react/styles'

const ExclamationIcon: React.FC<ExclamationIconProps> = ({ status, size }) => {
  const styles = css`
    ${status === 'green' && `color: ${GREEN_ICON_COLOUR};`}
    ${status === 'amber' && `color: ${AMBER_ICON_COLOUR};`}
    ${status === 'red' && `color: ${RED_ICON_COLOUR};`}
    ${status === 'default' && `color: ${DEFAULT_ICON_COLOUR};`}    
  `
  return <FontAwesomeIcon css={styles} icon={faExclamationTriangle} size={calculateIconSize(size)} />
}

type ExclamationIconProps = {
  status: 'red' | 'green' | 'amber' | 'default'
  size: IconSize
}

export default ExclamationIcon
