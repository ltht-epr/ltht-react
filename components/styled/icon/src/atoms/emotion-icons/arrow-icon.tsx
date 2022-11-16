import { FC, HTMLAttributes } from 'react'
import { calculateEmotionIconSize, IconDirection, IconSize } from '@ltht-react/styles'
import { DownArrow, UpArrow, LeftArrow, RightArrow } from '@emotion-icons/boxicons-solid'

const calculateIconType = (direction: IconDirection): IconTypes => {
  switch (direction) {
    default:
    case 'up':
      return UpArrow
    case 'down':
      return DownArrow
    case 'left':
      return LeftArrow
    case 'right':
      return RightArrow
  }
}

const buildClassesForIcon = (className: string | undefined, direction: IconDirection): string =>
  `${className ?? ''} icon__arrow--${direction}`.trimStart()

const ArrowIcon: FC<Props> = ({ size, direction, className, ...rest }) => {
  const Icon = calculateIconType(direction)
  return <Icon className={buildClassesForIcon(className, direction)} size={calculateEmotionIconSize(size)} {...rest} />
}

type IconTypes = typeof DownArrow | typeof UpArrow | typeof LeftArrow | typeof RightArrow

interface Props extends HTMLAttributes<SVGElement> {
  size: IconSize
  direction: IconDirection
}

export default ArrowIcon