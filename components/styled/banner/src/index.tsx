import { FC, HTMLAttributes, ReactNode } from 'react'
import styled from '@emotion/styled'
import { css, SerializedStyles } from '@emotion/react'
import { BANNER_COLOURS, BTN_COLOURS, CSS_RESET, DESKTOP_MINIMUM_MEDIA_QUERY } from '@ltht-react/styles'
import { ChevronIcon, ExclamationIcon, InfoCircleIcon } from '@ltht-react/icon'
import { StatusTypes } from '@ltht-react/types'

const generateStyles = (type: StatusTypes) => {
  switch (type) {
    case 'info':
      return {
        background: BANNER_COLOURS.INFO.BACKGROUND,
        borderColor: BANNER_COLOURS.INFO.BORDER,
        color: BANNER_COLOURS.INFO.TEXT,
        hover: BANNER_COLOURS.INFO.HOVER,
      }
    case 'warning':
      return {
        background: BANNER_COLOURS.WARNING.BACKGROUND,
        borderColor: BANNER_COLOURS.WARNING.BORDER,
        color: BANNER_COLOURS.WARNING.TEXT,
        hover: BANNER_COLOURS.WARNING.HOVER,
      }
    case 'danger':
      return {
        background: BANNER_COLOURS.DANGER.BACKGROUND,
        borderColor: BANNER_COLOURS.DANGER.BORDER,
        color: BANNER_COLOURS.DANGER.TEXT,
        hover: BANNER_COLOURS.DANGER.HOVER,
      }
    case 'highlight':
      return {
        background: BANNER_COLOURS.HIGHLIGHT.BACKGROUND,
        borderColor: BANNER_COLOURS.HIGHLIGHT.BORDER,
        color: BANNER_COLOURS.HIGHLIGHT.TEXT,
        hover: BANNER_COLOURS.HIGHLIGHT.HOVER,
      }
    default:
      return {}
  }
}

const StyledBanner = styled.div<IStyledBanner>`
  ${CSS_RESET};

  display: flex;
  align-items: center;
  padding: 0.75rem;
  background: ${({ type }) => generateStyles(type).background};
  color: ${({ type }) => generateStyles(type).color};
  border: 1px solid ${({ type }) => generateStyles(type).borderColor};

  &:hover {
    background: ${({ type, canClick }) => (canClick ? generateStyles(type).hover : generateStyles(type).background)};
    cursor: ${({ canClick }) => (canClick ? 'pointer' : 'default')};
  }
`

const StyledButton = styled.button<IButtProps>`
  disabled: ${({ disabled }) => (disabled === true ? 'true' : 'false')};
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 0.8rem;
  font-weight: bold;
  line-height: 1.5;
  border-radius: 4px;
  width: 100%;

  &:hover:not([disabled]) {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  ${DESKTOP_MINIMUM_MEDIA_QUERY} {
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
  }

  ${({ buttonStyle }): SerializedStyles => setColors(buttonStyle)}
`
type ButtonStyle = 'primary' | 'standard' | 'workflow' | 'danger' | 'clear'

const BannerContent = styled.div`
  flex: 1;
`

const StyledIcon = styled.div`
  margin-right: 10px;
`

const canClick = (props: IProps): boolean => props.onClick !== undefined

const Banner: FC<IProps> = ({ type = 'info', icon, children, ...rest }) => (
  <StyledBanner {...rest} type={type} canClick={canClick(rest)}>
    {icon ? (
      <StyledIcon>{icon}</StyledIcon>
    ) : (
      <StyledIcon>
        {type === 'info' && <InfoCircleIcon status="info" size="medium" />}
        {type === 'warning' && <ExclamationIcon status="amber" size="medium" />}
        {type === 'danger' && <ExclamationIcon status="red" size="medium" />}
      </StyledIcon>
    )}
    <BannerContent>{children}</BannerContent>
    {canClick(rest) && <ChevronIcon size="medium" direction="right" />}
  </StyledBanner>
)

export const BannerTwo: FC<IButtProps> = ({ type = 'info', icon, children, ...rest }) => (
  <StyledButton {...rest}>
    {icon ? (
      <StyledIcon>{icon}</StyledIcon>
    ) : (
      <StyledIcon>
        {type === 'info' && <InfoCircleIcon status="info" size="medium" />}
        {type === 'warning' && <ExclamationIcon status="amber" size="medium" />}
        {type === 'danger' && <ExclamationIcon status="red" size="medium" />}
      </StyledIcon>
    )}
    <BannerContent>{children}</BannerContent>
    {<ChevronIcon size="medium" direction="right" />}
  </StyledButton>
)

export default Banner

interface IStyledBanner {
  type: StatusTypes
  canClick: boolean
}

interface IProps extends HTMLAttributes<HTMLDivElement> {
  type?: StatusTypes
  icon?: ReactNode
}

interface IButtProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  type?: ButtonStyle
  buttonStyle: ButtonStyle
  icon?: ReactNode
}

const setColors = (buttonStyle: string): SerializedStyles => {
  switch (buttonStyle) {
    case 'primary':
      return css`
        color: ${BTN_COLOURS.PRIMARY.TEXT};
        background-color: ${BTN_COLOURS.PRIMARY.VALUE};
        &:hover {
          background-color: ${BTN_COLOURS.PRIMARY.HOVER};
        }

        &:disabled {
          background-color: ${BTN_COLOURS.PRIMARY.DISABLED};
        }
      `
    case 'standard':
      return css`
        color: ${BTN_COLOURS.STANDARD.TEXT};
        background-color: ${BTN_COLOURS.STANDARD.VALUE};
        &:hover {
          background-color: ${BTN_COLOURS.STANDARD.HOVER};
        }

        &:disabled {
          background-color: ${BTN_COLOURS.STANDARD.DISABLED};
        }
      `
    case 'workflow':
      return css`
        color: ${BTN_COLOURS.WORKFLOW.TEXT};
        background-color: ${BTN_COLOURS.WORKFLOW.VALUE};
        &:hover {
          background-color: ${BTN_COLOURS.WORKFLOW.HOVER};
        }

        &:disabled {
          background-color: ${BTN_COLOURS.WORKFLOW.DISABLED};
        }
      `
    case 'danger':
      return css`
        color: ${BTN_COLOURS.DANGER.TEXT};
        background-color: ${BTN_COLOURS.DANGER.VALUE};
        &:hover {
          background-color: ${BTN_COLOURS.DANGER.HOVER};
        }

        &:disabled {
          background-color: ${BTN_COLOURS.DANGER.DISABLED};
        }
      `

    case 'clear':
      return css`
        color: ${BTN_COLOURS.CLEAR.TEXT};
        background-color: ${BTN_COLOURS.CLEAR.VALUE};
        &:hover {
          background-color: ${BTN_COLOURS.CLEAR.HOVER};
        }

        &:disabled {
          background-color: ${BTN_COLOURS.CLEAR.DISABLED};
        }
      `
    default:
      return css``
  }
}
