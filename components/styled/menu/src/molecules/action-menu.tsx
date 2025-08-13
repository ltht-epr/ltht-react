import Icon, { IconProps } from '@ltht-react/icon'
import { FC, HTMLAttributes, ReactNode } from 'react'
import { stringToHtmlId } from '@ltht-react/utils'
import { Menu, MenuItem } from './dropdown-menu'

type IconPlacement = 'left' | 'right'

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  actions: ActionMenuOption[]
  text?: string
  icon?: IconProps
  placement?: IconPlacement
  disabled?: boolean
}

export interface ActionMenuOption extends HTMLAttributes<HTMLButtonElement> {
  text: string
  clickHandler?: VoidFunction
  icon?: IconProps
  iconPlacement?: IconPlacement
  disabled?: boolean
  actions?: ActionMenuOption[]
}

const defaultTriggerIcon: IconProps = {
  type: 'ellipsis-vertical',
  size: 'large',
}

const ActionMenu: FC<IProps> = ({ id = 'action-menu-button', actions, text, icon, ...rest }) => {
  const menuItemIdPrefix = id ? `${id}-` : ''
  const finalIcon = (!text || text === '') && !icon ? defaultTriggerIcon : icon

  return (
    <Menu label={text} icon={finalIcon ? <Icon {...finalIcon} /> : null} {...rest}>
      {actions.map((action, index) => renderAction(menuItemIdPrefix, action, index))}
    </Menu>
  )
}

const renderAction = (
  idPrefix: string,
  { text, icon, iconPlacement = 'left', clickHandler, onClick, actions, ...rest }: ActionMenuOption,
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
        icon={icon ? <Icon {...icon} /> : null}
        iconPlacement={iconPlacement}
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
      icon={icon ? <Icon {...icon} /> : null}
      iconPlacement={iconPlacement}
      onClick={clickHandler ?? onClick}
      {...rest}
    />
  )
}

export default ActionMenu
