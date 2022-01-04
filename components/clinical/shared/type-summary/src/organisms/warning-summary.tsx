import { FC, MouseEvent } from 'react'
import Card from '@ltht-react/card'

const WarningSummary: FC<Props> = ({ clickHandler }) => {
  const handleClick = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault()
    clickHandler && clickHandler()
  }

  const warningSummaryProps = {
    ...(clickHandler && { onClick: handleClick }),
  }

  return (
    <Card.Banner status="warning" {...warningSummaryProps}>
      Incomplete Data
    </Card.Banner>
  )
}

interface Props {
  clickHandler?(): void
}

export default WarningSummary
