import { FC, MouseEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { IconSizes, calculateIconSize } from '@ltht-react/styles'

const calculateIconType = (direction: IconDirection): IconTypes => {
  switch (direction) {
    case 'up':
      return faChevronUp
    case 'down':
      return faChevronDown
    case 'left':
      return faChevronLeft
    case 'right':
      return faChevronRight
    default:
      return faChevronUp
  }
}

const ChevronIcon: FC<Props> = ({ size, direction, clickHandler }) => {
  const handleClick = (e: MouseEvent<SVGSVGElement>): void => {
    e.preventDefault()
    e.stopPropagation()
    clickHandler && clickHandler()
  }

  return (
    <FontAwesomeIcon
      className="icon__chevron"
      icon={calculateIconType(direction)}
      size={calculateIconSize(size)}
      onClick={clickHandler && handleClick}
    />
  )
}

type IconTypes = typeof faChevronUp | typeof faChevronDown | typeof faChevronLeft | typeof faChevronRight

type IconDirection = 'up' | 'down' | 'left' | 'right'

interface Props {
  direction: IconDirection
  size: IconSizes
  clickHandler?(): void
}

export default ChevronIcon
