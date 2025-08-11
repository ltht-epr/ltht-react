import { IconType, IconSize, IconColor, IconDirection } from '@ltht-react/styles'
import { FC, HTMLAttributes } from 'react'
import {
  IconDefinition,
  faBullseye,
  faCalendar,
  faCircle,
  faCaretSquareDown,
  faCheck,
  faCheckSquare,
  faChevronCircleUp,
  faChevronCircleDown,
  faChevronCircleLeft,
  faChevronCircleRight,
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faColumns,
  faCommentDots,
  faTimes,
  faDotCircle,
  faEdit,
  faEllipsisH,
  faEllipsisV,
  faExclamationTriangle,
  faExternalLinkAlt,
  faFilter,
  faFolderPlus,
  faGripHorizontal,
  faBars,
  faInfoCircle,
  faKeyboard,
  faLayerGroup,
  faListUl,
  faPause,
  faPlay,
  faPlus,
  faSearch,
  faSync,
  faSquareFull,
  faStar,
  faStop,
  faTable,
  faThumbsUp,
  faToggleOn,
  faToggleOff,
  faTrashAlt,
  faUser,
  faUsers,
  faClockRotateLeft,
  faPaperclip,
  faUnlink,
  faLink,
  faLinkSlash,
  faMinus,
  faSquareMinus,
  faCircleMinus,
  faCircleXmark,
  faThumbsDown,
  faExpand,
  faExpandAlt,
  faExpandArrowsAlt,
} from '@fortawesome/free-solid-svg-icons'
import { Transform } from '@fortawesome/fontawesome-svg-core'
import CounterIcon from '../molecules/counter-icon'
import StyledIcon, { IconAnimation } from '../atoms/styled-icon'

const calculateChevronCircleIcon = (direction: IconDirection): IconDefinition => {
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

const calculateChevronIcon = (direction: IconDirection): IconDefinition => {
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

const Icon: FC<IconProps> = ({
  type,
  size,
  color = 'black',
  direction = 'up',
  counterValue,
  animation,
  clickHandler,
  ...rest
}) => {
  let icon: IconDefinition
  let transform: string | Transform | undefined
  let iconColor = color
  let iconAnimation = animation

  switch (type) {
    case 'bullseye': {
      icon = faBullseye
      break
    }

    case 'calendar': {
      icon = faCalendar
      break
    }

    case 'caret-square-down': {
      icon = faCaretSquareDown
      break
    }

    case 'check': {
      icon = faCheck
      break
    }

    case 'checkbox': {
      icon = faCheckSquare
      break
    }

    case 'chevron-circle': {
      icon = calculateChevronCircleIcon(direction)
      break
    }

    case 'chevron': {
      icon = calculateChevronIcon(direction)
      break
    }

    case 'circle': {
      icon = faCircle
      transform = { rotate: 180 }
      break
    }

    case 'clock-rotate-left': {
      icon = faClockRotateLeft
      break
    }

    case 'column': {
      icon = faColumns
      break
    }

    case 'comment': {
      icon = faCommentDots
      break
    }

    case 'counter': {
      return <CounterIcon size={size} color={iconColor} value={counterValue ?? 0} {...rest} />
    }

    case 'cross': {
      icon = faTimes
      break
    }

    case 'dot-circle': {
      icon = faDotCircle
      transform = { rotate: 180 }
      break
    }

    case 'edit': {
      icon = faEdit
      break
    }

    case 'ellipsis-horizontal': {
      icon = faEllipsisH
      break
    }

    case 'ellipsis-vertical': {
      icon = faEllipsisV
      break
    }

    case 'exclamation': {
      icon = faExclamationTriangle
      break
    }

    case 'external-link': {
      icon = faExternalLinkAlt
      if (iconColor === 'black') {
        iconColor = 'link-blue'
      }
      break
    }

    case 'filter': {
      icon = faFilter
      break
    }

    case 'folder-plus': {
      icon = faFolderPlus
      break
    }

    case 'grid-layout': {
      icon = faGripHorizontal
      break
    }

    case 'hamburger': {
      icon = faBars
      break
    }

    case 'info-circle': {
      icon = faInfoCircle
      break
    }

    case 'keyboard': {
      icon = faKeyboard
      break
    }

    case 'layer-group': {
      icon = faLayerGroup
      break
    }

    case 'list-layout': {
      icon = faListUl
      break
    }

    case 'pause': {
      icon = faPause
      break
    }

    case 'play': {
      icon = faPlay
      break
    }

    case 'plus': {
      icon = faPlus
      break
    }

    case 'search': {
      icon = faSearch
      break
    }

    case 'spinner': {
      icon = faSync
      if (iconAnimation === undefined) {
        iconAnimation = { spin: true }
      }
      break
    }

    case 'square': {
      icon = faSquareFull
      break
    }

    case 'star': {
      icon = faStar
      break
    }

    case 'stop': {
      icon = faStop
      break
    }

    case 'table': {
      icon = faTable
      transform = { rotate: 180 }
      break
    }

    case 'thumbs-down': {
      icon = faThumbsDown
      break
    }

    case 'thumbs-up': {
      icon = faThumbsUp
      break
    }

    case 'toggle-off': {
      icon = faToggleOff
      break
    }

    case 'toggle-on': {
      icon = faToggleOn
      break
    }

    case 'trash': {
      icon = faTrashAlt
      if (iconColor === 'black') {
        iconColor = 'link-blue'
      }
      break
    }

    case 'user': {
      icon = faUser
      break
    }

    case 'users': {
      icon = faUsers
      break
    }

    case 'paper-clip': {
      icon = faPaperclip
      break
    }

    case 'unlink': {
      icon = faUnlink
      break
    }

    case 'link': {
      icon = faLink
      break
    }

    case 'link-slash': {
      icon = faLinkSlash
      break
    }

    case 'minus': {
      icon = faMinus
      break
    }
    case 'minus-square': {
      icon = faSquareMinus
      break
    }
    case 'minus-circle': {
      icon = faCircleMinus
      break
    }
    case 'cross-circle': {
      icon = faCircleXmark
      break
    }
    case 'expand': {
      icon = faExpand
      break
    }
    case 'expand-alt': {
      icon = faExpandAlt
      break
    }
    case 'expand-arrows-alt': {
      icon = faExpandArrowsAlt
      break
    }

    default:
      throw new Error('Icon definition not implemented')
  }

  return (
    <StyledIcon
      type={type}
      customSize={size}
      icon={icon}
      color={iconColor}
      transform={transform}
      animation={iconAnimation}
      clickHandler={clickHandler}
      {...rest}
    />
  )
}

export interface IconProps extends HTMLAttributes<SVGElement> {
  type: IconType
  size: IconSize
  color?: IconColor
  direction?: IconDirection
  counterValue?: number
  animation?: IconAnimation
  clickHandler?: () => void
}

export default Icon
