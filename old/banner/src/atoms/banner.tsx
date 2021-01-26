import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css, SerializedStyles } from '@emotion/core'
import { BANNER_COLOURS } from '@ltht-react/styles'

const setColors = (bannerStyle: string): SerializedStyles => {
  switch (bannerStyle) {
    case 'default':
      return css`
        color: ${BANNER_COLOURS.DEFAULT.TEXT};
        background-color: ${BANNER_COLOURS.DEFAULT.BACKGROUND};
      `
    case 'info':
      return css`
        color: ${BANNER_COLOURS.INFO.TEXT};
        background-color: ${BANNER_COLOURS.INFO.BACKGROUND};
      `
    case 'warning':
      return css`
        color: ${BANNER_COLOURS.WARNING.TEXT};
        background-color: ${BANNER_COLOURS.WARNING.BACKGROUND};
      `
    case 'error':
      return css`
        color: ${BANNER_COLOURS.DANGER.TEXT};
        background-color: ${BANNER_COLOURS.DANGER.BACKGROUND};
      `
    default:
      return css``
  }
}

const StyledBanner = styled('div')<StyledProps>`
  display: flex;
  align-items: center;
  white-space: nowrap;
  border: 1px solid transparent;
  padding: 0.25rem 0.5rem;
  ${({ bannerStyle }): SerializedStyles => setColors(bannerStyle)}
  ${({ onClick }): ConditionalStyles =>
    onClick &&
    css`
      &:hover {
        cursor: pointer;
      }
    `}
`

const Banner: React.FC<Props> = ({ children, bannerStyle = 'default', clickHandler = null }) => {
  const handleOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.preventDefault()
    if (clickHandler != null) {
      clickHandler(e)
    }
  }

  const bannerProps = {
    bannerStyle,
    ...(clickHandler && { onClick: handleOnClick }),
  }

  return (
    <StyledBanner id="banner" {...bannerProps}>
      {children}
    </StyledBanner>
  )
}

type BannerStyle = 'default' | 'info' | 'warning' | 'error'
type ConditionalStyles = SerializedStyles | undefined

interface Props extends BannerProps {
  bannerStyle?: BannerStyle
}

interface StyledProps {
  bannerStyle: BannerStyle
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  clickHandler?(e: React.MouseEvent<HTMLElement, MouseEvent>): void
}

export default Banner
