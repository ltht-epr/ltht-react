import { FC, MouseEvent } from 'react'
import Card from '@ltht-react/card'
import { ExclamationIcon } from '@ltht-react/icon'

const ErrorSummary: FC<Props> = ({ clickHandler }) => {
  const handleClick = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault()
    clickHandler && clickHandler()
  }

  const errorSummaryProps = {
    ...(clickHandler && { onClick: handleClick }),
  }

  return (
    <Card.Banner status="danger" {...errorSummaryProps}>
      <ExclamationIcon size="medium" status="default" /> Regional Providers Unavailable
    </Card.Banner>
  )
}

interface Props {
  clickHandler?(): void
}

export default ErrorSummary
