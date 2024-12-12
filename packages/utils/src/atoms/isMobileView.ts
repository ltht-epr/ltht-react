import { MOBILE_BREAKPOINT } from '@ltht-react/styles'

const isMobileView = (width: number): boolean => width <= MOBILE_BREAKPOINT.max

export default isMobileView
