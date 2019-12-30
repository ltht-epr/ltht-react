import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const ExclamationIcon: React.FC<ExclamationIconProps> = ({ status, size }) => {
  return <FontAwesomeIcon icon={faExclamationTriangle} />
}

type ExclamationIconProps = {
  /** indicates the colour of the icon */
  status: 'red' | 'green' | 'amber'
  /** indicates the size of the icon */
  size: 'small' | 'medium' | 'large'
}

export { ExclamationIcon }
