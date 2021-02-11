import { FC, MouseEvent } from 'react'
import Card from '@ltht-react/card'
import { ExclamationIcon } from '@ltht-react/icon'

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
      <ExclamationIcon size="medium" status="amber" /> Missing Data
    </Card.Banner>
  )
}

interface Props {
  clickHandler?(): void
}

export default MissingDataWarning
