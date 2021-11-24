import { FC, HTMLAttributes, ReactNode } from 'react'
import styled from '@emotion/styled'
import { ChevronIcon, ExclamationIcon, InfoCircleIcon } from '@ltht-react/icon'
import { BANNER_COLOURS, CSS_RESET } from '@ltht-react/styles'
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

export default Banner

interface IStyledBanner {
  type: StatusTypes
  canClick: boolean
}

interface IProps extends HTMLAttributes<HTMLDivElement> {
  type?: StatusTypes
  icon?: ReactNode
}
