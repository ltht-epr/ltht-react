import React from 'react'
import Card from '@ltht-react/card'
import { ExclamationIcon } from '@ltht-react/icon'

const WarningSummary: React.FC<Props> = ({ clickHandler }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.preventDefault()
    clickHandler && clickHandler()
  }

  const warningSummaryProps = {
    ...(clickHandler && { onClick: handleClick }),
  }

  return (
    <Card.Banner status="warning" {...warningSummaryProps}>
      <ExclamationIcon size="medium" status="default" /> Incomplete Data
    </Card.Banner>
  )
}

interface Props {
  clickHandler?(): void
}

export default WarningSummary
