import { FC, HTMLAttributes, MouseEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { IconSizes, calculateIconSize } from '@ltht-react/styles'

const calculateIconType = (direction: IconDirection): IconTypes => {
  switch (direction) {
    default:
    case 'up':
      return faChevronUp
    case 'down':
      return faChevronDown
    case 'left':
      return faChevronLeft
    case 'right':
      return faChevronRight
  }
}

const ChevronIcon: FC<Props> = ({ size, direction, clickHandler, ...rest }) => {
  const handleClick = (e: MouseEvent<SVGSVGElement>): void => {
    e.preventDefault()
    e.stopPropagation()
    clickHandler && clickHandler()
  }

  return (
    <div {...rest}>
      <FontAwesomeIcon
        className="icon__chevron"
        icon={calculateIconType(direction)}
        size={calculateIconSize(size)}
        onClick={clickHandler && handleClick}
      />
    </div>
  )
}

type IconTypes = typeof faChevronUp | typeof faChevronDown | typeof faChevronLeft | typeof faChevronRight

type IconDirection = 'up' | 'down' | 'left' | 'right'

interface Props extends HTMLAttributes<HTMLDivElement> {
  direction: IconDirection
  size: IconSizes
  clickHandler?(): void
}

export default ChevronIcon
