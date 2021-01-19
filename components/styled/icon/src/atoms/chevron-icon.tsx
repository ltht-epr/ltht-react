/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronCircleDown,
  faChevronCircleUp,
  faChevronCircleLeft,
  faChevronCircleRight,
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { ICON_COLOURS, IconSizes, calculateIconSize } from '@ltht-react/styles'

const styles = css`
  color: ${ICON_COLOURS.DEFAULT};
`

const calculateIconType = (direction: IconDirection, circleIcon: boolean): IconTypes => {
  switch (direction) {
    default:
    case 'up':
      return circleIcon ? faChevronCircleUp : faChevronUp
    case 'down':
      return circleIcon ? faChevronCircleDown : faChevronDown
    case 'left':
      return circleIcon ? faChevronCircleLeft : faChevronLeft
    case 'right':
      return circleIcon ? faChevronCircleRight : faChevronRight
  }
}

const ChevronCircleIcon: React.FC<Props> = ({ size, direction, clickHandler }) => {
  const handleClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>): void => {
    e.preventDefault()
    clickHandler && clickHandler()
  }
  return (
    <FontAwesomeIcon
      css={styles}
      icon={calculateIconType(direction, true)}
      size={calculateIconSize(size)}
      onClick={clickHandler && handleClick}
    />
  )
}

const ChevronIcon: React.FC<Props> = ({ size, direction, clickHandler }) => {
  const handleClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>): void => {
    e.preventDefault()
    clickHandler && clickHandler()
  }
  return (
    <FontAwesomeIcon
      css={styles}
      icon={calculateIconType(direction, false)}
      size={calculateIconSize(size)}
      onClick={clickHandler && handleClick}
    />
  )
}

type IconTypes =
  | typeof faChevronUp
  | typeof faChevronDown
  | typeof faChevronLeft
  | typeof faChevronRight
  | typeof faChevronCircleUp
  | typeof faChevronCircleDown
  | typeof faChevronCircleLeft
  | typeof faChevronCircleRight

type IconDirection = 'up' | 'down' | 'left' | 'right'

interface Props {
  direction: IconDirection
  size: IconSizes
  clickHandler?(): void
}

export { ChevronIcon, ChevronCircleIcon }
