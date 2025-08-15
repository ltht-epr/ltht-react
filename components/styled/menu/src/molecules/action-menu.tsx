import { FC, HTMLAttributes } from 'react'
import { IconProps } from '@ltht-react/icon'
import { ButtonProps } from '@ltht-react/button'

import { Menu } from './menu'
import MenuOption from './action-menu-option'

interface IProps<T extends HTMLElement = HTMLElement> extends HTMLAttributes<HTMLButtonElement> {
  actions: ActionMenuOption[]
  menuButtonOptions?: IconButtonMenuProps | ButtonMenuProps
  disabled?: boolean
  root?: React.MutableRefObject<T | null>
}

interface IconButtonMenuProps {
  type: 'icon'
  iconProps: IconProps
  text?: string
  disabled?: boolean
}

interface ButtonMenuProps {
  type: 'button'
  buttonProps: ButtonProps
  text: string
}

export interface ActionMenuOption extends HTMLAttributes<HTMLButtonElement> {
  text: string
  clickHandler?: VoidFunction
  leftIcon?: IconProps
  rightIcon?: IconProps
  disabled?: boolean
  exitFullScreenOnClick?: boolean
  actions?: ActionMenuOption[]
}

export const DefaultTrigger: IconButtonMenuProps = {
  type: 'icon',
  iconProps: {
    type: 'ellipsis-vertical',
    size: 'large',
  },
}

const ActionMenu: FC<IProps> = ({
  id = 'action-menu-button',
  actions,
  disabled,
  menuButtonOptions = { ...DefaultTrigger, disabled },
  ...rest
}) => {
  const menuItemIdPrefix = id ? `${id}-` : ''

  return (
    <Menu rootTrigger={menuButtonOptions} data-testid={id} {...rest}>
      {actions.map((action, index) => (
        <MenuOption
          key={`${menuItemIdPrefix}_menu_item_${index}`}
          idPrefix={menuItemIdPrefix}
          index={index}
          {...action}
        />
      ))}
    </Menu>
  )
}

export default ActionMenu
