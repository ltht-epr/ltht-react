import React from 'react'
import Card from '@ltht-react/card'
import { ExclamationIcon } from '@ltht-react/icon'

const MissingDataWarning: React.FC<Props> = ({ clickHandler }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.preventDefault()
    clickHandler && clickHandler()
  }

  const missingDataWarningProps = {
    ...(clickHandler && { onClick: handleClick }),
  }

  return (
    <Card.Banner status="warning" {...missingDataWarningProps}>
      <ExclamationIcon size="medium" status="amber" /> Missing Data
    </Card.Banner>
  )
}

interface Props {
  clickHandler?(): void
}

export default MissingDataWarning
