/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronCircleDown,
  faChevronCircleUp,
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons'
import { ICON_COLOURS, IconSizes, calculateIconSize } from '@ltht-react/styles'

const styles = css`
  color: ${ICON_COLOURS.DEFAULT};
`

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

const ChevronCircleIcon: React.FC<Props> = ({ size, direction, clickHandler }) => {
  const handleClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>): void => {
    e.preventDefault()
    clickHandler && clickHandler()
  }
  return (
    <FontAwesomeIcon
      css={styles}
      icon={calculateIconType(direction)}
      size={calculateIconSize(size)}
      onClick={clickHandler && handleClick}
    />
  )
}

type IconTypes =
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

export default ChevronCircleIcon
