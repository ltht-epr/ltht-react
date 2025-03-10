import { DESKTOP_BREAKPOINT } from '@ltht-react/styles'

const isDesktopView = (width: number): boolean => width >= DESKTOP_BREAKPOINT.min && width <= DESKTOP_BREAKPOINT.max

export default isDesktopView
