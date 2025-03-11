import { WIDESCREEN_BREAKPOINT } from '@ltht-react/styles'

const isWidescreenView = (width: number): boolean => width >= WIDESCREEN_BREAKPOINT.min

export default isWidescreenView
