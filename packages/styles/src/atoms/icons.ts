import { SerializedStyles, css } from '@emotion/react'
import { ICON_COLOURS, LINK_COLOURS } from './colours'

export const ICON_SIZE_SMALL = '1rem'
export const ICON_SIZE_MEDIUM = '1rem'
export const ICON_SIZE_LARGE = '1rem'

type FontAwesomeIconSize = 'xs' | 'lg' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x'

export type IconSize = 'small' | 'medium' | 'large'

export type IconColor = 'black' | 'dark-blue' | 'link-blue' | 'grey' | 'info-blue' | 'green' | 'amber' | 'red' | 'white'

export type IconDirection = 'up' | 'down' | 'left' | 'right'

export const iconTypes = [
  'bullseye',
  'calendar',
  'caret-square-down',
  'check',
  'chevron-circle',
  'chevron',
  'circle',
  'clock-rotate-left',
  'column',
  'comment',
  'counter',
  'cross',
  'edit',
  'ellipsis-horizontal',
  'ellipsis-vertical',
  'exclamation',
  'external-link',
  'filter',
  'folder-plus',
  'grid-layout',
  'hamburger',
  'info-circle',
  'keyboard',
  'layer-group',
  'list-layout',
  'pause',
  'play',
  'plus',
  'spinner',
  'star',
  'stop',
  'table',
  'thumbs-down',
  'thumbs-up',
  'toggle-off',
  'toggle-on',
  'trash',
  'user',
  'users',
  'dot-circle',
  'search',
  'checkbox',
  'square',
  'paper-clip',
  'unlink',
  'link',
  'link-slash',
  'do-not-use!',
  'minus',
  'minus-square',
  'minus-circle',
  'cross-circle',
  'expand',
  'expand-alt',
  'expand-arrows-alt',
  'compress',
  'compress-alt',
  'compress-arrows-alt',
] as const

export type IconType = (typeof iconTypes)[number]

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

export const calculateIconColor = (color: IconColor): SerializedStyles => css`
  ${color === 'black' && `color: ${ICON_COLOURS.PRIMARY};`}
  ${color === 'dark-blue' && `color: ${ICON_COLOURS.SECONDARY};`}
  ${color === 'link-blue' && `color: ${LINK_COLOURS.TEXT.DEFAULT};`}
  ${color === 'grey' && `color: ${ICON_COLOURS.GREY.VALUE};`}
  ${color === 'info-blue' && `color: ${ICON_COLOURS.INFO};`}
  ${color === 'green' && `color: ${ICON_COLOURS.SUCCESS.VALUE};`}
  ${color === 'amber' && `color: ${ICON_COLOURS.WARNING};`}
  ${color === 'red' && `color: ${ICON_COLOURS.DANGER};`}
  ${color === 'white' && `color: ${ICON_COLOURS.WHITE};`}
`
