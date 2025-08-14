/**
 * @packageDocumentation
 *
 * @module Menu
 *
 * This module provides a fully accessible, composable Menu component system using React and Floating UI.
 * It supports root menus, nested submenus, keyboard navigation, focus management, and customizable triggers.
 *
 * ## Usage
 *
 * ```tsx
 * import { Menu, MenuItem } from './menu'
 * import { Icon } from '@ltht-react/icon'
 *
 * <Menu
 *   label="Options"
 *   leftIcon={<Icon name="menu" />}
 * >
 *   <MenuItem label="Profile" />
 *   <MenuItem label="Settings" />
 *   <Menu label="More" leftIcon={<Icon name="more" />}>
 *     <MenuItem label="Subitem 1" />
 *     <MenuItem label="Subitem 2" />
 *   </Menu>
 *   <MenuItem label="Logout" />
 * </Menu>
 * ```
 *
 * - Use `<Menu>` as the root or nested menu container.
 * - Use `<MenuItem>` for selectable menu items.
 * - Pass `label`, `leftIcon`, and `rightIcon` props for customization.
 * - For root menus, you can use the `rootTrigger` prop to provide a custom button or icon trigger.
 * - Supports keyboard navigation, focus management, and accessibility out of the box.
 */
import {
  autoUpdate,
  ExtendedRefs,
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
import { forwardRef, HTMLAttributes, ReactNode, useEffect } from 'react'
import Icon, { IconButton, IconProps } from '@ltht-react/icon'
import { Button, ButtonProps } from '@ltht-react/button'
import {
  StyledRootMenu,
  StyledMenu,
  StyledMenuItem,
  TextWrapper,
  LeftIconWrapper,
  RightIconWrapper,
} from './menu.style'

/**
 * MenuContextState defines the shape of the context used for managing menu state and interactions.
 * @property getItemProps - Returns props for a menu item, optionally merging user-provided props.
 * @property activeIndex - The index of the currently active menu item, or null if none.
 * @property setActiveIndex - Setter for the active menu item index.
 * @property setHasFocusInside - Setter indicating if the menu has focus inside.
 * @property isOpen - Indicates if the menu is currently open.
 */
interface MenuContextState {
  getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>
  activeIndex: number | null
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>
  setHasFocusInside: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
}

const MenuContext = React.createContext<MenuContextState>({
  /* eslint-disable @typescript-eslint/no-empty-function */
  getItemProps: () => ({}),
  activeIndex: null,
  /* eslint-disable @typescript-eslint/no-empty-function */
  setActiveIndex: () => {},
  /* eslint-disable @typescript-eslint/no-empty-function */
  setHasFocusInside: () => {},
  isOpen: false,
})

/**
 * Props for the MenuComponent, which renders a menu trigger and its associated menu.
 * @property label - Optional label for the menu trigger.
 * @property leftIcon - Optional icon to display on the left of the label.
 * @property rightIcon - Optional icon to display on the right of the label.
 * @property nested - If true, indicates this menu is a nested submenu.
 * @property children - The menu items or submenus to render.
 * @property rootTrigger - The trigger component for the root menu (icon or button).
 * @property disabled - If true, disables the menu trigger.
 */
interface MenuProps<T extends HTMLElement = HTMLElement> {
  label?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  nested?: boolean
  children?: ReactNode
  rootTrigger?: RootMenuTrigger
  disabled?: boolean
  root?: React.MutableRefObject<T | null>
}

/**
 * RootMenuTrigger defines the type of trigger for the root menu.
 * Can be either IconButtonMenuProps or ButtonMenuProps.
 */
type RootMenuTrigger = IconButtonMenuProps | ButtonMenuProps

/**
 * Props for an icon button menu trigger.
 * @property type - Must be 'icon'.
 * @property iconProps - Props for the icon to display.
 * @property text - Optional text to display alongside the icon.
 * @property disabled - If true, disables the icon button.
 */
interface IconButtonMenuProps {
  type: 'icon'
  iconProps: IconProps
  text?: string
  disabled?: boolean
}

/**
 * Props for a button menu trigger.
 * @property type - Must be 'button'.
 * @property buttonProps - Props for the button component.
 * @property text - Text to display on the button.
 */
interface ButtonMenuProps {
  type: 'button'
  buttonProps: ButtonProps
  text: string
}

/**
 * MenuComponent renders a menu trigger (button or icon) and its associated floating menu.
 * Handles open/close state, keyboard navigation, focus management, and nested submenus.
 * Integrates with Floating UI for positioning and accessibility.
 * @param props - MenuProps and HTML button attributes.
 * @param forwardedRef - Ref to the trigger element.
 * @returns The menu trigger and its floating menu.
 */
export const MenuComponent = forwardRef<HTMLButtonElement, MenuProps & React.HTMLAttributes<HTMLButtonElement>>(
  ({ children, label, leftIcon, rightIcon, rootTrigger, root, ...props }, forwardedRef) => {
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
    useEffect(() => {
      if (!tree) return undefined

      const handleTreeClick = () => setIsOpen(false)

      const onSubMenuOpen = (event: { nodeId: string; parentId: string }) => {
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

    useEffect(() => {
      isOpen && tree && tree.events.emit('menuopen', { parentId, nodeId })
    }, [tree, isOpen, nodeId, parentId])

    const activeItem = parent.activeIndex === item.index ? 0 : -1

    return (
      <FloatingNode id={nodeId}>
        <MenuTrigger
          ref={forwardedRef}
          refs={refs}
          isNested={isNested}
          label={label}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          rootTrigger={rootTrigger}
          tabIndex={!isNested ? undefined : activeItem}
          role={isNested ? 'menuitem' : undefined}
          data-open={isOpen ? '' : undefined}
          data-nested={isNested ? '' : undefined}
          data-focus-inside={hasFocusInside ? '' : undefined}
          style={isNested ? undefined : props.style}
          {...getReferenceProps(
            parent.getItemProps({
              ...props,
              onFocus(event: React.FocusEvent<HTMLButtonElement>) {
                props.onFocus?.(event)
                setHasFocusInside(false)
                parent.setHasFocusInside(true)
              },
            })
          )}
          {...props}
        />

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
              <FloatingPortal root={root}>
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

const DefaultTriggerIcon = () => <Icon type="ellipsis-vertical" size="medium" />

interface MenuTriggerProps extends React.HTMLAttributes<HTMLElement> {
  refs: ExtendedRefs<HTMLButtonElement>
  isNested: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  label?: string
  rootTrigger?: RootMenuTrigger
}

/**
 * MenuTrigger renders the trigger element for a menu or submenu.
 * It handles both root and nested menu triggers, supporting icon buttons, standard buttons, or custom triggers.
 * For nested menus or when no rootTrigger is provided, it renders a styled menu trigger with optional icons and label.
 * For root menus, it renders either an IconButton or Button based on the rootTrigger type.
 *
 * @param props - MenuTriggerProps including refs, trigger configuration, icons, label, and additional HTML attributes.
 * @param props.refs - Floating UI and list item refs for positioning and focus management.
 * @param props.isNested - Indicates if this trigger is for a nested submenu.
 * @param props.leftIcon - Optional icon to display on the left of the label.
 * @param props.rightIcon - Optional icon to display on the right of the label.
 * @param props.label - Optional label text for the trigger.
 * @param props.rootTrigger - Configuration for the root menu trigger (icon or button).
 * @param forwardedRef - Ref to the trigger element.
 * @returns The trigger element for the menu or submenu.
 */
export const MenuTrigger = forwardRef<HTMLButtonElement, MenuTriggerProps & HTMLAttributes<HTMLButtonElement>>(
  ({ refs, isNested, leftIcon, rightIcon, label, rootTrigger, ...props }, forwardedRef) => {
    const item = useListItem()

    const mergedRefs = useMergeRefs([refs.setReference, item.ref, forwardedRef])

    if (isNested || !rootTrigger) {
      // check if no label or icons provided thus use default icon
      const finalLeftIconValue = !label && !leftIcon && !rightIcon ? <DefaultTriggerIcon /> : leftIcon
      return (
        <StyledRootMenu ref={mergedRefs} {...props} isNested={isNested}>
          <MenuLabel leftIcon={finalLeftIconValue} rightIcon={rightIcon} label={label} isNested={isNested} />
        </StyledRootMenu>
      )
    }

    switch (rootTrigger.type) {
      case 'icon':
        return (
          <IconButton
            ref={mergedRefs}
            iconProps={rootTrigger.iconProps}
            disabled={rootTrigger.disabled}
            text={rootTrigger.text}
            {...props}
          />
        )
      case 'button':
        return (
          <Button ref={mergedRefs} {...props} {...rootTrigger.buttonProps}>
            {rootTrigger.text}
          </Button>
        )
      default:
        return null
    }
  }
)

/**
 * Props for the MenuLabel component.
 * @property leftIcon - Icon to display on the left.
 * @property rightIcon - Icon to display on the right.
 * @property label - Optional label text.
 * @property isNested - If true, indicates this is a nested submenu label.
 */
interface MenuLabelProps {
  leftIcon: ReactNode
  rightIcon: ReactNode
  label?: string
  isNested: boolean
}

/**
 * MenuLabel renders the label and icons for a menu trigger.
 * Displays a right arrow for nested submenus.
 * @param props - MenuLabelProps.
 * @returns The label and icons for the menu trigger.
 */
const MenuLabel = ({ leftIcon, rightIcon, label, isNested }: MenuLabelProps) => {
  if (isNested)
    return (
      <>
        {leftIcon && <LeftIconWrapper>{leftIcon}</LeftIconWrapper>}
        {label && <TextWrapper>{label}</TextWrapper>}
        {isNested && <RightIconWrapper>▶</RightIconWrapper>}
      </>
    )

  return (
    <>
      {leftIcon}
      {label}
      {rightIcon}
    </>
  )
}

/**
 * Props for a MenuItem component.
 * @property label - Optional label for the menu item.
 * @property leftIcon - Optional icon to display on the left.
 * @property rightIcon - Optional icon to display on the right.
 * @property disabled - If true, disables the menu item.
 */
interface MenuItemProps {
  label?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  disabled?: boolean
}

/**
 * MenuItem renders a single item within a menu.
 * Handles focus, keyboard navigation, and click events.
 * Integrates with the menu context for accessibility and state management.
 * @param props - MenuItemProps and HTML button attributes.
 * @param forwardedRef - Ref to the menu item element.
 * @returns The styled menu item.
 *
 *
 * ## Usage
 *
 * ```tsx
 * import { Menu, MenuItem } from './menu'
 * import { Icon } from '@ltht-react/icon'
 *
 * <Menu
 *   label="Options"
 *   leftIcon={<Icon name="menu" />}
 * >
 *   <MenuItem label="Profile" />
 *   <MenuItem label="Settings" />
 *   <Menu label="More" leftIcon={<Icon name="more" />}>
 *     <MenuItem label="Subitem 1" />
 *     <MenuItem label="Subitem 2" />
 *   </Menu>
 *   <MenuItem label="Logout" />
 * </Menu>
 * ```
 */
export const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps & React.HTMLAttributes<HTMLButtonElement>>(
  ({ label, children, leftIcon, rightIcon, disabled, ...props }, forwardedRef) => {
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
        <TextWrapper>{label ?? children}</TextWrapper>
        {rightIcon && <RightIconWrapper>{rightIcon}</RightIconWrapper>}
      </StyledMenuItem>
    )
  }
)

/**
 * Menu is the main entry point for rendering a menu or submenu.
 * Automatically wraps the root menu in a FloatingTree for context management.
 * @param props - MenuProps and HTML button attributes.
 * @param ref - Ref to the menu trigger element.
 * @returns The menu trigger and its floating menu.
 *
 * ## Usage
 *
 * ```tsx
 * import { Menu, MenuItem } from './menu'
 * import { Icon } from '@ltht-react/icon'
 *
 * <Menu
 *   label="Options"
 *   leftIcon={<Icon name="menu" />}
 * >
 *   <MenuItem label="Profile" />
 *   <MenuItem label="Settings" />
 *   <Menu label="More" leftIcon={<Icon name="more" />}>
 *     <MenuItem label="Subitem 1" />
 *     <MenuItem label="Subitem 2" />
 *   </Menu>
 *   <MenuItem label="Logout" />
 * </Menu>
 * ```
 */
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
