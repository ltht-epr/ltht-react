/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'
import { BANNER_COLOURS } from '@ltht-react/styles'

const onHover = css`
  &:hover {
    cursor: pointer;
  }
`

export const styles = (
  clickable: boolean
): {
  base: SerializedStyles
  default: SerializedStyles
  primary: SerializedStyles
  warning: SerializedStyles
  error: SerializedStyles
  icon: SerializedStyles
} => {
  return {
    base: css`
      display: flex;
      align-items: center;
      white-space: nowrap;
      border: 1px solid transparent;
      padding: 0.5rem;
    `,
    default: css`
      color: ${BANNER_COLOURS.DEFAULT.TEXT};
      background-color: ${BANNER_COLOURS.DEFAULT.VALUE};
      ${clickable} && &:hover {
        cursor: pointer;
      }
    `,
    primary: css`
      color: ${BANNER_COLOURS.PRIMARY.TEXT};
      background-color: ${BANNER_COLOURS.PRIMARY.VALUE};
      ${clickable} && &:hover {
        cursor: pointer;
      }
    `,
    warning: css`
      color: ${BANNER_COLOURS.WARNING.TEXT};
      background-color: ${BANNER_COLOURS.WARNING.VALUE};
      ${clickable && onHover}
    `,
    error: css`
      color: ${BANNER_COLOURS.ERROR.TEXT};
      background-color: ${BANNER_COLOURS.ERROR.VALUE};
      ${clickable} && &:hover {
        cursor: pointer;
      }
    `,
    icon: css`
      display: block;
    `,
  }
}

const Banner: React.FC<Props> = ({ children, bannerStyle = 'default', clickHandler = null }) => {
  const clickable = clickHandler != null

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.preventDefault()
    if (clickHandler != null) {
      clickHandler(e)
    }
  }

  return (
    <div id="banner" css={[styles(clickable).base, styles(clickable)[bannerStyle]]} onClick={handleClick}>
      {children}
    </div>
  )
}

type BannerStyle = 'default' | 'primary' | 'warning' | 'error'

interface Props extends BannerProps {
  bannerStyle?: BannerStyle
}

export interface BannerProps {
  clickHandler?(e: React.MouseEvent<HTMLElement, MouseEvent>): void
}

export default Banner
