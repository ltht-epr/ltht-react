import { DESKTOP_BREAKPOINT, MOBILE_BREAKPOINT, TABLET_BREAKPOINT, WIDESCREEN_BREAKPOINT } from './breakpoints'

export const SMALL_SCREEN_MAXIMUM_MEDIA_QUERY = '@media only screen and (max-width: 400px)'
export const MOBILE_MAXIMUM_MEDIA_QUERY = `@media only screen and (max-width: ${MOBILE_BREAKPOINT.max}px)`
export const TABLET_MINIMUM_MEDIA_QUERY = `@media only screen and (min-width: ${TABLET_BREAKPOINT.min}px)`
export const TABLET_ONLY_MEDIA_QUERY = `@media only screen and (min-width: ${TABLET_BREAKPOINT.min}px) and (max-width: ${TABLET_BREAKPOINT.max}px)`
export const DESKTOP_MINIMUM_MEDIA_QUERY = `@media only screen and (min-width: ${DESKTOP_BREAKPOINT.min}px)`
export const DESKTOP_ONLY_MEDIA_QUERY = `@media only screen and (min-width: ${DESKTOP_BREAKPOINT.min}px) and (max-width: ${DESKTOP_BREAKPOINT.max}px)`
export const WIDESCREEN_MINIMUM_MEDIA_QUERY = `@media only screen and (min-width: ${WIDESCREEN_BREAKPOINT.min}px)`
