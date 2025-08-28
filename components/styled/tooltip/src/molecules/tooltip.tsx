import { FC, PropsWithChildren, useState } from 'react'
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  Placement,
} from '@floating-ui/react'
import styled from '@emotion/styled'
import { BADGE_COLOURS } from '@ltht-react/styles'

const TooltipBubble = styled.div<{ type?: TooltipType }>`
  padding: 4px 8px;
  font-size: 0.875rem;

  border-radius: 4px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  z-index: 9999;

  background-color: ${({ type }) => {
    switch (type) {
      case 'warning':
        return BADGE_COLOURS.WARNING
      case 'error':
        return BADGE_COLOURS.DANGER
      case 'primary':
        return BADGE_COLOURS.PRIMARY
      default:
        return 'black'
    }
  }};
  color: ${({ type }) => {
    switch (type) {
      case 'warning':
        return 'white'
      case 'error':
        return 'white'
      case 'primary':
        return 'white'
      default:
        return 'white'
    }
  }};
`

const TooltipTrigger = styled.div`
  width: fit-content;
`

/**
 * A tooltip component that displays content in a floating bubble when hovering or focusing on children elements
 *
 * @component
 * @example usage
 * ```tsx
 *    <Tooltip content="Tooltip text" placement="top">
 *      <button>Hover me</button>
 *    </Tooltip>
 * ```
 *
 * @param props - Component props
 * @param {string} props.content - The text content to display in the tooltip
 * @param {Placement} [props.placement="top"] - The preferred placement of the tooltip relative to its trigger element
 * @param {TooltipType} [props.type] - The theme of the tooltip (warning, error, or primary)
 * @param {boolean} [props.localPortal=false] - If true, renders the tooltip in a portal at the end of the trigger node
 * @param {ReactNode} props.children - The trigger element that the tooltip will be attached to
 *
 * @returns A tooltip component that wraps the provided children
 */
const Tooltip: FC<TooltipProps & PropsWithChildren> = ({
  content,
  placement = 'top',
  type,
  localPortal = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [reference, setReference] = useState<HTMLDivElement | null>(null)

  const { refs, floatingStyles, context } = useFloating({
    elements: {
      reference,
    },
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    // Make sure the tooltip stays on the screen
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        fallbackAxisSideDirection: 'start',
      }),
      shift(),
    ],
  })

  // Event listeners to change the open state
  const hover = useHover(context, { move: false })
  const focus = useFocus(context)
  const dismiss = useDismiss(context)
  // Role props for screen readers
  const role = useRole(context, { role: 'tooltip' })

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role])

  return (
    <>
      <TooltipTrigger ref={setReference} {...getReferenceProps()}>
        {children}
      </TooltipTrigger>
      <FloatingPortal root={localPortal ? reference : undefined}>
        {isOpen && (
          <TooltipBubble type={type} ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
            {content}
          </TooltipBubble>
        )}
      </FloatingPortal>
    </>
  )
}

type TooltipType = 'warning' | 'error' | 'primary'

/**
 * Properties for the Tooltip component
 * @interface TooltipProps
 * @property {string} content - The text content to display in the tooltip
 * @property {Placement} [placement] - The preferred placement of the tooltip relative to its trigger element
 * @property {TooltipType} [type] - The theme of the tooltip
 * @property {boolean} [localPortal] - If true, renders the tooltip in a portal at the end of the trigger node. Useful for avoiding fullscreen issues.
 */
export interface TooltipProps {
  content: string
  placement?: Placement
  type?: TooltipType
  localPortal?: boolean
}

export default Tooltip
