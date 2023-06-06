export const ICON_SIZE_SMALL = '1rem'
export const ICON_SIZE_MEDIUM = '1rem'
export const ICON_SIZE_LARGE = '1rem'

type FontAwesomeIconSize = 'xs' | 'lg' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x'

export type IconSize = 'small' | 'medium' | 'large'

export type IconStatus = 'red' | 'green' | 'amber' | 'info' | 'default' | 'primary' | 'secondary'

export type IconDirection = 'up' | 'down' | 'left' | 'right'

export type IconType =
  | 'bullseye'
  | 'calendar'
  | 'caret-square-down'
  | 'check'
  | 'chevron-circle'
  | 'chevron'
  | 'circle'
  | 'column'
  | 'comment'
  | 'counter'
  | 'cross'
  | 'edit'
  | 'ellipsis-horizontal'
  | 'ellipsis-vertical'
  | 'exclamation'
  | 'external-link'
  | 'filter'
  | 'folder-plus'
  | 'grid-layout'
  | 'hamburger'
  | 'info-circle'
  | 'keyboard'
  | 'layer-group'
  | 'list-layout'
  | 'pause'
  | 'play'
  | 'plus'
  | 'spinner'
  | 'star'
  | 'stop'
  | 'table'
  | 'toggle-off'
  | 'toggle-on'
  | 'trash'
  | 'user'
  | 'dot-circle'
  | 'search'
  | 'checkbox'
  | 'square'

export const calculateIconSize = (input: IconSize): FontAwesomeIconSize => {
  switch (input) {
    case 'large':
      return 'lg'
    case 'medium':
      return 'sm'
    case 'small':
      return 'xs'
    default:
      return '1x'
  }
}
