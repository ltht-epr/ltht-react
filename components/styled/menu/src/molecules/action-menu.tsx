import Icon, { IconProps } from '@ltht-react/icon'
import { FC, HTMLAttributes, ReactNode } from 'react'
import { stringToHtmlId } from '@ltht-react/utils'
import { Menu, MenuItem } from './dropdown-menu'
import { ButtonProps } from '@ltht-react/button'

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  actions: ActionMenuOption[]
  menuButtonOptions?: IconButtonMenuProps | ButtonMenuProps
  disabled?: boolean
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
    <Menu rootTrigger={menuButtonOptions} {...rest}>
      {actions.map((action, index) => renderAction(menuItemIdPrefix, action, index))}
    </Menu>
  )
}

const renderAction = (
  idPrefix: string,
  { text, leftIcon, rightIcon, clickHandler, onClick, actions, ...rest }: ActionMenuOption,
  index: number
): ReactNode => {
  const textId = stringToHtmlId(text)
  const actionMenuItemId = `${idPrefix}action-menu-item-${textId}-${index}`

  if (!!actions?.length && actions.length > 0) {
    return (
      <Menu
        key={actionMenuItemId}
        id={actionMenuItemId}
        label={text}
        leftIcon={leftIcon ? <Icon {...leftIcon} /> : null}
        rightIcon={rightIcon ? <Icon {...rightIcon} /> : null}
        {...rest}
      >
        {actions.map((action, index) => renderAction(actionMenuItemId, action, index))}
      </Menu>
    )
  }

  return (
    <MenuItem
      key={actionMenuItemId}
      id={actionMenuItemId}
      label={text}
      leftIcon={leftIcon ? <Icon {...leftIcon} /> : null}
      rightIcon={rightIcon ? <Icon {...rightIcon} /> : null}
      onClick={clickHandler ?? onClick}
      {...rest}
    />
  )
}

export default ActionMenu
