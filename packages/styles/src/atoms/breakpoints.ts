export const MOBILE_BREAKPOINT: DisplayBreakpoint = { min: 0, max: 767 }
export const TABLET_BREAKPOINT: DisplayBreakpoint = { min: 768, max: 1023 }
export const DESKTOP_BREAKPOINT: DisplayBreakpoint = { min: 1024, max: 1199 }
export const WIDESCREEN_BREAKPOINT: DisplayBreakpoint = { min: 1200, max: Number.MAX_SAFE_INTEGER }

type DisplayBreakpoint = {
  min: number
  max: number
}
