import { FC, MouseEvent } from 'react'
import Card from '@ltht-react/card'

const MissingDataWarning: FC<Props> = ({ clickHandler }) => {
  const handleClick = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault()
    clickHandler && clickHandler()
  }

  const missingDataWarningProps = {
    ...(clickHandler && { onClick: handleClick }),
  }

  return (
    <Card.Banner status="warning" {...missingDataWarningProps}>
      Missing Data
    </Card.Banner>
  )
}

interface Props {
  clickHandler?(): void
}

export default MissingDataWarning
