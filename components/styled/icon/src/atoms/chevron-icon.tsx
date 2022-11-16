import { FC, HTMLAttributes, MouseEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { IconSize, calculateIconSize, IconDirection } from '@ltht-react/styles'

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

const ChevronIcon: FC<Props> = ({ size, direction, clickHandler, className, ...rest }) => {
  const handleClick = (e: MouseEvent<SVGSVGElement>): void => {
    e.preventDefault()
    e.stopPropagation()
    clickHandler && clickHandler()
  }

  return (
    <FontAwesomeIcon
      className={`${className ?? ''} icon__chevron--${direction}`.trimStart()}
      icon={calculateIconType(direction)}
      size={calculateIconSize(size)}
      onClick={clickHandler && handleClick}
      {...rest}
    />
  )
}

type IconTypes = typeof faChevronUp | typeof faChevronDown | typeof faChevronLeft | typeof faChevronRight

interface Props extends HTMLAttributes<SVGElement> {
  direction: IconDirection
  size: IconSize
  clickHandler?(): void
}

export default ChevronIcon
