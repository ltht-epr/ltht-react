import { IconType, IconSize, IconStatus, IconDirection } from '@ltht-react/styles'
import { FC, HTMLAttributes } from 'react'
import {
  IconDefinition,
  faBullseye,
  faCalendar,
  faCircle,
  faSquare,
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
  faToggleOn,
  faToggleOff,
  faTrashAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import CounterIcon from '../molecules/counter-icon'
import StyledIcon, { IconAnimation } from '../atoms/styled-icon'
import { Transform } from '@fortawesome/fontawesome-svg-core'

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
  status = 'default',
  direction = 'up',
  counterValue,
  animation,
  clickHandler,
  ...rest
}) => {
  let icon: IconDefinition
  let transform: string | Transform | undefined

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

    case 'column': {
      icon = faColumns
      break
    }

    case 'comment': {
      icon = faCommentDots
      break
    }

    case 'counter': {
      return <CounterIcon size={size} status={status} value={counterValue ?? 0} {...rest} />
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
      if (status === 'default') {
        status = 'link'
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
      status = 'primary'
      break
    }

    case 'spinner': {
      icon = faSync
      status = 'primary'
      if (animation === undefined) {
        animation = { spin: true }
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
      if (status === 'default') {
        status = 'link'
      }
      break
    }

    case 'user': {
      icon = faUser
      break
    }

    default: {
      icon = faSquare
      break
    }
  }

  return (
    <StyledIcon
      type={type}
      customSize={size}
      icon={icon}
      status={status}
      transform={transform}
      animation={animation}
      clickHandler={clickHandler}
      {...rest}
    />
  )
}

export interface IconProps extends HTMLAttributes<SVGElement> {
  type: IconType
  size: IconSize
  status?: IconStatus
  direction?: IconDirection
  counterValue?: number
  animation?: IconAnimation
  clickHandler?: () => void
}

export default Icon
