import { FC, MouseEvent } from 'react'
import Card from '@ltht-react/card'

const InfoSummary: FC<Props> = ({ clickHandler }) => {
  const handleClick = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault()
    clickHandler && clickHandler()
  }

  const infoSummaryProps = {
    ...(clickHandler && { onClick: handleClick }),
  }

  return (
    <Card.Banner status="info" {...infoSummaryProps}>
      View Data Sources
    </Card.Banner>
  )
}

interface Props {
  clickHandler?(): void
}

export default InfoSummary
