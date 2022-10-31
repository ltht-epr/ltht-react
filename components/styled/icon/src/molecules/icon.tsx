import { IconType, IconSize, IconStatus, IconDirection } from '@ltht-react/styles'
import { FC, HTMLAttributes } from 'react'
import {
  BullseyeIcon,
  CalendarIcon,
  CheckboxIcon,
  CheckIcon,
  ChevronCircleIcon,
  ChevronIcon,
  CircleIcon,
  ColumnIcon,
  CommentIcon,
  CounterIcon,
  CrossIcon,
  DotCircleIcon,
  EditIcon,
  EllipsisHorizontalIcon,
  EllipsisVerticalIcon,
  ExclamationIcon,
  ExternalLinkIcon,
  FilterIcon,
  FolderPlusIcon,
  GridLayoutIcon,
  HamburgerIcon,
  InfoCircleIcon,
  LayerGroupIcon,
  ListLayoutIcon,
  PauseIcon,
  PlayIcon,
  PlusIcon,
  SearchIcon,
  SpinnerIcon,
  SquareIcon,
  StopIcon,
  TableIcon,
  ToggleOffIcon,
  ToggleOnIcon,
  TrashIcon,
  UserIcon,
} from '../atoms'

const Icon: FC<IconProps> = ({ type, size, status, direction, counterValue, ...rest }) => {
  switch (type) {
    case 'bullseye': {
      return <BullseyeIcon size={size} {...rest} />
    }
    case 'calendar': {
      return <CalendarIcon size={size} {...rest} />
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
      return <CrossIcon size={size} {...rest} />
    }

    case 'edit': {
      return <EditIcon size={size} {...rest} />
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
      return <SpinnerIcon size={size} {...rest} />
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
}

export default Icon
