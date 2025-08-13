import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingList,
  FloatingNode,
  FloatingPortal,
  FloatingTree,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingTree,
  useHover,
  useInteractions,
  useListItem,
  useListNavigation,
  useMergeRefs,
  useRole,
  useTypeahead,
} from '@floating-ui/react'
import * as React from 'react'
import { forwardRef, ReactNode } from 'react'
import {
  StyledRootMenu,
  StyledMenu,
  StyledMenuItem,
  TextWrapper,
  LeftIconWrapper,
  RightIconWrapper,
} from './dropdown-menu.style'
import { IconButton, IconProps } from '@ltht-react/icon'
import { Button, ButtonProps } from '@ltht-react/button'

const MenuContext = React.createContext<{
  getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>
  activeIndex: number | null
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>
  setHasFocusInside: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
}>({
  getItemProps: () => ({}),
  activeIndex: null,
  setActiveIndex: () => {},
  setHasFocusInside: () => {},
  isOpen: false,
})

/**
 * Props for the Dropdown Menu component.
 *
 * @property {string} [label] - The text label displayed for the menu trigger.
 * @property {ReactNode} [leftIcon] - Optional icon to display alongside the label.
 * @property {ReactNode} [rightIcon] - Optional icon to display alongside the label.
 * @property {boolean} [nested] - Indicates if this menu is nested within another menu.
 * @property {ReactNode} [children] - The menu items or nested menus to render inside the dropdown.
 * @property {RootMenuTrigger} [rootTrigger] - Optional trigger configuration for the root menu.
 */
interface MenuProps {
  label?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  nested?: boolean
  children?: ReactNode
  rootTrigger?: RootMenuTrigger
  disabled?: boolean
}

type RootMenuTrigger = IconButtonMenuProps | ButtonMenuProps

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

export const MenuComponent = forwardRef<HTMLButtonElement, MenuProps & React.HTMLAttributes<HTMLButtonElement>>(
  ({ children, label, leftIcon, rightIcon, ...props }, forwardedRef) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [hasFocusInside, setHasFocusInside] = React.useState(false)
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null)

    const elementsRef = React.useRef<Array<HTMLButtonElement | null>>([])
    const labelsRef = React.useRef<Array<string | null>>([])
    const parent = React.useContext(MenuContext)

    const tree = useFloatingTree()
    const nodeId = useFloatingNodeId()
    const parentId = useFloatingParentNodeId()
    const item = useListItem()

    const isNested = parentId != null

    const { floatingStyles, refs, context } = useFloating<HTMLButtonElement>({
      nodeId,
      open: isOpen,
      onOpenChange: setIsOpen,
      placement: isNested ? 'right-start' : 'bottom-start',
      middleware: [offset({ mainAxis: isNested ? 0 : 4, alignmentAxis: isNested ? -4 : 0 }), flip(), shift()],
      whileElementsMounted: autoUpdate,
    })

    const hover = useHover(context, {
      enabled: isNested,
      delay: { open: 75 },
      handleClose: safePolygon({ blockPointerEvents: true }),
    })
    const click = useClick(context, {
      event: 'mousedown',
      toggle: !isNested,
      ignoreMouse: isNested,
    })
    const role = useRole(context, { role: 'menu' })
    const dismiss = useDismiss(context, { bubbles: true })
    const listNavigation = useListNavigation(context, {
      listRef: elementsRef,
      activeIndex,
      nested: isNested,
      onNavigate: setActiveIndex,
    })
    const typeahead = useTypeahead(context, {
      listRef: labelsRef,
      onMatch: isOpen ? setActiveIndex : undefined,
      activeIndex,
    })

    const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
      hover,
      click,
      role,
      dismiss,
      listNavigation,
      typeahead,
    ])

    // Event emitter allows you to communicate across tree components.
    // This effect closes all menus when an item gets clicked anywhere
    // in the tree.
    React.useEffect(() => {
      if (!tree) return

      function handleTreeClick() {
        setIsOpen(false)
      }

      function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
        if (event.nodeId !== nodeId && event.parentId === parentId) {
          setIsOpen(false)
        }
      }

      tree.events.on('click', handleTreeClick)
      tree.events.on('menuopen', onSubMenuOpen)

      return () => {
        tree.events.off('click', handleTreeClick)
        tree.events.off('menuopen', onSubMenuOpen)
      }
    }, [tree, nodeId, parentId])

    React.useEffect(() => {
      if (isOpen && tree) {
        tree.events.emit('menuopen', { parentId, nodeId })
      }
    }, [tree, isOpen, nodeId, parentId])

    const triggerProps = {
      tabIndex: !isNested ? undefined : parent.activeIndex === item.index ? 0 : -1,
      role: isNested ? 'menuitem' : undefined,
      'data-open': isOpen ? '' : undefined,
      'data-nested': isNested ? '' : undefined,
      'data-focus-inside': hasFocusInside ? '' : undefined,
      style: isNested ? undefined : props.style,
      ...getReferenceProps(
        parent.getItemProps({
          ...props,
          onFocus(event: React.FocusEvent<HTMLButtonElement>) {
            props.onFocus?.(event)
            setHasFocusInside(false)
            parent.setHasFocusInside(true)
          },
        })
      ),
    }

    return (
      <FloatingNode id={nodeId}>
        {!props.rootTrigger && (
          <StyledRootMenu
            ref={useMergeRefs([refs.setReference, item.ref, forwardedRef])}
            {...props}
            {...triggerProps}
            isNested={isNested}
          >
            {leftIcon && <LeftIconWrapper>{leftIcon}</LeftIconWrapper>}
            {label && <TextWrapper>{label}</TextWrapper>}
            {!isNested && rightIcon && <RightIconWrapper>{leftIcon}</RightIconWrapper>}
            {isNested && <RightIconWrapper>▶</RightIconWrapper>}
          </StyledRootMenu>
        )}

        {!isNested && props.rootTrigger?.type === 'icon' && (
          <IconButton
            ref={useMergeRefs([refs.setReference, item.ref, forwardedRef])}
            iconProps={props.rootTrigger.iconProps}
            disabled={props.rootTrigger.disabled}
            text={props.rootTrigger.text}
            {...props}
            {...triggerProps}
          />
        )}

        {!isNested && props.rootTrigger?.type === 'button' && (
          <Button
            ref={useMergeRefs([refs.setReference, item.ref, forwardedRef])}
            {...props.rootTrigger.buttonProps}
            {...triggerProps}
          >
            {props.rootTrigger?.text}
          </Button>
        )}

        <MenuContext.Provider
          value={{
            activeIndex,
            setActiveIndex,
            getItemProps,
            setHasFocusInside,
            isOpen,
          }}
        >
          <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
            {isOpen && (
              <FloatingPortal>
                <FloatingFocusManager
                  context={context}
                  modal={false}
                  initialFocus={isNested ? -1 : 0}
                  returnFocus={!isNested}
                >
                  <StyledMenu ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
                    {children}
                  </StyledMenu>
                </FloatingFocusManager>
              </FloatingPortal>
            )}
          </FloatingList>
        </MenuContext.Provider>
      </FloatingNode>
    )
  }
)

interface MenuItemProps {
  label?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  disabled?: boolean
}

export const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps & React.HTMLAttributes<HTMLButtonElement>>(
  ({ label, leftIcon, rightIcon, disabled, ...props }, forwardedRef) => {
    const menu = React.useContext(MenuContext)
    const item = useListItem({ label: disabled ? null : label })
    const tree = useFloatingTree()
    const isActive = item.index === menu.activeIndex

    return (
      <StyledMenuItem
        {...props}
        ref={useMergeRefs([item.ref, forwardedRef])}
        type="button"
        role="menuitem"
        tabIndex={isActive ? 0 : -1}
        disabled={disabled}
        {...menu.getItemProps({
          onClick(event: React.MouseEvent<HTMLButtonElement>) {
            props.onClick?.(event)
            tree?.events.emit('click')
          },
          onFocus(event: React.FocusEvent<HTMLButtonElement>) {
            props.onFocus?.(event)
            menu.setHasFocusInside(true)
          },
        })}
      >
        {leftIcon && <LeftIconWrapper>{leftIcon}</LeftIconWrapper>}
        <TextWrapper>{label}</TextWrapper>
        {rightIcon && <RightIconWrapper>{rightIcon}</RightIconWrapper>}
      </StyledMenuItem>
    )
  }
)

export const Menu = React.forwardRef<HTMLButtonElement, MenuProps & React.HTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const parentId = useFloatingParentNodeId()

    if (parentId === null) {
      return (
        <FloatingTree>
          <MenuComponent {...props} ref={ref} />
        </FloatingTree>
      )
    }

    return <MenuComponent {...props} rootTrigger={undefined} ref={ref} />
  }
)
