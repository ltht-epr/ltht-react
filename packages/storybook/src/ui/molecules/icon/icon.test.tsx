import Icon from '@ltht-react/icon/src/molecules/icon'
import { IconType } from '@ltht-react/styles'
import { render } from '@testing-library/react'

it.each([
  ['bullseye' as IconType],
  ['calendar' as IconType],
  ['check' as IconType],
  ['chevron-circle' as IconType],
  ['chevron' as IconType],
  ['circle' as IconType],
  ['column' as IconType],
  ['comment' as IconType],
  ['counter' as IconType],
  ['cross' as IconType],
  ['edit' as IconType],
  ['ellipsis-horizontal' as IconType],
  ['ellipsis-vertical' as IconType],
  ['exclamation' as IconType],
  ['external-link' as IconType],
  ['filter' as IconType],
  ['folder-plus' as IconType],
  ['grid-layout' as IconType],
  ['hamburger' as IconType],
  ['info-circle' as IconType],
  ['layer-group' as IconType],
  ['list-layout' as IconType],
  ['pause' as IconType],
  ['play' as IconType],
  ['plus' as IconType],
  ['spinner' as IconType],
  ['stop' as IconType],
  ['table' as IconType],
  ['toggle-off' as IconType],
  ['toggle-on' as IconType],
  ['trash' as IconType],
  ['user' as IconType],
  ['dot-circle' as IconType],
  ['search' as IconType],
  ['checkbox' as IconType],
  ['square' as IconType],
])('Renders', (iconName: IconType) => {
  render(<Icon type={iconName} size="small" />)
})
