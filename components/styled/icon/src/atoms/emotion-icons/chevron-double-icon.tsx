import { FC, HTMLAttributes } from 'react'
import { calculateEmotionIconSize, IconDirection, IconSize } from '@ltht-react/styles'
import {
  ChevronDoubleRight,
  ChevronDoubleLeft,
  ChevronDoubleUp,
  ChevronDoubleDown,
} from '@emotion-icons/heroicons-solid'

const calculateIconType = (direction: IconDirection): IconTypes => {
  switch (direction) {
    default:
    case 'up':
      return ChevronDoubleUp
    case 'down':
      return ChevronDoubleDown
    case 'left':
      return ChevronDoubleLeft
    case 'right':
      return ChevronDoubleRight
  }
}

const buildClassesForIcon = (className: string | undefined, direction: IconDirection): string =>
  `${className ?? ''} icon__chevron-double--${direction}`.trimStart()

const ChevronDoubleIcon: FC<Props> = ({ size, direction, className, ...rest }) => {
  const Icon = calculateIconType(direction)
  return <Icon className={buildClassesForIcon(className, direction)} size={calculateEmotionIconSize(size)} {...rest} />
}

type IconTypes =
  | typeof ChevronDoubleUp
  | typeof ChevronDoubleDown
  | typeof ChevronDoubleLeft
  | typeof ChevronDoubleRight

interface Props extends HTMLAttributes<SVGElement> {
  size: IconSize
  direction: IconDirection
}

export default ChevronDoubleIcon