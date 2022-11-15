import Button, { ButtonProps } from '@ltht-react/button/lib/atoms/button'
import { Icon, IconButton, IconProps } from '@ltht-react/icon'
import { FC, HTMLAttributes, useState } from 'react'

const defaultMenuButtonProps: IconButtonMenuProps = {
  type: 'icon',
  iconProps: {
    type: 'ellipsis-vertical',
    size: 'large',
  },
}

const ActionMenu: FC<IProps> = ({
  actions,
  menuButtonOptions = defaultMenuButtonProps,
  id = 'action-menu-button',
  ...rest
}) => {
  const [showMenu, setShowMenu] = useState(false)

  const menuButtonClickHandler = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      {menuButtonOptions.type === 'icon' && (
        <IconButton
          iconProps={menuButtonOptions.iconProps}
          text={menuButtonOptions.text}
          {...rest}
          onClick={menuButtonClickHandler}
          id={id}
        />
      )}
      {menuButtonOptions.type === 'button' && (
        <Button
          {...menuButtonOptions.buttonProps}
          {...rest}
          value={menuButtonOptions.text}
          onClick={menuButtonClickHandler}
          id={id}
        >
          {menuButtonOptions.text}
        </Button>
      )}
      {showMenu && (
        <ul role="menu" aria-labelledby={id} aria-haspopup={true}>
          {actions.map((action, idx) => (
            <li
              role="menuitem"
              key={`menu-action-${idx}`}
              onClick={() => {
                menuButtonClickHandler()
                action.clickHandler()
              }}
            >
              {action.leftIcon && <Icon {...action.leftIcon}></Icon>}
              {action.text}
              {action.rightIcon && <Icon {...action.rightIcon}></Icon>}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  actions: ActionMenuOption[]
  menuButtonOptions?: IconButtonMenuProps | ButtonMenuProps
}

interface IconButtonMenuProps {
  type: 'icon'
  iconProps: IconProps
  text?: string
}

interface ButtonMenuProps {
  type: 'button'
  buttonProps: ButtonProps
  text: string
}

export interface ActionMenuOption {
  text: string
  clickHandler: () => void
  leftIcon?: IconProps
  rightIcon?: IconProps
}

export default ActionMenu
