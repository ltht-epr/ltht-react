import { useMemo, MouseEvent, FC, useCallback } from 'react'
import Icon from '@ltht-react/icon'
import { stringToHtmlId } from '@ltht-react/utils'
import { useFullScreen } from '@ltht-react/hooks'
import { ActionMenuOption as IActionMenuOption } from './action-menu'
import { Menu, MenuItem } from './menu'

interface Props extends IActionMenuOption {
  idPrefix: string
  index: number
}

// Utility function to generate consistent IDs
const generateActionId = (idPrefix: string, text: string, index: number): string => {
  const textId = stringToHtmlId(text)
  return `${idPrefix}action-menu-item-${textId}-${index}`
}

const ActionMenuOption: FC<Props> = ({
  idPrefix,
  index,
  text,
  leftIcon,
  rightIcon,
  actions,
  exitFullScreenOnClick = false,
  clickHandler,
  onClick,
  disabled = false,
  ...rest
}) => {
  const { isFullscreen, exitFullScreen } = useFullScreen()

  // Memoize the action ID to prevent recalculation on every render
  const actionMenuItemId = useMemo(() => generateActionId(idPrefix, text, index), [idPrefix, text, index])

  // Memoize icons to prevent unnecessary re-renders
  const leftIconElement = useMemo(() => leftIcon && <Icon {...leftIcon} />, [leftIcon])

  const rightIconElement = useMemo(() => rightIcon && <Icon {...rightIcon} />, [rightIcon])

  const handleOnClick = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()

      if (disabled) {
        return
      }

      if (!clickHandler && !onClick) {
        return
      }

      if (exitFullScreenOnClick && isFullscreen) {
        await exitFullScreen()
      }

      // Execute the appropriate handler
      if (clickHandler) {
        clickHandler()
      } else if (onClick) {
        onClick(e)
      }
    },
    [disabled, clickHandler, onClick, exitFullScreenOnClick, isFullscreen, exitFullScreen]
  )

  // Determine if this is a submenu (has actions)
  const isSubmenu = actions && actions.length > 0

  // Common props for both Menu and MenuItem
  const commonProps = useMemo(
    () => ({
      id: actionMenuItemId,
      'data-testid': actionMenuItemId,
      label: text,
      leftIcon: leftIconElement,
      rightIcon: rightIconElement,
      disabled,
      ...rest,
    }),
    [actionMenuItemId, text, leftIconElement, rightIconElement, disabled, rest]
  )

  if (isSubmenu) {
    return (
      <Menu {...commonProps} aria-label={`${text} submenu`} aria-expanded="false">
        {actions.map((action, actionIndex) => (
          <ActionMenuOption
            key={`${actionMenuItemId}_menu_item_${actionIndex}`}
            idPrefix={`${actionMenuItemId}_`}
            index={actionIndex}
            {...action}
          />
        ))}
      </Menu>
    )
  }

  return <MenuItem {...commonProps} onClick={handleOnClick} aria-label={text} />
}

export default ActionMenuOption
