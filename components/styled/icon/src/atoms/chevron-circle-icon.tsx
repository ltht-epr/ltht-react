import { FC, HTMLAttributes, MouseEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronCircleDown,
  faChevronCircleUp,
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons'
import { IconSizes, calculateIconSize } from '@ltht-react/styles'

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

const ChevronCircleIcon: FC<Props> = ({ size, direction, clickHandler, ...rest }) => {
  const handleClick = (e: MouseEvent<SVGSVGElement>): void => {
    e.preventDefault()
    e.stopPropagation()
    clickHandler && clickHandler()
  }

  return (
    <div {...rest}>
      <FontAwesomeIcon
        className="icon__chevron-circle"
        icon={calculateIconType(direction)}
        size={calculateIconSize(size)}
        onClick={clickHandler && handleClick}
      />
    </div>
  )
}

type IconTypes =
  | typeof faChevronCircleUp
  | typeof faChevronCircleDown
  | typeof faChevronCircleLeft
  | typeof faChevronCircleRight

type IconDirection = 'up' | 'down' | 'left' | 'right'

interface Props extends HTMLAttributes<HTMLDivElement> {
  direction: IconDirection
  size: IconSizes
  clickHandler?(): void
}

export default ChevronCircleIcon
