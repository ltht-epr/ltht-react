import styled from '@emotion/styled'
import Button, { ButtonProps } from '@ltht-react/button/lib/atoms/button'
import { Icon, IconButton, IconProps } from '@ltht-react/icon'
import { BTN_COLOURS, CSS_RESET, PopUp, TableDataWithPopUp, getZIndex } from '@ltht-react/styles'
import FocusTrap from 'focus-trap-react'
import { FC, HTMLAttributes, useRef, useState, useEffect } from 'react'
import { usePopper } from 'react-popper'

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
  display: flex;
  border-radius: 4px;

  &:hover {
    background: ${BTN_COLOURS.PRIMARY.VALUE};
    cursor: pointer;
    color: white;
  }
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
  margin-left: auto;
  color: ${BTN_COLOURS.STANDARD.VALUE};
`

const StyledLeftIcon = styled(Icon)`
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  color: ${BTN_COLOURS.STANDARD.VALUE};
`

const StyledMenuButtonWrapper = styled.div`
  display: inline-block;
`

const ActionMenu: FC<IProps> = ({
  actions,
  menuButtonOptions = defaultMenuButtonProps,
  id = 'action-menu-button',
  popupStyle = {},
  ...rest
}) => {
  const popperRef = useRef<HTMLDivElement>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)
  const [containerElement, setContainerElement] = useState<HTMLDivElement | null>(null)

  const popper = usePopper(popperRef.current, popperElement, {
    placement: 'bottom-start',
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
              onClick={menuButtonClickHandler}
              id={id}
            />
          )}
          {menuButtonOptions.type === 'button' && (
            <Button {...menuButtonOptions.buttonProps} {...rest} onClick={menuButtonClickHandler} id={id}>
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
                {actions.map((action, idx) => (
                  <StyledListItem
                    role="menuitem"
                    key={`menu-action-${idx}`}
                    onClick={() => {
                      menuButtonClickHandler()
                      action.clickHandler()
                    }}
                  >
                    {action.leftIcon && <StyledLeftIcon {...action.leftIcon} />}
                    {action.text}
                    {action.rightIcon && <StyledRightIcon {...action.rightIcon} />}
                  </StyledListItem>
                ))}
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
