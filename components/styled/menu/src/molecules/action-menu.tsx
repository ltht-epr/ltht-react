import styled from '@emotion/styled'
import Button, { ButtonProps } from '@ltht-react/button/lib/atoms/button'
import Icon, { IconButton, IconProps } from '@ltht-react/icon'
import { BTN_COLOURS, CSS_RESET, PopUp, TableDataWithPopUp, getZIndex } from '@ltht-react/styles'
import FocusTrap from 'focus-trap-react'
import { FC, HTMLAttributes, useRef, useState, useEffect } from 'react'
import { usePopper } from 'react-popper'
import { stringToHtmlId } from '@ltht-react/utils'

const defaultMenuButtonProps: IconButtonMenuProps = {
  type: 'icon',
  iconProps: {
    type: 'ellipsis-vertical',
    size: 'large',
  },
}

const StyledUnorderedList = styled.ul`
  ${CSS_RESET}
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const StyledListItem = styled.li`
  ${CSS_RESET}
  background-color: 'white';
  padding: 0.5rem;
  line-height: 1em;
  display: flex;
  border-radius: 4px;

  &:hover {
    background: ${BTN_COLOURS.PRIMARY.VALUE};
    cursor: pointer;
    color: white;
  }
`

const StyledListItemIcon = styled.div`
  flex-basis: 25%;
`

const StyledListItemContent = styled.div`
  flex: 1;
  text-align: left;
`

const StyledCard = styled.div`
  ${CSS_RESET}
  display: inline-block;
  min-width: 10rem;
  z-index: 1;
  background: white;
  border-radius: 4px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.04), 0px 4px 5px rgba(0, 0, 0, 0.06), 0px 2px 4px -1px rgba(0, 0, 0, 0.09);
`

const StyledRightIcon = styled(Icon)`
  margin-right: 0.5rem;
  margin-left: 3rem;
`

const StyledLeftIcon = styled(Icon)`
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`

const StyledMenuButtonWrapper = styled.div`
  display: inline-block;
`

const ActionMenu: FC<IProps> = ({
  actions,
  menuButtonOptions = defaultMenuButtonProps,
  id = 'action-menu-button',
  popupStyle = {},
  popupPlacement = 'bottom-start',
  ...rest
}) => {
  const menuItemIdPrefix = id ? `${id}-` : ''
  const popperRef = useRef<HTMLDivElement>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)
  const [containerElement, setContainerElement] = useState<HTMLDivElement | null>(null)

  const popper = usePopper(popperRef.current, popperElement, {
    placement: popupPlacement,
    strategy: 'fixed',
  })

  const closePopper = () => {
    setShowMenu(false)
  }

  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    if (containerElement?.parentElement?.style) {
      containerElement.parentElement.style.zIndex = showMenu
        ? `${getZIndex(PopUp)}`
        : `${getZIndex(TableDataWithPopUp)}`
    }
  }, [containerElement, showMenu])

  const menuButtonClickHandler = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div ref={setContainerElement}>
      <FocusTrap
        active={showMenu}
        focusTrapOptions={{
          tabbableOptions: {
            displayCheck: 'none',
          },
          initialFocus: false,
          allowOutsideClick: false,
          clickOutsideDeactivates: true,
          onDeactivate: closePopper,
        }}
      >
        <StyledMenuButtonWrapper ref={popperRef}>
          {menuButtonOptions.type === 'icon' && (
            <IconButton
              iconProps={menuButtonOptions.iconProps}
              text={menuButtonOptions.text}
              {...rest}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation()
                menuButtonClickHandler()
              }}
              id={id}
              data-testid={id}
            />
          )}
          {menuButtonOptions.type === 'button' && (
            <Button
              {...menuButtonOptions.buttonProps}
              {...rest}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation()
                menuButtonClickHandler()
              }}
              id={id}
              data-testid={id}
            >
              {menuButtonOptions.text}
            </Button>
          )}
          {showMenu && (
            <StyledCard
              tabIndex={-1}
              ref={setPopperElement}
              style={{ ...popper.styles.popper, ...popupStyle }}
              {...popper.attributes.popper}
            >
              <StyledUnorderedList role="menu" aria-labelledby={id}>
                {actions.map((action, idx) => {
                  const textId = stringToHtmlId(action.text)
                  const actionMenuItemId = `${menuItemIdPrefix}action-menu-item-${textId}-${idx}`

                  return (
                    <StyledListItem
                      data-testid={actionMenuItemId}
                      id={actionMenuItemId}
                      role="menuitem"
                      key={`menu-action-${idx}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        menuButtonClickHandler()
                        action.clickHandler()
                      }}
                    >
                      <StyledListItemIcon>
                        {action.leftIcon && <StyledLeftIcon {...action.leftIcon} />}
                      </StyledListItemIcon>
                      <StyledListItemContent>{action.text}</StyledListItemContent>
                      <StyledListItemIcon>
                        {action.rightIcon && <StyledRightIcon {...action.rightIcon} />}
                      </StyledListItemIcon>
                    </StyledListItem>
                  )
                })}
              </StyledUnorderedList>
            </StyledCard>
          )}
        </StyledMenuButtonWrapper>
      </FocusTrap>
    </div>
  )
}

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  actions: ActionMenuOption[]
  menuButtonOptions?: IconButtonMenuProps | ButtonMenuProps
  popupStyle?: React.CSSProperties
  popupPlacement?: 'bottom-start' | 'right-start'
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
