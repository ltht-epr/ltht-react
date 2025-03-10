import { TABLET_BREAKPOINT } from '@ltht-react/styles'

const isTabletView = (width: number): boolean => width >= TABLET_BREAKPOINT.min && width <= TABLET_BREAKPOINT.max

export default isTabletView
