import React from 'react'
import Card from '@ltht-react/card'
import { InfoCircleIcon } from '@ltht-react/icon'

const InfoSummary: React.FC<Props> = ({ clickHandler }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.preventDefault()
    clickHandler && clickHandler()
  }

  const infoSummaryProps = {
    ...(clickHandler && { onClick: handleClick }),
  }

  return (
    <Card.Banner status="info" {...infoSummaryProps}>
      <InfoCircleIcon size="medium" status="info" /> View Data Sources
    </Card.Banner>
  )
}

interface Props {
  clickHandler?(): void
}

export default InfoSummary
