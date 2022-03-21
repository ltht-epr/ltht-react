const MOBILE_BREAKPOINT = 768
const DESKTOP_BREAKPOINT = 1200

export const isTabletView = (width: number): boolean => width >= MOBILE_BREAKPOINT && width < DESKTOP_BREAKPOINT
export const isDesktopView = (width: number): boolean => width >= DESKTOP_BREAKPOINT
export const isMobileView = (width: number): boolean => width < MOBILE_BREAKPOINT
