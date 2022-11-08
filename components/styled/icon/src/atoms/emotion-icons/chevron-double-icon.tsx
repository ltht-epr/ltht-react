import { FC, HTMLAttributes, MouseEvent } from 'react'
import { IconDirection } from '@ltht-react/styles'
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

const ChevronDoubleIcon: FC<Props> = ({ size, direction, clickHandler, className, ...rest }) => {
  const handleClick = (e: MouseEvent<SVGSVGElement>): void => {
    e.preventDefault()
    e.stopPropagation()
    clickHandler && clickHandler()
  }

  const Icon = calculateIconType(direction)
  return (
    <>
      <Icon
        className={`${className ?? ''} icon__chevron`.trimStart()}
        size={size}
        onClick={clickHandler && handleClick}
        {...rest}
      />
    </>
  )
}

type IconTypes =
  | typeof ChevronDoubleUp
  | typeof ChevronDoubleDown
  | typeof ChevronDoubleLeft
  | typeof ChevronDoubleRight

interface Props extends HTMLAttributes<SVGElement> {
  direction: IconDirection
  size: string | number
  clickHandler?(): void
}

export default ChevronDoubleIcon
