import { FC } from 'react'
import { IconSizes } from '@ltht-react/styles'

const SquareIcon: FC<CheckIconProps> = ({ size, ...rest }) => {
  const sizeInPixels = calculateIconSize(size)
  return (
    <span
      style={{ border: '1px solid black', width: sizeInPixels, height: sizeInPixels, display: 'inline-block' }}
      {...rest}
    />
  )
}

const calculateIconSize = (input: IconSizes): string => {
  switch (input) {
    case 'small':
      return '8px'
    case 'medium':
      return '10px'
    case 'large':
      return '15px'
    default:
      return '10px'
  }
}

interface CheckIconProps {
  size: IconSizes
}

export default SquareIcon
