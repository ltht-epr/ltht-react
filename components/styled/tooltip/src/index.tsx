import { useState, useRef, useLayoutEffect, HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'
import { getZIndex } from '@ltht-react/styles'

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right'

interface TooltipProps {
  content: string
  placement?: TooltipPlacement
}

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`

const TooltipBubble = styled.div<{
  placement: TooltipPlacement
  offsetX: number
  offsetY: number
  arrowOffsetX: number
  arrowOffsetY: number
}>`
  position: absolute;
  padding: 4px 8px;
  font-size: 0.875rem;
  color: white;
  background: black;
  border-radius: 4px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  z-index: ${getZIndex('tooltip')};

  ${({ placement, offsetX, offsetY }) =>
    placement === 'top' &&
    `
      bottom: 100%;
      left: 50%;
      transform: translateX(calc(-50% + ${offsetX}px)) translateY(${offsetY}px);
      margin-bottom: 0.5rem;
    `}

  ${({ placement, offsetX, offsetY }) =>
    placement === 'bottom' &&
    `
      top: 100%;
      left: 50%;
      transform: translateX(calc(-50% + ${offsetX}px)) translateY(${offsetY}px);
      margin-top: 0.5rem;
    `}

  ${({ placement, offsetX, offsetY }) =>
    placement === 'left' &&
    `
      right: 100%;
      top: 50%;
      transform: translateX(${offsetX}px) translateY(calc(-50% + ${offsetY}px));
      margin-right: 0.5rem;
    `}

  ${({ placement, offsetX, offsetY }) =>
    placement === 'right' &&
    `
      left: 100%;
      top: 50%;
      transform: translateX(${offsetX}px) translateY(calc(-50% + ${offsetY}px));
      margin-left: 0.5rem;
    `}

  &::after {
    content: '';
    position: absolute;
    border: 6px solid transparent;

    ${({ placement, arrowOffsetX, arrowOffsetY }) =>
      placement === 'top' &&
      `
        top: 100%;
        left: 50%;
        transform: translateX(calc(-50% + ${arrowOffsetX}px)) translateY(${arrowOffsetY}px);
        border-top-color: black;
        border-bottom: none;
      `}

    ${({ placement, arrowOffsetX, arrowOffsetY }) =>
      placement === 'bottom' &&
      `
        bottom: 100%;
        left: 50%;
        transform: translateX(calc(-50% + ${arrowOffsetX}px)) translateY(${arrowOffsetY}px);
        border-bottom-color: black;
        border-top: none;
      `}

    ${({ placement, arrowOffsetX, arrowOffsetY }) =>
      placement === 'left' &&
      `
        left: 100%;
        top: 50%;
        transform: translateX(${arrowOffsetX}px) translateY(calc(-50% + ${arrowOffsetY}px));
        border-left-color: black;
        border-right: none;
      `}

    ${({ placement, arrowOffsetX, arrowOffsetY }) =>
      placement === 'right' &&
      `
        right: 100%;
        top: 50%;
        transform: translateX(${arrowOffsetX}px) translateY(calc(-50% + ${arrowOffsetY}px));
        border-right-color: black;
        border-left: none;
      `}
  }
`

const Tooltip: FC<TooltipProps & HTMLAttributes<HTMLDivElement>> = ({
  content,
  children,
  placement = 'top',
  ...rest
}) => {
  const [visible, setVisible] = useState(false)
  const [finalPlacement, setFinalPlacement] = useState<TooltipPlacement>(placement)
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const [arrowOffsetX, setArrowOffsetX] = useState(0)
  const [arrowOffsetY, setArrowOffsetY] = useState(0)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!visible || !tooltipRef.current || !wrapperRef.current) return

    const tooltipRect = tooltipRef.current.getBoundingClientRect()
    const wrapperRect = wrapperRef.current.getBoundingClientRect()
    const { innerWidth, innerHeight } = window

    let newPlacement = placement
    let newOffsetX = 0
    let newOffsetY = 0
    let newArrowOffsetX = 0
    let newArrowOffsetY = 0

    // First, determine if we need to flip the placement
    if (placement === 'left' && wrapperRect.left - tooltipRect.width < 0) {
      newPlacement = 'right'
    } else if (placement === 'right' && wrapperRect.right + tooltipRect.width > innerWidth) {
      newPlacement = 'left'
    } else if (placement === 'top' && wrapperRect.top - tooltipRect.height < 0) {
      newPlacement = 'bottom'
    } else if (placement === 'bottom' && wrapperRect.bottom + tooltipRect.height > innerHeight) {
      newPlacement = 'top'
    }

    // Calculate offsets to prevent overflow for horizontal placements (top/bottom)
    if (newPlacement === 'top' || newPlacement === 'bottom') {
      const tooltipCenterX = wrapperRect.left + wrapperRect.width / 2
      const tooltipLeftEdge = tooltipCenterX - tooltipRect.width / 2
      const tooltipRightEdge = tooltipCenterX + tooltipRect.width / 2

      if (tooltipLeftEdge < 0) {
        // Tooltip would overflow on the left
        newOffsetX = -tooltipLeftEdge + 8 // 8px padding from edge
        newArrowOffsetX = -newOffsetX // Arrow stays centered on wrapper
      } else if (tooltipRightEdge > innerWidth) {
        // Tooltip would overflow on the right
        newOffsetX = innerWidth - tooltipRightEdge - 8 // 8px padding from edge
        newArrowOffsetX = -newOffsetX // Arrow stays centered on wrapper
      }
    }

    // Calculate offsets to prevent overflow for vertical placements (left/right)
    if (newPlacement === 'left' || newPlacement === 'right') {
      const tooltipCenterY = wrapperRect.top + wrapperRect.height / 2
      const tooltipTopEdge = tooltipCenterY - tooltipRect.height / 2
      const tooltipBottomEdge = tooltipCenterY + tooltipRect.height / 2

      if (tooltipTopEdge < 0) {
        // Tooltip would overflow at the top
        newOffsetY = -tooltipTopEdge + 8 // 8px padding from edge
        newArrowOffsetY = -newOffsetY // Arrow stays centered on wrapper
      } else if (tooltipBottomEdge > innerHeight) {
        // Tooltip would overflow at the bottom
        newOffsetY = innerHeight - tooltipBottomEdge - 8 // 8px padding from edge
        newArrowOffsetY = -newOffsetY // Arrow stays centered on wrapper
      }
    }

    setFinalPlacement(newPlacement)
    setOffsetX(newOffsetX)
    setOffsetY(newOffsetY)
    setArrowOffsetX(newArrowOffsetX)
    setArrowOffsetY(newArrowOffsetY)
  }, [visible, placement])

  return (
    <Wrapper ref={wrapperRef} {...rest} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      {children}
      {visible && (
        <TooltipBubble
          ref={tooltipRef}
          placement={finalPlacement}
          offsetX={offsetX}
          offsetY={offsetY}
          arrowOffsetX={arrowOffsetX}
          arrowOffsetY={arrowOffsetY}
        >
          {content}
        </TooltipBubble>
      )}
    </Wrapper>
  )
}

export default Tooltip
