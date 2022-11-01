import { FC, HTMLAttributes, MouseEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronCircleDown,
  faChevronCircleUp,
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons'
import { IconSize, calculateIconSize, IconDirection } from '@ltht-react/styles'

const calculateIconType = (direction: IconDirection): IconTypes => {
  switch (direction) {
    default:
    case 'up':
      return faChevronCircleUp
    case 'down':
      return faChevronCircleDown
    case 'left':
      return faChevronCircleLeft
    case 'right':
      return faChevronCircleRight
  }
}

const ChevronCircleIcon: FC<Props> = ({ size, direction, clickHandler, className, ...rest }) => {
  const handleClick = (e: MouseEvent<SVGSVGElement>): void => {
    e.preventDefault()
    e.stopPropagation()
    clickHandler && clickHandler()
  }

  return (
    <FontAwesomeIcon
      className={`${className ?? ''} icon__chevron-circle`.trimStart()}
      icon={calculateIconType(direction)}
      size={calculateIconSize(size)}
      onClick={clickHandler && handleClick}
      {...rest}
    />
  )
}

type IconTypes =
  | typeof faChevronCircleUp
  | typeof faChevronCircleDown
  | typeof faChevronCircleLeft
  | typeof faChevronCircleRight

interface Props extends HTMLAttributes<SVGElement> {
  direction: IconDirection
  size: IconSize
  clickHandler?(): void
}

export default ChevronCircleIcon
