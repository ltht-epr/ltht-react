import { IconType, IconSize, IconStatus, IconDirection } from '@ltht-react/styles'
import { FC, HTMLAttributes } from 'react'
import BullseyeIcon from '../atoms/bullseye-icon'
import CalendarIcon from '../atoms/calendar-icon'
import CaretSquareDownIcon from '../atoms/caret-square-down-icon'
import CheckIcon from '../atoms/check-icon'
import CheckboxIcon from '../atoms/checkbox-icon'
import ChevronCircleIcon from '../atoms/chevron-circle-icon'
import ChevronIcon from '../atoms/chevron-icon'
import CircleIcon from '../atoms/circle-icon'
import ColumnIcon from '../atoms/column-icon'
import CommentIcon from '../atoms/comment-icon'
import CounterIcon from '../atoms/counter-icon'
import CrossIcon from '../atoms/cross-icon'
import DotCircleIcon from '../atoms/dot-circle-icon'
import EditIcon from '../atoms/edit-icon'
import EllipsisHorizontalIcon from '../atoms/ellipsis-horizontal'
import EllipsisVerticalIcon from '../atoms/ellipsis-vertical'
import ExclamationIcon from '../atoms/exclamation-icon'
import ExternalLinkIcon from '../atoms/external-link-icon'
import FilterIcon from '../atoms/filter-icon'
import FolderPlusIcon from '../atoms/folder-plus'
import GridLayoutIcon from '../atoms/grid-layout-icon'
import HamburgerIcon from '../atoms/hamburger-icon'
import InfoCircleIcon from '../atoms/info-circle-icon'
import KeyboardIcon from '../atoms/keyboard-icon'
import LayerGroupIcon from '../atoms/layer-group'
import ListLayoutIcon from '../atoms/list-layout-icon'
import PauseIcon from '../atoms/pause-icon'
import PlayIcon from '../atoms/play-icon'
import PlusIcon from '../atoms/plus-icon'
import SearchIcon from '../atoms/search-icon'
import SpinnerIcon from '../atoms/spinner-icon'
import SquareIcon from '../atoms/square-icon'
import StarIcon from '../atoms/star-icon'
import StopIcon from '../atoms/stop-icon'
import TableIcon from '../atoms/table-icon'
import ToggleOffIcon from '../atoms/toggle-off-icon'
import ToggleOnIcon from '../atoms/toggle-on-icon'
import TrashIcon from '../atoms/trash-icon'
import UserIcon from '../atoms/user-icon'

const Icon: FC<IconProps> = ({ type, size, status, direction, counterValue, animate, ...rest }) => {
  switch (type) {
    case 'bullseye': {
      return <BullseyeIcon size={size} {...rest} />
    }

    case 'calendar': {
      return <CalendarIcon size={size} {...rest} />
    }

    case 'caret-square-down': {
      return <CaretSquareDownIcon size={size} {...rest} />
    }

    case 'check': {
      return <CheckIcon size={size} {...rest} />
    }

    case 'chevron-circle': {
      return <ChevronCircleIcon size={size} direction={direction ?? 'up'} {...rest} />
    }

    case 'chevron': {
      return <ChevronIcon size={size} direction={direction ?? 'up'} {...rest} />
    }

    case 'circle': {
      return <CircleIcon size={size} status={status ?? 'default'} {...rest} />
    }

    case 'column': {
      return <ColumnIcon size={size} status={status ?? 'default'} {...rest} />
    }

    case 'comment': {
      return <CommentIcon size={size} {...rest} />
    }

    case 'counter': {
      return <CounterIcon size={size} status={status ?? 'default'} value={counterValue ?? 0} {...rest} />
    }

    case 'cross': {
      return <CrossIcon size={size} status={status ?? 'default'} {...rest} />
    }

    case 'edit': {
      return <EditIcon size={size} status={status} {...rest} />
    }

    case 'ellipsis-horizontal': {
      return <EllipsisHorizontalIcon size={size} {...rest} />
    }

    case 'ellipsis-vertical': {
      return <EllipsisVerticalIcon size={size} {...rest} />
    }

    case 'exclamation': {
      return <ExclamationIcon size={size} status={status ?? 'default'} {...rest} />
    }

    case 'external-link': {
      return <ExternalLinkIcon size={size} {...rest} />
    }

    case 'filter': {
      return <FilterIcon size={size} {...rest} />
    }

    case 'folder-plus': {
      return <FolderPlusIcon size={size} {...rest} />
    }

    case 'grid-layout': {
      return <GridLayoutIcon size={size} {...rest} />
    }

    case 'hamburger': {
      return <HamburgerIcon size={size} {...rest} />
    }

    case 'info-circle': {
      return <InfoCircleIcon size={size} status={status ?? 'default'} {...rest} />
    }

    case 'keyboard': {
      return <KeyboardIcon size={size} {...rest} />
    }

    case 'layer-group': {
      return <LayerGroupIcon size={size} {...rest} />
    }

    case 'list-layout': {
      return <ListLayoutIcon size={size} {...rest} />
    }

    case 'pause': {
      return <PauseIcon size={size} {...rest} />
    }

    case 'play': {
      return <PlayIcon size={size} {...rest} />
    }

    case 'plus': {
      return <PlusIcon size={size} {...rest} />
    }

    case 'spinner': {
      return <SpinnerIcon size={size} animate={animate} {...rest} />
    }

    case 'star': {
      return <StarIcon size={size} {...rest} />
    }

    case 'stop': {
      return <StopIcon size={size} {...rest} />
    }

    case 'table': {
      return <TableIcon size={size} status={status ?? 'default'} {...rest} />
    }

    case 'toggle-off': {
      return <ToggleOffIcon size={size} {...rest} />
    }

    case 'toggle-on': {
      return <ToggleOnIcon size={size} {...rest} />
    }

    case 'trash': {
      return <TrashIcon size={size} {...rest} />
    }

    case 'user': {
      return <UserIcon size={size} {...rest} />
    }

    case 'dot-circle': {
      return <DotCircleIcon size={size} status={status ?? 'default'} {...rest} />
    }

    case 'search': {
      return <SearchIcon size={size} {...rest} />
    }

    case 'checkbox': {
      return <CheckboxIcon size={size} {...rest} />
    }

    case 'square': {
      return <SquareIcon size={size} {...rest} />
    }

    default: {
      return <SquareIcon size={size} {...rest} />
    }
  }
}

export interface IconProps extends HTMLAttributes<SVGElement> {
  type: IconType
  size: IconSize
  status?: IconStatus
  direction?: IconDirection
  counterValue?: number
  animate?: boolean
}

export default Icon
